import React, { useState } from "react";
import './CustomerList.css';


function CustomerManagementAdmin () {
  const data = [
    {
      "_id":'1',
      "name": "Xuân Thiều",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "0975109849",
      "datebirth": "01/01/2003",
      "point":"20",
      'type':"Thân thiết",
    },
    {
      "_id":'2',
      "name": "Thanh Lực",
      "email": "lucnt21411@st.uel.edu.vn",
      "phone": "08132943943",
      "datebirth": "01/01/2003",
      "point":"200",
      'type':"VIP",
    },
    {
      "_id":'3',
      "name": "Thanh Tâm",
      "email": "tamltt21411@st.uel.edu.vn",
      "phone": "0294241424",
      "datebirth": "01/01/2003",
      "point":20,
      'type':"Thân thiết",
    },
    {
      "_id":'4',
      "name": "Khánh Hà",
      "email": "hapnk21411@st.uel.edu.vn",
      "phone": "0294241424",
      "datebirth": "01/01/2003",
      "point":400,
      'type':"VIP",
    },
    {
      "_id":'5',
      "name": "Anh Thuy",
      "email": "thuybta21411@st.uel.edu.vn",
      "phone": "0192434224",
      "datebirth": "01/01/2003",
      "point":20,
      'type':"Thân thiết",
    },
    {
      "_id":'6',
      "name": "Gia Huy",
      "email": "huylg21411@st.uel.edu.vn",
      "phone": "07213144",
      "datebirth": "01/01/2003",
      "point":200,
      'type':"VIP",
    },
    {
      "_id":'7',
      "name": "Như Ý",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "0294241424",
      "datebirth": "01-01-2003",
      "point":60,
      'type':"Thân thiết",
    },
    // Add more products here
  ];
  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = data.filter((customer) =>
    customer.type.toLowerCase().includes(filterCategory.toLowerCase()) &&
    customer.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container margin">
      <h2 className="center m-4">Danh sách khách hàng</h2>
      <div className="m-4 center">
      <label htmlFor="categoryFilter">Tra cứu</label>
      <input
        className="m-2"
        type="text"
        placeholder="Nhập SĐT"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="mt-4 mb-2">
      <label htmlFor="categoryFilter">Phân loại khách hàng</label>
      <select
        className="m-2"
        id="categoryFilter"
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
      >
        <option value="">All</option>
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
            <th>Điểm tích lũy</th>
            <th>Loại khách hàng</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>
                <b className="name">{customer.name}</b>
                <br/>
                id: {customer._id}
              </td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.datebirth}</td>
              <td>{customer.point}</td>
              <td>{customer.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export {CustomerManagementAdmin};
