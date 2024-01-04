import React, { useState } from 'react';
import './StylePayment.css';
import "react-bootstrap";

import {ReactComponent as Back} from '../../theme/images/back.svg'
import {ReactComponent as CreditCard} from '../../images/credit_card.svg'
import {ReactComponent as COD} from '../../images/local_shipping.svg'
import {ReactComponent as Momo} from '../../images/momo_icon_square_pinkbg.svg'

import AnhSanPham from '../../theme/images/Blackpink-The_Album.png'



function Payment() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };  
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12'>
                    <div className='button-back'>
                        <a href='#'>
                            <Back className='icon-back'></Back>
                            <span className='label-l'>Trở về Giỏ hàng</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12'>
                    <div className='payment-title'>
                        <h4 className='head4'>Thanh toán</h4>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-xl-7 col-lg-7'>
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
                        <div className='payment-method'>
                            <h6 className='head6'>Phương thức thanh toán</h6>
                            <label>
                                <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleRadioChange}
                                />
                                <span className='label-l'>Thanh toán khi nhận hàng  (COD)</span>
                                <COD className="payment-method-icon"></COD>
                            </label>
                            <label>
                                <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleRadioChange}
                                />
                                <span className='label-l'>Thanh toán thông qua thẻ Napas</span>
                                <CreditCard className="payment-method-icon"></CreditCard>
                            </label>
                            <label>
                                <input
                                type="radio"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleRadioChange}
                                />
                                <span className='label-l'>Thanh toán thông qua Ví điện tử MoMo</span>
                                <Momo className="payment-method-icon"></Momo>
                            </label>
                        </div>

                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-xl-5 col-lg-5'>
                    <div className='payment-amount'>
                        <h6 className='head6'>Đơn hàng của bạn</h6>
                        <div className='payment-product-list'>
                            <div className='sub-title d-flex justify-content-between'>
                                <span className='body-medium'>Sản phẩm</span>
                                <span className='body-medium product-total'>Tổng cộng</span>
                            </div>
                            <div className='payment-product'>
                                <div className='product-pic'>
                                    <img src={AnhSanPham} alt=''/>
                                </div>
                                <div className='product-des'>
                                    <p className='body-medium'>j-hope (BTS) 'Jack In The Box' (HOPE Edition)</p>
                                    <p className='body-small'>Số lượng: × <span></span></p>
                                    <div className='product-option'>
                                        <p className='label-m'>Đen</p>                        
                                    </div>
                                    <p className='product-price'>
                                        <span className='price'>500.000</span>
                                        <span className='old-price'>550.000</span>
                                    </p>
                                </div>
                                <div className='product-total'>
                                    <p className='price'>500.000đ</p>
                                </div>
                            </div>
                        </div>
                        <div className='total-amount'>
                            <div className='total-price d-flex justify-content-between'>
                                <span className='body-medium'>Tổng tiền sản phẩm</span>
                                <span className='price'>500.000đ</span>
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
                            <button className='payment-button label-xl' type="submit">Tiếp tục thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export { Payment }