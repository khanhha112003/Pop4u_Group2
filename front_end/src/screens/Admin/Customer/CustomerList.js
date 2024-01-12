import React, { useState, useEffect } from "react";
import './CustomerList.css';
import { ReactComponent as SearchIcon } from "../Customer/search.svg"
import { ReactComponent as EditIcon } from "../Customer/Icon_edit.svg"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { BASE_URL } from "../../../app_logic/APIHandler";
import LoadingPage from "../../Loading/LoadingPage";
import axios from "axios";

function CustomerManagementAdmin() {

	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const navigate = useNavigate();
	const [filterCategory, setFilterCategory] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const { user, logout } = useAuth();

	useEffect(() => {
		async function fetchData() {
			try {
				const getRequest = await axios.get(BASE_URL + '/auth/all_users',
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
						setSearchTerm('')
						setLoading(false);
				} else {
					setLoading(true);
				}
			} catch (error) {
				if (error.response.status === 401) {	// Unauthorized
					logout((val) => { });
				} else {
					setLoading(true);
					alert("Lỗi mạng")
				}
			}
		}
		fetchData();
	}, [logout, user.access_token]);

	const filteredCustomers = data.filter((customer) =>
		customer.role.toLowerCase().includes(filterCategory.toLowerCase()) &&
		customer.username.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleEditOnRowIndex = (index) => {
		alert("Chức năng đang được phát triển")
	}

	if (isLoading) {
		return (
			<LoadingPage isAdmin={true} />
		)
	}

	return (
		<div className="container margin">
			<h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Danh sách khách hàng</h2>
			<hr></hr>

			<div className="search-container margin">
				<input
					className="search-input"
					type="text"
					placeholder="Nhập SĐT"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					style={{ color: '#3F5AA9' }} />
				<button className="search-button">
					<SearchIcon className="search-icon fas fa-search text-danger"></SearchIcon>
				</button>


			</div>
			<div className='margin'>
				<label htmlFor="categoryFilter">Phân loại khách hàng</label>
				<select
					id="categoryFilter"
					onChange={(e) => setFilterCategory(e.target.value)}
					value={filterCategory}
				>
					<option value="">Tất cả</option>
					{/* Tạo các option từ danh sách category duy nhất */}
					{[...new Set(data.map((customer) => customer.type))].map(
						(type, index) => (
							<option key={index} value={type}>
								{type}
							</option>
						)
					)}
				</select>
			</div>
			{/* Bảng hiển thị danh sách sản phẩm */}
			<table>
				<thead>
					<tr>
						<th>Tên Khách hàng</th>
						<th>Email</th>
						<th>Số điện thoại</th>
						<th>Ngày sinh</th>
						{/* <th>Điểm tích lũy</th> */}
						<th>Loại khách hàng</th>
						<th>Xem chi tiết</th>
					</tr>
				</thead>
				<tbody>
					{filteredCustomers.map((customer, index) => (
						<tr key={index}>
							<td>
								<b className="name" onClick={() => navigate("/admin/customer_detail")} style={{ cursor: "pointer" }}>{customer.name}</b>
								<br />
								{customer.fullname}
							</td>
							<td>{customer.email}</td>
							<td>{customer.phone_number}</td>
							<td>{customer.birthdate}</td>
							{/* <td>{customer.point}</td> */}
							<td>{customer.role}</td>
							<td className="text-center">
								<a onClick={ () => handleEditOnRowIndex(index)}  style={{ cursor: "pointer" }}>
									<EditIcon/>
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export { CustomerManagementAdmin };