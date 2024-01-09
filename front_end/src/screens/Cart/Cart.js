

import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import 'react-bootstrap';
import './style.css'
import { ReactComponent as Plus } from './icons/icon_plus.svg';
import { ReactComponent as Minus } from './icons/icon_minus.svg';
import { ReactComponent as Remove } from './icons/icon_remove.svg';
import { useAuth } from '../../hooks/useAuth';
import { BASE_URL } from '../../app_logic/APIHandler';
import axios from 'axios';

function lowestPrice(product) {
	if (product.discount_price === 0) {
		return product.sell_price;
	}
	return product.discount_price;
}

function Cart() {
	// const initialCart = [
	//   { _id: 1, product_name: 'j-hope (BTS) "Jack In The Box" (HOPE Edition)', sell_price: 600000,  discount_price: 450000, quantity: 2, image: require('./icons/img_product.png') },
	//   { _id: 2, product_name: 'BLACKPINK - 1st FULL ALBUM [THE ALBUM]',  sell_price: 600000, discount_price: 500000,  quantity: 1, image: require('./icons/Blackpink-The_Album.png') },
	//   // Add more product details
	// ];

	const { user } = useAuth();
	const [cartItems, setCartItems] = useState([]);
	const [couponCode, setCouponCode] = useState('');
	const [listProductToUpdateCart, setListProductToUpdateCart] = useState([]); // [{_id, quantity}
	const [discountAmount, setDiscountAmount] = useState(0);
	// const navigate = useNavigate();

	useEffect(() => {
		async function getCart() {
			const token = 'Bearer ' + user.access_token;
			console.log(token);
			try {
				const getCartRequest = await axios.get(BASE_URL + "/order/cart",
					{
						headers: {
							'content-type': 'application/json',
							'Authorization': token
						}
					})
				if (getCartRequest.data) {
					// setLogoutErrorMessage("");
					console.log("----- get cart success -----");
					setCartItems(getCartRequest.data.products);
				} else {
					console.log("----- get cart 200 nhung khong co data -----");
					// setLogoutErrorMessage("Lỗi lấy thông tin tài khoản.");
				}
			} catch (error) {
				console.log("----- cart request fail -----");
				// setLogoutErrorMessage(error.message);
			}
		}
		getCart();
	}, []);

	const applyCoupon = () => {
		if (couponCode === 'COUPON123') {
			setDiscountAmount(20000);
		} else {
			setDiscountAmount(0);
		}
	};

	const removeItem = (product_code) => {
		const updatedProduct = cartItems.find((item) => item.product_code === product_code);
		const updatedCart = cartItems.filter((item) => item.product_code !== product_code);
		setListProductToUpdateCart([...listProductToUpdateCart, { product_code, quantity: updatedProduct.quantity }]);
		setCartItems(updatedCart);
	};

	const handleIncrease = (product_code) => {
		const updatedCart = cartItems.map((item) =>
			item.product_code === product_code ? { ...item, quantity: item.quantity + 1 } : item
		);
		setCartItems(updatedCart);
	};


	const handleDecrease = (product_code) => {
		const updatedCart = cartItems.map((item) =>
			item.product_code === product_code && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
		);
		setCartItems(updatedCart);
	};
	const [selectAll, setSelectAll] = useState(false);

	const totalPrice = cartItems.reduce(
		(total, item) => total + (item.checked ? lowestPrice(item) * item.quantity : 0),
		0
	);


	const handleCheckboxChange = (product_code) => {
		const updatedCart = cartItems.map((item) =>
			item.product_code === product_code ? { ...item, checked: !item.checked } : item
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
				<div className="className=col-sm-12 col-md-12 col-xl-7 col-lg-7">
					<div className="section-frame-cart margin">
						<h3 className="center">Thông tin sản phẩm</h3>
						<input className="margin"
							type="checkbox"
							checked={selectAll}
							onChange={handleSelectAll} />
						<label className="margin">Chọn tất cả</label>
						{cartItems.map((item) => (
							<div key={item.product_code} className="cart-item">
								<input className="margin"
									type="checkbox"
									checked={item.checked}
									onChange={() => handleCheckboxChange(item.product_code)} />
								<img src={item.image} alt={item.product_name} />
								<div>
									<h5>{item.product_name}</h5>
									<p>{item.discount_price}</p>
									<p>
										<label style={{ cursor: 'pointer' }} onClick={() => handleDecrease(item.product_code)}><Minus /></label>
										<input className="quantity" type="text" value={item.quantity} readOnly />
										<label style={{ cursor: 'pointer' }} onClick={() => handleIncrease(item.product_code)}><Plus /></label>
									</p>
									<Remove style={{ cursor: 'pointer' }} onClick={() => removeItem(item.product_code)}></Remove>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-xl-5 col-lg-5">
					<div className="section-frame-cart margin">
						<h5>Tổng tiền: {totalPrice}</h5>
						<h5>Giảm giá: {discountAmount}</h5>
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
							<button className='apply margin' onClick={applyCoupon} ><span className="label-m" style={{ color: 'var(--theme-typo-label-light, #FFF)' }} >Áp dụng</span></button>
						</div>
						<hr></hr>
						<h5>Tạm tính: {totalPrice - discountAmount}</h5>
						<a href="/payment"><button className='cart-button label-l' ><span className="label-l" style={{ color: 'var(--theme-typo-label-light, #FFF)' }}>Đặt hàng ngay</span></button></a>





						{/* Other elements related to payment */}


					</div>
				</div>
			</div>
		</div>
	);
}


export { Cart }

