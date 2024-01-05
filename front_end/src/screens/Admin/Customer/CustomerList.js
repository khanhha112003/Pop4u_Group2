<<<<<<< HEAD
import React, { useState } from "react";
import './CustomerList.css';


function CustomerList () {
  const data = [
    {
      "_id":'1',
      "name": "Xuân Thiều",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "08132943943",
      "address": "Quảng Nam",
      "point":"20",
      'lastdate':"",
    },
    {
      "_id":'2',
      "name": "Thanh Lực",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "08132943943",
      "address": "Tiền Giang",
      "point":"20",
      'lastdate':"",
    },{
      "_id":'3',
      "name": "Thanh Tâm",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "08132943943",
      "address": "Đà Lạt",
      "point":"20",
      'lastdate':"",
    },
    // Add more products here
  ];
  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.filter((product) =>
    product.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Danh sách khách hàng</h2>
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select
        id="categoryFilter"
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
      >
        <option value="">All</option>
        {/* Tạo các option từ danh sách category duy nhất */}
        {[...new Set(data.map((product) => product.category))].map(
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
        placeholder="Search by Product Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
      {/* Bảng hiển thị danh sách sản phẩm */}
      <table>
        <thead>
          <tr>
            <th>Product Photo</th>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Category</th>
            <th>Discount Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src={product.photo[0]}
                  alt={product.product_name}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>{product.product_name}</td>
              <td>{product.product_code}</td>
              <td>{product.category}</td>
              <td>{product.discount_price.$numberInt}</td>
              <td>{product.stock.$numberInt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export {CustomerList};
=======
export const CustomerManagementAdmin = () => {
    return (
        <div>
        <h1>CustomerManagementAdmin</h1>
        </div>
    );
}
>>>>>>> bd6795ef96ef59a1574f715817de77ce31c79c6b
