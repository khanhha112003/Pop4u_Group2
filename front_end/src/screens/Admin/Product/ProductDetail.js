import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();


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
							setProduct(data.data);
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
		} else {
			navigate('/admin/product_list', { replace: true });
		}
	}
		, [location, navigate, user.access_token, logout]);
	const handleImageChange = (index, value) => {
		const updatedImages = product.list_product_image;
		updatedImages[index] = value;
		setProduct({
			...product,
			list_product_image: updatedImages,
		});
	};

	const deleteImage = (index) => {
		const updatedImages = product.list_product_image;
		updatedImages.splice(index, 1);
		setProduct({
			...product,
			list_product_image: updatedImages,
		});
	};

	const renderProductImages = () => {
		if (!product.list_product_image) {
			return null;
		}
		return product.list_product_image.map((image, index) => (
			<div key={index} className='col-sm-10 col-md-10 col-xl-3 col-lg-4 mx-auto' style={{ width: '90%', marginBottom: 20 }}>
				<input className="input-custom" type="text" name="image_link" value={image} onChange={(e) => handleImageChange(index, e.target.value)} />
				<img src={image} alt={`Product detail ${index}`} style={{ width: 300, margin: 10 }} />
				<button style={{display: product.list_product_image.length > 0}} onClick={() => deleteImage(index)}> Xoá ảnh </button>
			</div>
		));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setProduct({
			...product,
			[name]: value
		});
	};

	const handleCheckboxChange = (label, value) => {
		setProduct((prevProduct) => ({
			...prevProduct,
			[label]: value,
		}));
	};


	const handleSubmit = async (event) => {
		event.preventDefault();
		async function excuteOrder() {
			const token = 'Bearer ' + user.access_token;
			const data = {
				product_code: product.product_code,
				product_info: product
			}
			const config = {
				headers: {
					'content-type': 'application/json',
					'Authorization': token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
				}
			}
			try {
				const postRequest = await axios.post(BASE_URL + "/product/update_product", data, config);
				if (postRequest.data.status) {
					alert("Cập nhật thành công");
					navigate('/admin/product_list', { replace: true });
				} else {
					alert("Cập nhật thất bại");
				}

			} catch (error) {
				if (error.response.status === 401) {
					alert("User không có quyền"); // Unauthorized
					logout((val) => { });
				} else {
					alert("Cập nhật thất bại");
				}
			}
		}
		await excuteOrder();
	};

	const handleDeleteProduct = async (event) => {
		event.preventDefault();
		async function excuteOrder() {
			const token = 'Bearer ' + user.access_token;
			const data = {
				product_code: product.product_code,
			}
			const config = {
				headers: {
					'content-type': 'application/json',
					'Authorization': token,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
				}
			}
			try {
				const postRequest = await axios.delete(BASE_URL + "/product/delete_product", data, config);
				if (postRequest.data.status) {
					alert("Xoá thành công");
					navigate('/admin/product_list', { replace: true });
				} else {
					alert("Xoá thất bại");
				}
			} catch (error) {
				if (error.response.status === 401) {
					alert("User không có quyền"); // Unauthorized
					logout((val) => { });
				} else {
					alert("Xoá thất bại");
				}
			}
		}
		await excuteOrder();
	};

	const addImage = () => {
		const updatedImages = product.list_product_image;
		updatedImages.push('');
		setProduct({
			...product,
			list_product_image: updatedImages,
		});
	};

	if (loading) {
		return <LoadingPage isAdmin={true} />;
	}

	return (
		<div className="container">
			<form>

				<div className="row">
					<h2 className="text-center">Thông tin sản phẩm</h2>

					<div className="col-xs-12 col-sm-12 col-md-12 col-xl-7 col-lg-7">
						<div className="section-frame-admin margin">
							<div className="margin">
								<label>
									Tên sản phẩm: <br></br></label>
								<input
									className="input-custom"
									type="text"
									name="product_name"
									value={product.product_name}
									onChange={handleChange} />

							</div>
							<div className="margin">
								<label>Mã Sản phẩm: <br></br></label>

								<input
									className="input-custom "
									type="text"
									name="product_code"
									value={product.product_code}
									onChange={handleChange} />

							</div>
							<div className="margin">
								<label>Nghệ sĩ: <br></br></label>
								<input
									className="input-custom "
									type="text"
									name="artist"
									value={product.artist}
									onChange={handleChange} />

							</div>

							<div className="margin">
								<label>Mã nghệ sĩ: <br></br></label>

								<input
									className="input-custom "
									type="text"
									name="artist_code"
									value={product.artist_code}
									onChange={handleChange} />

							</div>
							<div className="margin">
								<label>Nhãn đánh giá: <br></br></label>
								<input
									className="input-custom "
									type="text"
									name="rating_detail"
									value={product.rating_detail}
									onChange={handleChange} />

							</div>

							<div className="margin" >
								Số lượng: <br></br>
								<input
									className="input-custom-price "
									type="number"
									name="product_stock"
									value={product.product_stock} onChange={handleChange} />
							</div>

						</div>
					</div>

					<div className="col-sm-12 col-md-12 col-xl-5 col-lg-5">
						<div className="section-frame-admin margin">
							<div className="margin">
								<label>
									Giá bán: <br></br></label>
								<input className="input-custom-price " type="number" name="discount_price" value={product.discount_price} onChange={handleChange} />

							</div>
							<div className="margin">
								<label>Giá khuyến mãi: <br></br></label>

								<input className="input-custom-price " type="number" name="sell_price" value={product.sell_price} onChange={handleChange} />

							</div>
							<div className="margin">
								Nhóm sản phẩm: <br></br>
								<label>
									<div>
										<select
											id="productClassification"
											name="categories"
											value={product.category}
											onChange={handleChange}
										>
											<option value="">{product.category}</option>
										</select>
									</div>
								</label>
							</div>
							<div className='row'>
								<div className="margin">
									Nhãn đặc biệt: <br></br>
									<div>
										<input
											type="checkbox"
											id="is_hot"
											checked={product.is_hot}
											onChange={() => handleCheckboxChange('is_hot', !product.is_hot)}
										/>
										<label htmlFor="hotProduct">Sản phẩm hot</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="is_new"
											checked={product.is_new}
											onChange={() => handleCheckboxChange('is_new', !product.is_new)}
										/>
										<label htmlFor="newProduct">Sản phẩm mới</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="is_sale"
											checked={product.is_sale}
											onChange={() => handleCheckboxChange('is_sale', !product.is_sale)}
										/>
										<label htmlFor="bestSeller">Sản phẩm bán chạy</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="is_freeship"
											checked={product.is_freeship}
											onChange={() => handleCheckboxChange('is_freeship', !product.is_freeship)}
										/>
										<label htmlFor="freeShipping">Sản phẩm free ship</label>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>




				<div className='row'>

					<div className="col-sm-12 col-md-12 col-xl-12 col-lg-12">
						<div className="section-frame-admin margin">

							<div className="margin" >
								<label>Mô tả sản phẩm: <br></br></label>
								<div className='text-area-container'>
									<textarea className="input-custom " type="text" name="description" value={product.description} onChange={handleChange} />
								</div>	
							</div>

						</div>
					</div>
				</div>

				<div className='row'>
                    <div className="col-sm-12 col-md-12 col-xl-12 col-lg-12">
                        <div 
                            className="section-frame-admin margin" 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>

                            <div style={{width: '95%'}}>
                                {renderProductImages()}
                            </div>

                            <button style={{width: 300}} type='button' className="input-button" onClick={addImage}>
                                Thêm ảnh
                            </button>
                        </div>
                    </div>
                </div>
				<div className='row'>
					<div className="col-sm-12 col-md-12 col-xl-6 col-lg-6">
						<button className="input-button" type="submit" onClick={handleSubmit}>Lưu</button>
					</div>
					<div className="col-sm-12 col-md-12 col-xl-6 col-lg-6" 
						 style={{alignItems: 'flex-end', display: 'flex', flexDirection: 'row-reverse'}}>
						<button 

							className="input-button-danger" 
							type="submit" 
							onClick={handleDeleteProduct}>Xoá sản phẩm</button>
					</div>
                </div>

			</form>
		</div>

	);
};

export { ProductDetailEdit };

