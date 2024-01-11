import React, { useState } from 'react';
import './VoucherList.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../Product/icon_productadmin_search.svg" 
import { ReactComponent as EditIcon } from "../../UserProfile/Icon_edit.svg"

const VoucherList = () => {
  const navigate = useNavigate();
  const data = [
    {
      "_id": 1,
      "category": "Giảm tiền (VND)",
      "voucher_code": "TET2024",
      "description": "Giảm 20k",
    },
    {
      "_id": 2,
      "category": "Giảm giá (%)",
      "voucher_code": "KHM001",
      "description": "Giảm 10%",
    },
    {
      "_id": 3,
      "category": "Freeship",
      "voucher_code": "TAT001",
      "description": "Freeship",
    },
    
    
    // Add more products here
  ];

  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVouchers = data.filter((voucher) =>
  voucher.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
  voucher.voucher_code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container margin">
       <h2 className="text-center" style={{color:'#3F5AA9', marginTop:'1%'}}>Danh sách Voucher</h2>
       <hr></hr>
      <a onClick={() => navigate("/admin/add_voucher")}><button className="add-button" type="submit">Tạo mới</button></a>
      <div className="search-container margin">
  <input 
  className="search-input"
        type="text"
        placeholder="Nhập Mã giảm giá"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{color:'#3F5AA9'}}
      />
        <button className="search-button">
  <SearchIcon className="search-icon fas fa-search text-danger"></SearchIcon>
  </button>
    </div>
      <div className='margin'>
      <label htmlFor="categoryFilter">Phân loại:</label>
      <select
        id="categoryFilter"
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
      >
        <option value="">Tất cả</option>
        {/* Tạo các option từ danh sách category duy nhất */}
        {[...new Set(data.map((voucher) => voucher.category))].map(
          (category, index) => (
            <option key={index} value={category}>
              {category}
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
            <th>Loại giảm giá</th>
            <th>Mô tả</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {filteredVouchers.map((voucher, index) => (
            <tr key={index}>
              <td>{voucher._id}</td>
              <td>{voucher.voucher_code}</td>
              <td>{voucher.category}</td>
              <td>{voucher.description}</td>
              <td className="text-center"><a onClick={() => navigate("/admin/voucher_detail")} style={{cursor: "pointer"}}><EditIcon></EditIcon></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { VoucherList };
