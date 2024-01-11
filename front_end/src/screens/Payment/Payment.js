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
    const location = useLocation();
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state) {
            let _state = location.state || [];
            setDataContent(_state);
        } else {
            if (!user) {
                navigate('/');
            }
        }
    }, []);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const total_price = () => {
        const result = listData.reduce((total, item) => {
            return total + item.quantity * lowestPrice(item.product);
        }, 0);
        return result;
    }

    const executeOrder = () => {
        if (selectedOption === 'option1') {
            if (user === null) {
                basicPostRequest('/order/create_order', {
                    order_product_info: listData,
                    payment_method: 'COD',
                    phone: '0123456789',
                    email: "",
                    total_price: total_price(),
                    shipping_price: 20000,
                    address: 'Hà Nội',
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
                    phone: '0123456789',
                    email: "",
                    total_price: total_price(),
                    shipping_price: 20000,
                    address: 'Hà Nội',
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

    return (
        <div>
            <div className='container'>
                {user &&
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12'>
                            <div className='button-back'>
                                <a onClick={() => { navigate('/user/cart') }}>
                                    <Back className='icon-back'></Back>
                                    <span className='label-l'>Trở về Giỏ hàng</span>
                                </a>
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
                                        // value={username}
                                        placeholder="Họ và tên"
                                        required
                                    // onChange={handleUsername}
                                    />
                                </div>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="email"
                                        // value={username}
                                        placeholder="Email"
                                        required
                                    // onChange={handleUsername}
                                    />
                                </div>
                                <div className='payment-input text-center'>
                                    <input
                                        className='body-small payment-field'
                                        type="text"
                                        id="phone"
                                        // value={username}
                                        placeholder="Số điện thoại"
                                        required
                                    // onChange={handleUsername}
                                    />
                                </div>
                                <div className='address-input'>
                                    <div className='payment-input text-center'>
                                        <select id='province' className='body-small payment-field' placeholder='Tỉnh/ Thành phố'>
                                            <option value="" disabled>Tỉnh/ Thành phố</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className='payment-input text-center'>
                                        <select id='district' className='body-small payment-field'>
                                            <option value="" disabled>Quận/ Huyện</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className='payment-input text-center'>
                                        <select id='ward' className='body-small payment-field'>
                                            <option value="" disabled>Phường/ Xã</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
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
                                    // onChange={handleUsername}
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
                                    // onChange={handleUsername}
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
                                    <span className='price'>{total_price()}</span>
                                </div>
                                <div className='total-discount d-flex justify-content-between'>
                                    <span className='body-medium'>Giảm giá</span>
                                    <span className='price'>20.000đ</span>
                                </div>
                                <div className='total-shipping d-flex justify-content-between'>
                                    <span className='body-medium'>Phí vận chuyển</span>
                                    <span className='price'>20.000đ</span>
                                </div>
                            </div>
                            <div className='total-bill d-flex justify-content-between'>
                                <span className='body-medium'>Số tiền thanh toán </span>
                                <span className='price'>20.000đ</span>
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