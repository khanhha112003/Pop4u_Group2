import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './AddProduct.css';
import { useAuth } from '../../../hooks/useAuth';
import LoadingPage from '../../Loading/LoadingPage';
import { BASE_URL, basicGetRequets } from '../../../app_logic/APIHandler';
import axios from 'axios';

const ProductDetailEdit = () => {
	const [product, setProduct] = useState({})
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const { user, logout } = useAuth();
	useEffect(() => {
		if (location.state) {
			let _state = location.state;
			const reg = basicGetRequets("/product/product_detail", { product_code: _state.product_code });
			async function excuteOrder() {
				const token = 'Bearer ' + user.access_token;
				try {
					const getProfileRequest = await axios.get(BASE_URL + "/product/product_list",
						{
							headers: {
								'content-type': 'application/json',
								'Authorization': token
							}
						})
					if (getProfileRequest.data) {
						reg.then((data) => {
							// TODO: Fix here
						}
						).catch(error => {
							setLoading(true);
						}).finally(() => {
							setLoading(false);
						});
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
			}
			excuteOrder();
		}
	}
		, [location]);
	const handleImageChange = (index) => (e) => {
		const files = e.target.files;
		const updatedImages = [...product.list_product_image];

		if (files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onload = () => {
				updatedImages[index] = reader.result;
				setProduct({
					...product,
					list_product_image: updatedImages,
				});
			};
		}
	};

	const renderProductImages = () => {
		return product.list_product_image.map((image, index) => (
			<div key={index}>
				<img src={image} alt={`Product Image ${index}`} style={{ width: '300px', height: '300px', margin: '20px' }} />
				<input type="file" onChange={handleImageChange(index)} />
			</div>
		));
	};


	const submitChange = () => {
		const token = 'Bearer ' + user.access_token;
		const data = {
			product_code: product.product_code,
			product_name: product.product_name,
			artist: product.artist,
			description: product.description,
			category: product.category,
			product_stock: product.product_stock,
			sell_price: product.sell_price,
			discount_price: product.discount_price,
			list_product_image: product.list_product_image,
		}
		const reg = basicGetRequets("/product/product_detail", { product_code: product.product_code });
		async function excuteOrder() {
			const token = 'Bearer ' + user.access_token;
			async function excuteOrder() {
				const token = 'Bearer ' + user.access_token;
				try {
					const getProfileRequest = await axios.get(BASE_URL + "/product/product_list",
						{
							headers: {
								'content-type': 'application/json',
								'Authorization': token
							}
						})
					if (getProfileRequest.data) {
						reg.then((data) => {
							
						}
						).catch(error => {
							setLoading(true);
						}).finally(() => {
							setLoading(false);
						});
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
			}
			excuteOrder();
		}
		excuteOrder();
	}
				

	const handleChange = (event) => {
		const { name, value } = event.target;
		setProduct({
			...product,
			[name]: value
		});
	};


	const handleSubmit = (event) => {
		event.preventDefault();

	};

	if (loading) {
		return <LoadingPage />;
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>

				<div className="row">
					<h2 className="text-center">Thông tin sản phẩm</h2>

					<div className="col-md-8">
						<div className="section-frame-admin margin">
							<div className="margin">
								<label>
									Tên sản phẩm: <br></br>
									<input className="input-custom margin" type="text" name="product_name" value={product.product_name} onChange={handleChange} />
								</label>
							</div>
							<div className="margin">
								Mã Sản phẩm: <br></br>
								<label>
									<input className="input-custom margin" type="text" name="product_code" value={product.product_code} onChange={handleChange} />
								</label>
							</div>
							<div className="margin">
								Nghệ sĩ: <br></br>
								<label>
									<input className="input-custom margin" type="text" name="artist" value={product.artist} onChange={handleChange} />
								</label>
							</div>
							<div className="margin">
								Mô tả sản phẩm: <br></br>
								<label>
									<input className="input-custom margin" type="text" name="description" value={product.description} onChange={handleChange} />
								</label>
							</div>
						</div>
					</div>



					<div className="col-md-4">
						<div className="section-frame-admin margin">
							<div className="margin">
								<label>
									Giá bán: <br></br>
									<input className="input-custom-price margin" type="number" name="discount_price" value={product.discount_price} onChange={handleChange} />
								</label>
							</div>
							<div className="margin">
								Giá khuyến mãi: <br></br>
								<label>
									<input className="input-custom-price margin" type="number" name="sell_price" value={product.sell_price} onChange={handleChange} />
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className="col-md-8">
						<div className="section-frame-admin margin">
							<div className="margin">
							</div>
							<div className="margin">
								Nhóm sản phẩm: <br></br>
								<label>
									<div>
										<select
											id="productClassification"
											name="classification"
											value={product.category}
										>
											<option value="">{product.category}</option>
										</select>
									</div>
								</label>
							</div>
							<div>

								<div className="margin" >
									Số lượng: <br></br>
									<input className="input-custom-price margin" type="number" name="stock" value={product.product_stock} onChange={handleChange} />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="section-frame-admin margin">

							<div>{renderProductImages()}</div>

						</div>
					</div>
				</div>

				<button onClick={submitChange} className="input-button" type="submit">Lưu</button>
			</form>
		</div>

	);
};

export { ProductDetailEdit };

