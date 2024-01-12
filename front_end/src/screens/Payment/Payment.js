import React, { useState, useEffect } from 'react';
import './StylePayment.css';
import "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '../../theme/images/back.svg'
import { ReactComponent as CreditCard } from '../../theme/images/credit_card.svg'
import { ReactComponent as COD } from '../../theme/images/local_shipping.svg'
import { ReactComponent as Momo } from '../../theme/images/momo_square_pinkbg.svg'
import { useAuth } from '../../hooks/useAuth';
import { authPostRequest, basicPostRequest } from '../../app_logic/APIHandler';

const lowestPrice = (product) => {
    if (product.discount_price === 0) {
        return product.sell_price;
    }
    return product.discount_price;
}

function PaymentItem({ product, quantity }) {
    return (
        <div className='payment-product'>
            <div className='product-pic'>
                <img src={product.image} alt='' />
            </div>
            <div className='product-des'>
                <p className='body-medium'>{product.product_name}</p>
                <p className='body-small'>Số lượng: x{quantity} <span></span></p>
                <p className='product-price'>
                    {
                        product.discount_price === 0
                            ? <span className='price'>{product.sell_price}đ</span>
                            : <span className='price'>{product.discount_price}đ</span>
                    }
                    {
                        product.discount_price === 0
                            ? <span className='old-price'></span>
                            : <span className='old-price'>{product.sell_price}đ</span>
                    }
                </p>
            </div>
            <div className='product-total'>
                <p className='price'>{quantity * lowestPrice(product)}đ</p>
            </div>
        </div>
    )
}


