// OrderDetail.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../app_logic/APIHandler';
import { useAuth } from '../../../hooks/useAuth';
import LoadingPage from '../../Loading/LoadingPage';

const lowestPrice = (product) => {
    if (product.discount_price === 0) {
        return product.sell_price;
    }
    return product.discount_price;
}

const OrderDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { order_code } = location.state || {};
    const { user, logout } = useAuth();
    const [ order, setData ] = React.useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const getRequest = await axios.get(BASE_URL + '/order/get_order?order_code=' + order_code,
                    {
                        headers: {
                            'Authorization': `Bearer ${user.access_token}`,
                        }
                    });
                if (getRequest.data) {
                    setData(getRequest.data)
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
        };
        fetchOrder();
    }, []);

    if (!order) {
        return <div>No order details found</div>;
    }
    const handleReturn = () => {
        navigate('/admin/order_list');
    };

    const handleChangeState = () => {
        var newOrderState = "";
        if (order.status === "Pending") {
            newOrderState = "Delivering";
        } else if (order.status === "Delivering") {
            newOrderState = "Delivered";
        } else {
            alert("Đơn hàng đã được giao thành công")
            return;
        }
        const fetchOrder = async () => {
            try {
                const getRequest = await axios.post(BASE_URL + '/order/update_order_state',
                    {
                        order_code: order_code,
                        order_state: newOrderState
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${user.access_token}`,
							'Access-Control-Allow-Origin': '*',
							"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
							'Content-Type': 'application/json'
                        }
                    });
                if (getRequest.data) {
                    alert("Đổi trạng thái đơn hàng thành công")
                    navigate('/admin/order_list')
                } else {
                    alert("Đổi trạng thái đơn hàng thất bại")
                }
            } catch (error) {
                if (error.response.status === 401) {	// Unauthorized
                    logout((val) => { });
                } else {
                    alert("Lỗi mạng")
                }
            }
        };
        fetchOrder();
    };

    if (loading) {
        return <LoadingPage isAdmin={true} />;
    }

    return (
        <div className="container margin">
            <h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Chi tiết đơn hàng</h2>
            <h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Order ID: {order.id}</h2>

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
                            <td className="text-center">{order.username}</td>
                            <td className="text-center">{order.order_date}</td>
                            <td className="text-center">{order.phone}</td>
                            <td className="text-center">{order.total_price}</td>
                            <td className="text-center">{order.payment_method}</td>
                            <td className="text-center">{order.address}</td>
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
                        {order.order_product_info.map((item, index) => (
                            <tr key={index}>
                                <td className="text-center">{item.product.product_name}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.quantity * item.product.product_final_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='return-button' style={{margin: 10}}>
                <button onClick={handleChangeState}>Đổi trạng thái giao hàng</button>
            </div>
            <div className='return-button' style={{margin: 10}}>
                <button onClick={handleReturn}>Trở về</button>
            </div>
        </div>
    );
};

export { OrderDetail };