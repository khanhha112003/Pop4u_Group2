// OrderDetail.js
import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const OrderDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    // Handle case when there are no order details in the state
    return <div>No order details found</div>;
  }
  const handleReturn = () => {
    navigate('/admin/order_list'); // Adjust the path based on your actual route
  };
  // Customize the rendering of order details here
  return (
    <div className="container margin">
      <h2 className="text-center" style={{color:'#3F5AA9', marginTop:'1%'}}>Chi tiết đơn hàng</h2>
      <h2 className="text-center" style={{color:'#3F5AA9', marginTop:'1%'}}>Order ID: {order.id}</h2>
      
      <hr></hr>
  
      <div className='table'>
      <h4>Thông tin khách hàng</h4>
      <table>
        <thead>
          <tr>
            <th>Tên khách hàng</th>
            <th>Ngày đặt hàng</th>
            <th>SĐT</th>
            <th>Tổng giá trị đơn</th>
            <th>Phương thức thanh toán</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="text-center">{order.customer}</td>
              <td className="text-center">{order.date}</td>
              <td className="text-center">{order.phone}</td>
              <td className="text-center">{order.value}</td>
              <td className="text-center">{order.paymethod}</td>
              <td className="text-center">{order.addr}</td>
            </tr>
        </tbody>
      </table>
      <hr></hr>
      <h4>Thông tin đơn hàng</h4>
      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
          </tr>
        </thead>
        <tbody>
          {order.ord_de.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.sp}</td>
              <td className="text-center">{item.sl}</td>
              <td className="text-center">{item.prc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='Return button'>
       <button onClick={handleReturn}>Return</button>
       </div>
    </div>
  );
};

export { OrderDetail };