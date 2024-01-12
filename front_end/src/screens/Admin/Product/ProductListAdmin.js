import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "./icon_productadmin_search.svg"
import { ReactComponent as EditIcon } from "../../UserProfile/Icon_edit.svg"
import { basicGetRequets, BASE_URL } from '../../../app_logic/APIHandler';
import axios from 'axios';
import LoadingPage from '../../Loading/LoadingPage';
import { useAuth } from '../../../hooks/useAuth';

const ProductListAdmin = () => {
	const navigate = useNavigate();
	const [productData, setProductData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filterCategory, setFilterCategory] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const { user, logout } = useAuth();

	useEffect(() => {
		// Lấy dữ liệu từ API
		async function excuteOrder() {
			const token = 'Bearer ' + user.access_token;
			try {
				const getProfileRequest = await axios.get(BASE_URL + "/product/product_list",
				{
					headers: {
						'content-type': 'application/json',
						'Authorization': token,
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
					}
				})
				if (getProfileRequest.data) {
					basicGetRequets("/product/product_list", { type_filter: "all", limit: 1000 })
						.then((data) => {
							const serverItem = data.data.list_product;
							setProductData(serverItem);
						}
						).catch(_error => {
							setLoading(true);
						}). finally(() => {
							setLoading(false);
						});
				} else {
					setLoading(true);
				}
			} catch (error) {
				if (error.response.status === 401) {	// Unauthorized
					logout((val) => { });
				} else {
					setLoading(true);
				}
			}
		}
		excuteOrder();
	},[logout, user.access_token]);


	const filteredProducts = productData.filter((product) =>
		product.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
		product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (loading) {
        return <LoadingPage isAdmin={true} />;
    }

	return (
		<div className="container margin">
			<h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Danh sách sản phẩm</h2>
			<hr></hr>
			<button onClick={() => navigate("/admin/add_product")} className="add-button " type="submit">
				Tạo mới
			</button>
			<div className="search-container margin">
				<input
					className="search-input"
					type="text"
					placeholder="Nhập tên sản phẩm"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					style={{ color: '#3F5AA9' }} />
				<button className="search-button">
					<SearchIcon className="search-icon fas fa-search text-danger"></SearchIcon>
				</button>
			</div>

			<div className='margin'>
				<label htmlFor="categoryFilter">Danh mục sản phẩm: </label>
				<select
					id="categoryFilter"
					onChange={(e) => setFilterCategory(e.target.value)}
					value={filterCategory}
				>
					<option value="">Tất cả</option>
					{/* Tạo các option từ danh sách category duy nhất */}
					{[...new Set(productData.map((product) => product.category))].map(
						(category, index) => (
							<option key={index} value={category}>
								{category}
							</option>
						)
					)}
				</select>
			</div>

			{/* Bảng hiển thị danh sách sản phẩm */}
			<table  >
				<thead>
					<tr >
						<th>Hình sản phẩm </th>
						<th>Tên sản phẩm</th>
						<th>Mã sản phẩm </th>
						<th>Danh mục sản phẩm</th>
						<th>Giá khuyến mãi</th>
						<th>Giá bán</th>
						<th>Tồn kho</th>
						<th>Xem chi tiết</th>
					</tr>
				</thead>
				<tbody >
					{filteredProducts.map((product, index) => (
						<tr key={index}>
							<td className="text-center">
								<img
									src={product.list_product_image[0]}
									alt={product.product_name}
									style={{ width: '50px', height: '50px' }}
								/>
							</td>
							<td>{product.product_name}</td>
							<td>{product.product_code}</td>
							<td>{product.category}</td>
							<td>{product.discount_price}</td>
							<td>{product.sell_price}</td>
							<td>{product.product_stock}</td>
							<td className="text-center"><div onClick={() => navigate("/admin/product_detail", {
								state: { product_code: product.product_code }
							})} style={{ cursor: "pointer" }}><EditIcon></EditIcon></div></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export { ProductListAdmin };
