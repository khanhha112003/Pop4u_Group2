import React, { useState } from 'react';
import './VoucherList.css';

const VoucherList = () => {
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
      <h2>Danh sách Voucher</h2>
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select
        id="categoryFilter"
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
      >
        <option value="">All</option>
        {/* Tạo các option từ danh sách category duy nhất */}
        {[...new Set(data.map((voucher) => voucher.category))].map(
          (category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          )
        )}
      </select>
        <div className="margin">
      <input
        type="text"
        placeholder="Search by Mã giảm giá"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
      {/* Bảng hiển thị danh sách sản phẩm */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mã giảm giá</th>
            <th>Loại giảm giá</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {filteredVouchers.map((voucher, index) => (
            <tr key={index}>
              <td>{voucher._id}</td>
              <td>{voucher.voucher_code}</td>
              <td>{voucher.category}</td>
              <td>{voucher.description}</td>
  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { VoucherList };
