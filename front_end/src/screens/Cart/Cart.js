

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
import { useNavigate } from 'react-router-dom';

function lowestPrice(product) {
	if (product.discount_price === 0) {
		return product.sell_price;
	}
	return product.discount_price;
}

function Cart() {
	const { user } = useAuth();
	const [cartItems, setCartItems] = useState([]);
	const [couponCode, setCouponCode] = useState('');
	const [listProductToUpdateCart, setListProductToUpdateCart] = useState([]); // [{_id, quantity}
	const [discountAmount, setDiscountAmount] = useState(0);
	const [isCartChange, setIsCartChange] = useState(false);
	const navigate = useNavigate();
	
	useEffect(() => {
		setIsCartChange(false);
		async function getCart() {
			const token = 'Bearer ' + user.access_token;
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
		var newListProductToUpdateCart = listProductToUpdateCart.filter((item) => item.product_code !== product_code);
		setListProductToUpdateCart([...newListProductToUpdateCart, 
			{ product_code: updatedProduct.product_code, quantity: 0 }
		]);
		setCartItems(updatedCart);
		if (isCartChange === false) {
			setIsCartChange(true);
		}
	};

	const handleIncrease = (product_code) => {
		const updatedCart = cartItems.map((item) =>
			item.product_code === product_code ? { ...item, quantity: item.quantity + 1 } : item
		);
		if (listProductToUpdateCart.find((item) => item.product_code === product_code) === undefined) {
			var item = cartItems.find((item) => item.product_code === product_code);
			var newListProductToUpdateCart = [
				...listProductToUpdateCart
				,{ product_code: product_code, quantity: item.quantity + 1 }]
			setListProductToUpdateCart(newListProductToUpdateCart);
		} else {
			var newListProductToUpdateCart = listProductToUpdateCart.map((item) => item.product_code !== product_code 
				? item 
				: { product_code: item.product_code, quantity: item.quantity + 1 }
			);
			setListProductToUpdateCart(newListProductToUpdateCart);
		}
		setCartItems(updatedCart);
		if (isCartChange === false) {
			setIsCartChange(true);
		}
	};


	const handleDecrease = (product_code) => {
		const updatedCart = cartItems.map((item) =>
			item.product_code === product_code && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
		);
		if (listProductToUpdateCart.find((item) => item.product_code === product_code) === undefined) {
			var item = cartItems.find((item) => item.product_code === product_code);
			var newListProductToUpdateCart = [
				...listProductToUpdateCart
				,{ product_code: product_code, quantity: item.quantity - 1 }]
			setListProductToUpdateCart(newListProductToUpdateCart);
		} else {
			var newListProductToUpdateCart = listProductToUpdateCart.map((item) => item.product_code !== product_code 
				? item 
				: { product_code: item.product_code, quantity: item.quantity - 1 }
			);
			setListProductToUpdateCart(newListProductToUpdateCart);
		}
		setCartItems(updatedCart);
		if (isCartChange === false) {
			setIsCartChange(true);
		}
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

	const onSaveCart = () => {
		const token = 'Bearer ' + user.access_token;
		try {
			const saveCartRequest = axios.post(BASE_URL + "/order/update_cart",
				{
					list_info: listProductToUpdateCart
				},
				{
					headers: {
						'content-type': 'application/json',
						'Authorization': token,
						"Access-Control-Allow-Origin": "*",
    					"Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
					}
				})
			if (saveCartRequest.data) {
				// setLogoutErrorMessage("");
				console.log("----- create order success -----");
				// setCartItems(getCartRequest.data.products);
			} else {
				console.log("----- create order 200 nhung khong co data -----");
				// setLogoutErrorMessage("Lỗi lấy thông tin tài khoản.");
			}
		} catch (error) {
			console.log("----- create order request fail -----");
			// setLogoutErrorMessage(error.message);
		}
	}

	const handleCreateOrder = () => {
		const token = 'Bearer ' + user.access_token;
		console.log(token);
		var listProductToCreateOrder = cartItems.filter((item) => item.checked === true);
		if (listProductToCreateOrder.length === 0) {
			return;
		}
		listProductToCreateOrder = listProductToCreateOrder.map((item) => ({ 
			product: {
				product_code: item.product_code,
				product_name: item.product_name,
				image: item.image,
				sell_price: item.sell_price,
				discount_price: item.discount_price,
			}, 
			quantity: item.quantity 
		}));
		navigate("/payment", { state: listProductToCreateOrder });
	}

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
					{ isCartChange &&
					<div>
						<button className='cart-button label-l' style={{}} onClick={onSaveCart}>
							<span className="label-m" style={{ color: 'var(--theme-typo-label-light, #FFF)' }}>
								Lưu giỏ hàng
							</span>
						</button>
					</div>
					}
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
						<button className='cart-button label-l' onClick={handleCreateOrder}>
							<span className="label-l" style={{ color: 'var(--theme-typo-label-light, #FFF)' }}>
								Đặt hàng ngay
							</span>
						</button>
						{/* Other elements related to payment */}
					</div>
				</div>
			</div>
		</div>
	);
}


export { Cart }

