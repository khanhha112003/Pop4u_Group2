import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderList.css';
import { ReactComponent as SearchIcon } from "../Product/icon_productadmin_search.svg" ;
import { ReactComponent as EditIcon } from "../../UserProfile/Icon_edit.svg"
import { useNavigate } from "react-router-dom";
const OrderList = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 10007,
      customer: "Nữ đại gia bao shop",
      date: "2023-12-14",
      phone: "0254823646",
      addr: "125 Thủ Đức",
      value: 960000,
      paymethod: "COD",
      status: "In-transit",
      ord_de:[
        {sp: 'BLACKPINK Mini Album Vol.2 [KILL THIS LOVE]', sl: 3, prc: 320000}
      ]
    },
    {
      id: 10008,
      customer: "Nữ đại gia bao shop",
      date: "2023-11-15",
      phone: "02548257646",
      addr: "125 Thủ Đức",
      value: 1680000,
      paymethod: "Chuyển khoản",
      status: "Done",
      ord_de:[
        {sp: 'Scrunchie Set BTS', sl: 4,prc: 420000}
      ]
    },
    {
      id: 10009,
      customer: "Nữ đại gia bao shop",
      date: "2024-01-06",
      phone: "0254783646",
      addr: "125 Thủ Đức",
      value: 900000,
      paymethod: "Chuyển khoản",
      status: "In-prepare",
      ord_de:[
        {sp: 'ALBUM WENDY - [LIKE WATER] PHOTOBOOK ver', sl: 2, prc: 450000}
      ]
    },
    
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
    <div className="container margin">
      <h2 className="text-center" style={{color:'#3F5AA9', marginTop:'1%'}}>Danh sách đơn hàng</h2>
      <hr></hr>
      <div class="search-container margin">
            <input
            class="search-input"
            style={{color:'#3F5AA9'}}
              type="text"
              placeholder="Tìm theo OrderID hoặc SĐT"
              value={searchTerm}
              onChange={handleChange}
            />
            <button class="search-button" onClick={handleSearch}>
              <SearchIcon class="search-icon fas fa-search text-danger"></SearchIcon>
            </button>
          </div>
           <div className='Status filter margin'>
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
              <td className="text-center">{order.id}</td>
              <td className="text-center">{order.customer}</td>
              <td className="text-center">{order.date}</td>
              <td className="text-center">{order.phone}</td>
              <td className="text-center">{order.value}</td>
              <td className="text-center">{order.paymethod}</td>
              <td>
                <span className= {`status ${order.status}`}> {order.status} </span>
              </td>
              <td className="text-center"><a onClick={() =>  navigate(`/admin/order_detail/${order.id}`, { state: { order } })} style={{cursor: "pointer"}}><EditIcon></EditIcon></a></td>
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