export function Payment() {
    const [selectedOption, setSelectedOption] = useState('');
    const [listData, setDataContent] = useState([]);
    const [isBuyNow, setIsBuyNow] = useState(false);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [orderDetail, setOrderDetail] = useState({ phone: "", email: "", address: "", note: "", province: "", district: "", ward: "" });
    // const [couponCode, setCouponCode] = useState('');
    const [feeShip, setFeeShip] = useState(0);
    const location = useLocation();
    const { user } = useAuth();

    const [listProvince, setListProvince] = useState([]);
    const [listDistrict, setListDistrict] = useState([]);
    const [listWard, setListWard] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        if (location.state) {
            let _state = location.state || [];
            setIsBuyNow(_state.isBuyNow);
            setDataContent(_state.orderInfo);
            if (_state.discountAmount) {
                setDiscountAmount(_state.discountAmount);
            }
            // setCouponCode(_state.couponCode);
        } else {
            if (!user) {
                navigate('/');
            }
        }

        fetch('https://vapi.vnappmob.com/api/province/')
            .then((response) => response.json())
            .then((data) => {
                setListProvince(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location.state, user, navigate]);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'option1') {
            setFeeShip(20000);
        } else {
            setFeeShip(0);
        }
    };

    const total_price = () => {
        const result = listData.reduce((total, item) => {
            return total + item.quantity * lowestPrice(item.product);
        }, 0);
        return result;
    }

    const executeOrder = () => {
        if (orderDetail.fullname === "" || 
            orderDetail.email === "" || 
            orderDetail.phone === "" || 
            orderDetail.address === "" || 
            orderDetail.province === "" || 
            orderDetail.district === "" || 
            orderDetail.ward === "") {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        if (selectedOption === 'option1') {
            if (user === null) {
                basicPostRequest('/order/create_order', {
                    username: '',
                    order_product_info: listData,
                    payment_method: 'COD',
                    phone_number: orderDetail.phone,
                    email: orderDetail.email,
                    total_price: total_price(),
                    shipping_price: feeShip,
                    is_buy_now: isBuyNow,
                    is_paid: false,
                    address: orderDetail.address + ', ' + orderDetail.ward + ', ' + orderDetail.district + ', ' + orderDetail.province,
                    note: orderDetail.note,
                    coupon_code: '',
                }).then((response) => {
                    if (response.data.status === 1) {
                        alert('Đặt hàng thành công');
                        navigate('/user/cart');
                    } else {
                        alert('Đặt hàng thất bại');
                    }
                }).catch((error) => {
                    console.log(error);
                    alert('Đặt hàng thất bại');

                })
            } else {
                authPostRequest('/order/create_order', {
                    username: user.username,
                    order_product_info: listData,
                    payment_method: 'COD',
                    phone_number: orderDetail.phone,
                    email: orderDetail.email,
                    total_price: total_price(),
                    shipping_price: feeShip,
                    is_buy_now: isBuyNow,
                    note: orderDetail.note,
                    is_paid: false,
                    address: orderDetail.address + ', ' + orderDetail.ward + ', ' + orderDetail.district + ', ' + orderDetail.province,
                    coupon_code: '',
                }, 'Bearer ' + user.access_token).then((response) => {
                    if (response.data.status === 1) {
                        alert('Đặt hàng thành công');
                        navigate('/user/cart');
                    } else {
                        alert('Đặt hàng thất bại');
                    }
                }).catch((error) => {
                    console.log(error);
                    alert('Đặt hàng thất bại');

                })
            }
        } else if (selectedOption === 'option2') {
            alert('Thanh toán qua thẻ Napas');
        } else if (selectedOption === 'option3') {
            alert('Thanh toán qua ví điện tử MoMo');
        } else {
            alert('Vui lòng chọn phương thức thanh toán');
        }
    }

    const handleFullnameChange = (event) => {
        setOrderDetail({ ...orderDetail, fullname: event.target.value });
    }

    const handleEmailChange = (event) => {
        setOrderDetail({ ...orderDetail, email: event.target.value });
    }

    const handlePhoneChange = (event) => {
        setOrderDetail({ ...orderDetail, phone: event.target.value });
    }

    const handleDetailLocationChange = (event) => {
        setOrderDetail({ ...orderDetail, address: event.target.value });
    }

    const handleProvinceChange = (selectedValue) => {
        const province_name = listProvince.filter((item) => item.province_id === selectedValue)[0].province_name;
        setOrderDetail({ ...orderDetail, province: province_name, district: '', ward: '' });
        fetch('https://vapi.vnappmob.com/api/province/district/' + selectedValue)
            .then((response) => response.json())
            .then((data) => {
                setListDistrict(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
        setListWard([]);
    };

    const handleDistrictChange = (selectedValue) => {
        const district_name = listDistrict.filter((item) => item.district_id === selectedValue)[0].district_name;
        setOrderDetail({ ...orderDetail, district: district_name, ward: '' });
        fetch('https://vapi.vnappmob.com/api/province/ward/' + selectedValue)
            .then((response) => response.json())
            .then((data) => {
                setListWard(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleWardChange = (selectedValue) => {
        const ward_name = listWard.filter((item) => item.ward_id === selectedValue)[0].ward_name;
        setOrderDetail({ ...orderDetail, ward: ward_name });
    };

    const handleNoteChange = (event) => {
        setOrderDetail({ ...orderDetail, note: event.target.value });
    }

    return (
        <div>
            <div className='container'>
                {user &&
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12'>
                            <div className='button-back'>
                                <div style={{cursor: 'pointer'}} onClick={() => { navigate('/user/cart') }}>
                                    <Back className='icon-back'></Back>
                                    <span className='label-l'>Trở về giỏ hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12'>
                        <div className='payment-title'>
                            <h4 className='head4'>Thanh toán</h4>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-xl-5 col-lg-5'>
                        <div className='payment-info'>
                            <div className='shippping-address'>
                                <h6 className='head6'>Địa chỉ giao hàng</h6>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="name"
                                        placeholder="Họ và tên"
                                        required
                                        onChange={handleFullnameChange}
                                    />
                                </div>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="phone"
                                        placeholder="Số điện thoại"
                                        required
                                        onChange={handlePhoneChange}
                                    />
                                </div>
                                <div className='address-input'>
                                    <div className='payment-input text-center'>
                                        {/* <p id='location-value'>{orderDetail.province}</p> */}
                                        <select
                                            id='location-value'
                                            className='body-small payment-field-select'
                                            placeholder='Tỉnh/ Thành phố'
                                            value={orderDetail.province}
                                            onChange={e => handleProvinceChange(e.target.value)}
                                        >
                                            <option value="" disabled>Tỉnh/ Thành phố</option>
                                            {
                                                listProvince.map((item, index) => {
                                                    return (
                                                        <option key={index + item.province_name} value={item.province_id}>{item.province_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='payment-input text-center'>
                                        {/* <p id='location-value'>{orderDetail.district}</p> */}
                                        <select
                                            id='location-value'
                                            className='body-small payment-field-select'
                                            value={orderDetail.district}
                                            onChange={e => handleDistrictChange(e.target.value)}
                                        >
                                            <option value="" disabled>Quận/ Huyện</option>
                                            {
                                                listDistrict.map((item, index) => {
                                                    return (
                                                        <option key={index + item.district_name} value={item.district_id}>{item.district_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='payment-input text-center'>
                                        {/* <p id='location-value'>{orderDetail.ward}</p> */}
                                        <select
                                            id='location-value'
                                            className='body-small payment-field-select'
                                            value={orderDetail.ward}
                                            onChange={e => handleWardChange(e.target.value)}
                                        >
                                            <option value="" disabled>Phường/ Xã</option>
                                            {
                                                listWard.map((item, index) => {
                                                    return (
                                                        <option key={index + item.ward_name} value={item.ward_id}>{item.ward_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="detail-address"
                                        // value={username}
                                        placeholder="Số nhà, tên đường"
                                        required
                                        onChange={handleDetailLocationChange}
                                    />
                                </div>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="note"
                                        // value={username}
                                        placeholder="Ghi chú..."
                                        required
                                        onChange={handleNoteChange}
                                    />
                                </div>

                            </div>

                        </div>
                        <div className='payment-method'>
                            <h6 className='head6'>Phương thức thanh toán</h6>
                            <div className='d-flex payment-option'>
                                <input
                                    type="radio"
                                    value="option1"
                                    id='payment-option1'
                                    checked={selectedOption === 'option1'}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="payment-option1">
                                    <span className='label-l'>Thanh toán khi nhận hàng  (COD)</span>
                                    <COD className="payment-method-icon"></COD>
                                </label>
                            </div>
                            <div className='d-flex payment-option'>
                                <input
                                    type="radio"
                                    value="option2"
                                    id='payment-option2'
                                    checked={selectedOption === 'option2'}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="payment-option2" >
                                    <span className='label-l'>Thanh toán thông qua thẻ Napas</span>
                                    <CreditCard className="payment-method-icon"></CreditCard>
                                </label>
                            </div>
                            <div className='d-flex payment-option'>
                                <input
                                    type="radio"
                                    value="option3"
                                    id='payment-option3'
                                    checked={selectedOption === 'option3'}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="payment-option3">
                                    <span className='label-l'>Thanh toán thông qua Ví điện tử MoMo</span>
                                    <Momo className="payment-method-icon"></Momo>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-xl-7 col-lg-7'>
                        <div className='payment-amount'>
                            <h6 className='head6'>Đơn hàng của bạn</h6>
                            <div className='payment-product-list'>
                                <div className='sub-title d-flex justify-content-between'>
                                    <span className='body-medium'>Sản phẩm</span>
                                    <span className='body-medium product-total'>Tổng cộng</span>
                                </div>
                                {
                                    listData.map((item, index) => {
                                        return (
                                            <PaymentItem
                                                key={index}
                                                product={item.product}
                                                quantity={item.quantity} />
                                        )
                                    })
                                }
                            </div>
                            <div className='total-amount'>
                                <div className='total-price d-flex justify-content-between'>
                                    <span className='body-medium'>Tổng tiền sản phẩm</span>
                                    <span className='price'>{total_price()}đ</span>
                                </div>
                                <div className='total-discount d-flex justify-content-between'>
                                    <span className='body-medium'>Giảm giá</span>
                                    <span className='price'>{discountAmount}đ</span>
                                </div>
                                <div className='total-shipping d-flex justify-content-between'>
                                    <span className='body-medium'>Phí vận chuyển</span>
                                    <span className='price'>{feeShip}đ</span>
                                </div>
                            </div>
                            <div className='total-bill d-flex justify-content-between'>
                                <span className='body-medium'>Số tiền thanh toán </span>
                                <span className='price'>{total_price() - discountAmount + feeShip}</span>
                            </div>
                            <div>
                                <button onClick={executeOrder} className='payment-button label-xl' type="submit">Tiếp tục thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
