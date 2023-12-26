import React, { useState } from 'react';
import '../CartComponent/Cart.css'; // Import file CSS
import 'react-bootstrap';
import { ReactComponent as Plus } from '../../theme/images/icon_plus.svg';
import { ReactComponent as Minus } from '../../theme/images/icon_minus.svg';
import { ReactComponent as Remove } from '../../theme/images/icon_remove.svg';
import '../ProductDetailComponent/ProductDetailComponent.css'

const CartPage = () => {
  const initialCart = [
    { id: 1, name: 'j-hope (BTS) "Jack In The Box" (HOPE Edition)', price: 450.000, option: 'Version 1', quantity: 2, image: require('../../screens/HomePage/icons/img_product.png') },
    { id: 2, name: 'BLACKPINK - 1st FULL ALBUM [THE ALBUM]',  price: 500.000, option: 'No Version' , quantity: 1, image: require('../../theme/images/Blackpink-The_Album.png') },
    // Add more product details
  ];
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const applyCoupon = () => {
    // Logic to apply coupon and calculate discount amount
    if (couponCode === 'COUPON123') {
      setDiscountAmount(10); // Set your discount amount here
    } else {
      setDiscountAmount(0); // No discount if coupon is not valid
    }
};
  const [cartItems, setCartItems] = useState(initialCart);
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };
  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };
  const [selectAll, setSelectAll] = useState(false);


  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.checked ? item.price * item.quantity : 0),
    0
  );

  const handleCheckboxChange = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCartItems(updatedCart);
  };

  const handleSelectAll = () => {
    const updatedCart = cartItems.map((item) => ({
      ...item,
      checked: !selectAll,
    }));
    setCartItems(updatedCart);
    setSelectAll(!selectAll);


  };
  return (
    <div className="container">
        <div className="row">
        <h2 className="center">Giỏ hàng của bạn</h2>
            <div className="col-md-8">
            <div className="section-frame margin">
            <h3 className="center">Thông tin sản phẩm</h3>
                    <input className="margin"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}/>
                    <label className="margin">Chọn tất cả</label>
                        {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <input className="margin"
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheckboxChange(item.id)}/>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h5>{item.name}</h5>
                                <p>${item.price}</p>
                                <button className="btn option-box active">{item.option}</button>
                                <p>  
                                <label style={{ cursor: 'pointer' }} onClick={() => handleDecrease(item.id)}><Minus/></label>
                                <input className="quantity" type="text" value={item.quantity} readOnly />
                                <label style={{ cursor: 'pointer' }} onClick={() => handleIncrease(item.id)}><Plus/></label>
                                </p>
                                <Remove style={{ cursor: 'pointer' }} onClick={() => removeItem(item.id)}></Remove>
                            </div>
                        </div>
                            ))}
                </div>
            </div>
            <div className="col-md-4">
                <div className="section-frame margin">
                <h5>Tổng tiền: ${totalPrice}</h5>
                <h5>Giảm giá: ${discountAmount}</h5>
          <hr></hr>
          <div className="coupon-container">
            <h6>Mã giảm giá</h6>
            <input
                className="coupon-frame"
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className='apply margin' onClick={applyCoupon}><span className="label-m" style={{ color: 'var(--theme-typo-label-light, #FFF)'}} >Áp dụng</span></button>
          </div>
          <hr></hr>
          <h5>Tạm tính: ${totalPrice - discountAmount}</h5>
                <button className='order-now' ><span className="label-l" style={{ color: 'var(--theme-typo-label-light, #FFF)'}} >Đặt hàng ngay</span></button>
            


          {/* Other elements related to payment */}

            </div>
            </div>
        </div>
    </div>
  );
};

export default CartPage;
