import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderList.css';
import { ReactComponent as SearchIcon } from "../Product/icon_productadmin_search.svg";
import { ReactComponent as EditIcon } from "../../UserProfile/Icon_edit.svg"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../../../app_logic/APIHandler';
import { useAuth } from '../../../hooks/useAuth';
import LoadingPage from '../../Loading/LoadingPage';
const OrderList = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);
	const [searchResults, setSearchResults] = useState([]);
	const { user, logout } = useAuth();
	useEffect(() => {
		async function fetchData() {
			try {
				const getRequest = await axios.get(BASE_URL + '/order/all_orders',
					{
						headers: {
							'Authorization': `Bearer ${user.access_token}`,
							'Access-Control-Allow-Origin': '*',
							"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
							'Content-Type': 'application/json'
						}
					});
				if (getRequest.data) {
						setData(getRequest.data)
						setSearchResults(getRequest.data)
						setLoading(false);
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
		fetchData();
	}, []);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearch = () => {
		const filteredResults = data.filter(
			(order) =>
				order.id.toString().includes(searchTerm) ||
				order.phone.includes(searchTerm)
		);
		setSearchResults(filteredResults);
	};
	const handleClearSearch = () => {
		setSearchTerm('');
		setSearchResults(data);
	};


	//Column Filter
	//Sort by status
	const [filterStatus, setFilterStatus] = useState('');
	const handleFilterByStatus = (selectedStatus) => {
		setFilterStatus(selectedStatus);

		const filteredResults = data.filter((order) =>
			selectedStatus ? order.status === selectedStatus : true
		);

		setSearchResults(filteredResults);
	};


	if (loading) {
		return <LoadingPage />;
	}
	return (
		<div className="container margin">
			<h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Danh sách đơn hàng</h2>
			<hr></hr>
			<div className="search-container margin">
				<input
					className="search-input"
					style={{ color: '#3F5AA9' }}
					type="text"
					placeholder="Tìm theo OrderID hoặc sđt"
					value={searchTerm}
					onChange={handleChange}
				/>
				<button className="search-button" onClick={handleSearch}>
					<SearchIcon className="search-icon fas fa-search text-danger"></SearchIcon>
				</button>
			</div>
			<div className='Status filter margin'>
				<select
					value={filterStatus}
					onChange={(e) => handleFilterByStatus(e.target.value)}
				>
					<option value="">Lọc theo tình trạng đơn</option>
					<option value="In-transit">In-transit</option>
					<option value="In-prepare">In-prepare</option>
					<option value="Done">Done</option>

				</select>
				{/* </div> */}
			</div>
			<div className='table'>
				{/* Bảng hiển thị danh sách sản phẩm */}
				<table>
					<thead>
						<tr>
							<th>Tên khách hàng</th>
							<th>Ngày đặt hàng</th>
							<th>SĐT</th>
							<th>Voucher</th>
							<th>Tổng giá trị đơn</th>
							<th>Phương thức thanh toán</th>
							<th>Trạng thái</th>
							<th>Xem chi tiết</th>
						</tr>
					</thead>
					<tbody>
						{searchResults.map((order, index) => (
							<tr key={index}>
								<td>{order.username}</td>
								<td>{order.order_date}</td>
								<td>{order.phone}</td>
								<td>{order.coupon_code}</td>
								<td>{order.total_price}</td>
								<td>{order.payment_method}</td>
								<td>
									<span className={`status ${order.status}`}> {order.status} </span>
								</td>
								<td className="text-center"><a onClick={() => navigate("/admin/order_detail")} style={{ cursor: "pointer" }}><EditIcon></EditIcon></a></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='Return button'>
				{searchResults.length > 0 && (
					<div className="return-button">
						<button onClick={handleClearSearch}>Return</button>
					</div>
				)}
			</div>
		</div>
	);
};

export { OrderList };
