import React, { useState, useEffect } from 'react';
import './VoucherList.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../Product/icon_productadmin_search.svg"
import { ReactComponent as TrashIcon } from "./trash.svg"
import axios from 'axios';
import { BASE_URL } from '../../../app_logic/APIHandler';
import { useAuth } from '../../../hooks/useAuth';

const VoucherList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filterVoucher, setFilterVoucher] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const { user, logout } = useAuth();
    useEffect(() => {
        async function fetchData() {
            try {
                const req = await axios.get(BASE_URL + '/product/get_all_voucher',
                    {
                        headers: {
                            'Authorization': `Bearer ${user.access_token}`,
                            'Access-Control-Allow-Origin': '*',
                            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                            'Content-Type': 'application/json'
                        }
                    })
                if (req.data) {
                    setData(req.data);
                } else {
                    alert("Lỗi mạng");
                }
            } catch (error) {
                console.log(error);
                if (error.response.status === 401) {
                    alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
                    logout((val) => {});
                } else {
                    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
                }
            }
        }
        fetchData();
    }, []);

    const deleteVoucher = async (code) => {
        if (window.confirm("Bạn có chắc chắn muốn xoá voucher này?")) {
            async function deleteData() {
                try {
                    const req = await axios.delete(BASE_URL + '/product/delete_voucher?voucher_code=' + code,
                        {
                            headers: {
                                'Authorization': `Bearer ${user.access_token}`,
                                'Access-Control-Allow-Origin': '*',
                                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                                'Content-Type': 'application/json'
                            },
                           
                        })
                    if (req) {
                        alert("Xoá voucher thành công!");
                        navigate(0, { replace: true })
                    }
                } catch (error) {
                    console.log(error);
                    if (error.response.status === 401) {
                        alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
                        logout((val) => { });
                    } else {
                        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
                    }
                }
            }
            await deleteData();
        }
    }


    const filteredVouchers = data.filter((voucher) => {
        if (filterVoucher === 'true') {
            return [true].includes(voucher.is_active) &&
            voucher.code.toLowerCase().includes(searchTerm.toLowerCase())
        } else if (filterVoucher === 'false') {
            return [false].includes(voucher.is_active) &&
            voucher.code.toLowerCase().includes(searchTerm.toLowerCase())
        }
        return [true, false].includes(voucher.is_active) &&
            voucher.code.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <div className="container margin">
            <h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Danh sách Voucher</h2>
            <hr></hr>
            <button 
                style={{margin: 0}}
                onClick={() => navigate("/admin/add_voucher")}
                className="add-button custom">
                    Tạo mới
            </button>
            <div className="search-container margin">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Nhập Mã giảm giá"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ color: '#3F5AA9' }}
                />
                <button className="search-button">
                    <SearchIcon className="search-icon fas fa-search text-danger"></SearchIcon>
                </button>
            </div>
            <hr/>
            <div className='margin'>
                <label htmlFor="categoryFilter" style={{marginRight: 20}}>Phân loại:   </label>
                <select
                    id="categoryFilter"
                    onChange={(e) => setFilterVoucher(e.target.value)}
                    multiple={false}
                    value={filterVoucher}
                >
                    <option value="all">Tất cả</option>
                    {/* Tạo các option từ danh sách category duy nhất */}
                    {[...new Set(data.map((voucher) => voucher.is_active))].map(
                        (is_active, index) => (
                            <option key={index} value={is_active}>
                                {is_active}
                            </option>
                        )
                    )}
                </select>
            </div>

            {/* Bảng hiển thị danh sách sản phẩm */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mã giảm giá</th>
                        <th>Giá trị giảm giá</th>
                        <th>Còn hiệu lực</th>
                        <th>Số lượt sử dụng</th>
                        <th className="text-center">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredVouchers.map((voucher, index) => (
                        <tr key={index}>
                            <td className="text-center">{index}</td>
                            <td className="text-center">{voucher.code}</td>
                            <td className="text-center">{voucher.discount_amount}</td>
                            <td className="text-center">{voucher.is_active}</td>
                            <td className="text-center">{voucher.number_of_use}</td>
                            <td className="text-center">
                                <div
                                    onClick={() => deleteVoucher(voucher.code)}
                                    style={{ cursor: "pointer" }}>
                                    <TrashIcon />
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { VoucherList };
