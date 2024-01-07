import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderList.css';

const OrderList = () => {
  const data = [
    {
      id: 10007,
      customer: "Nữ đại gia bao shop",
      date: "2023-12-14",
      phone: "0254823646",
      addr: "125 Thủ Đức",
      value: 2500000,
      paymethod: "COD",
      status: "In-transit",
    },
    {
      id: 10008,
      customer: "Nữ đại gia bao shop",
      date: "2023-11-15",
      phone: "02548257646",
      addr: "125 Thủ Đức",
      value: 1500000,
      paymethod: "Chuyển khoản",
      status: "Done",
    },
    {
      id: 10009,
      customer: "Nữ đại gia bao shop",
      date: "2024-01-06",
      phone: "0254783646",
      addr: "125 Thủ Đức",
      value: 1600000,
      paymethod: "Chuyển khoản",
      status: "In-prepare",
    },
    
    
    // Add more products here
  ];
 
  // Filter
  // Search Bar
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(data);

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



  return (
    <div className="container">
      <h2 className="margin text-center">Danh sách đơn hàng</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm theo OrderID hoặc sđt"
              value={searchTerm}
              onChange={handleChange}
            />
            <button onClick={handleSearch}>Tìm</button>
          </div>
           <div className='Status filter'>
          {/* <div className="filter-bar"> */}
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
            <th>OrderID</th>
            <th>Tên khách hàng</th>
            <th>Ngày đặt hàng</th>
            <th>SĐT</th>
            <th>Tổng giá trị đơn</th>
            <th>Phương thức thanh toán</th>
            <th>Trạng thái</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
        {searchResults.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.phone}</td>
              <td>{order.value}</td>
              <td>{order.paymethod}</td>
              <td>
                <span className= {`status ${order.status}`}> {order.status} </span>
              </td>
              <td>Chi tiết</td>
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
