
import './ProductDetail.css'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import { ReactComponent as Plus } from './icons/icon_plus.svg';
import { ReactComponent as Minus } from './icons/icon_minus.svg';
import { BadgeList } from '../../components/BadgeList/BadgeList';
import RatingBar from '../../components/RatingBar/RatingBar';
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";

import { basicGetRequets, basicPutRequest, combineMultipleRequests } from "../../app_logic/APIHandler";

function ProductDetail() {
    const [searchParam] = useSearchParams();
    const navigate = useNavigate();
    const [content, setContent] = useState(
        {
            product_data: {
                product_code: 0,
                product_name: "",
                product_stock: 0,
                is_new: false,
                is_hot: false,
                is_freeship: false,
                is_sale: false,
                list_product_image: [],
                description: '',
                discount_price: 0,
                sell_price: 0,
                rating: 0,
                num_of_rating: 0,
                rating_detail: "",
            },
            related_product: []
        });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ratingData, setRatingData] = useState({ userRating: 0, rating_detail: "" });
    const [quantity, setQuantity] = useState(1);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const productDetailRequest = basicGetRequets("/product/product_detail", { product_code: searchParam.get("product_code") });

        const relatedProductRequest = basicGetRequets("/product/product_list", { type_filter: "related", artist_code: searchParam.get("artist_code")});
        const userRatingRequest = basicGetRequets("/product/product_review", { product_code: searchParam.get("product_code") });
        const result = combineMultipleRequests([productDetailRequest, relatedProductRequest, userRatingRequest])
            .then((responses) => {
                var related_product = responses[1].data;
                if (related_product === null) {
                    related_product = [];
                }
                let data = {
                    product_data: responses[0].data,
                    related_product: related_product,
                }
                var rating_detail = "";
                if (data.product_data.rating_detail !== null || data.product_data.rating_detail !== "") {
                    rating_detail = data.product_data.rating_detail;
                } else {
                    rating_detail = data.product_data.num_of_rating + "+ đánh giá";
                }
                setRatingData({
                    userRating: responses[1].user_rating,
                    rating_detail: rating_detail
                })
                setContent(data)
            }).catch(error => {
                setError(404);
            }).finally(() => {
                setLoading(false);
            });

    }, []);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleImageSelect = (selectedIndex) => {
        setImageIndex(selectedIndex);
    };

    const handleRatingChange = (newRating) => {
        const newRatingData = { rating: newRating, num_of_rating: ratingData.num_of_rating + 1 };
        const updateRatingRequest = basicPutRequest("/update_rating", { product_code: searchParam.get("product_code") , rating: newRatingData.rating, num_of_rating: newRatingData.num_of_rating });
        updateRatingRequest.then((response) => {
            setRatingData(response.data);
        }).catch(error => {
            setError(error);
        });
    };

    const handleBuyNowButton = (product_code, quantity) => {
        const newCartRequest = basicPutRequest("/add_to_cart", { product_code: product_code, quantity: quantity });
        newCartRequest.then((response) => {
            navigate("/cart");
        }).catch(error => {
            setError(error);
        });
    };

    const handleAddToCartButton = (product_code, quantity) => {
        const newCartRequest = basicPutRequest("/add_to_cart", { product_code: product_code, quantity: quantity });
        newCartRequest.then((response) => {
            alert("Thêm vào giỏ hàng thành công");
        }).catch(error => {
            setError(error);
        });
    };

    if (loading) {
        return <LoadingPage />;
    }

    if (error === 404) {
        return <NotFoundPage />
    } else if (error === 406) {
        return <NotFoundPage />
    }

    return (
        <div className="container">
            <div className="row" style={{'marginTop': '64px'}}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="image-size">
                        <Carousel activeIndex={imageIndex} onSelect={handleImageSelect}>
                            {
                                content.product_data.list_product_image.map((imageSrc, index) => (
                                    <Carousel.Item key={"image_carou" + index}>
                                        <img 
                                            key={"image_tag" + index} className="d-block w-100" 
                                            src={imageSrc} alt={"image_" + index} />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                        <div style={{ marginTop: '3px', display: 'flex', justifyContent: 'center' }}>
                            {
                                content.product_data.list_product_image.map((imageSrc, index) => (
                                    <img
                                        key={"image_tag_banner_list" + index}
                                        src={imageSrc}
                                        alt={"image_" + index}
                                        style={{ width: '20%', marginRight: '1px', cursor: 'pointer' }}
                                        onClick={() => { setImageIndex(index) }}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className='product-main-info'>
                        <div className="product-detail-box-title">
                            <h5 className='head5'>
                                {content.product_data.product_name}
                            </h5>
                        </div>
                        <div className='d-flex badges-amount'>
                            <BadgeList data={content.product_data} small={false}/>
                            <div className='amount-warehouse'>
                                <span className="body-small">Số lượng: {content.product_data.product_stock}</span>
                            </div>
                        </div>
                        <div className='d-flex'>
                            {
                                content.product_data.discount_price === 0 ? (
                                    <div className="price-sale">
                                        <span className="price">{content.product_data.sell_price}đ</span>
                                    </div>
                                ) : (
                                    <div className='d-flex'>
                                        <div className="price-sale">
                                            <span className="price">{content.product_data.discount_price}đ</span>
                                            <span className="old-price">{content.product_data.sell_price}đ</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {
                            ratingData.userRating === 0
                                ? <RatingBar 
                                    style={{ width: 200 }}
                                    isDisabled={false} 
                                    data={{ rating: ratingData.totalRating, rating_detail: ratingData.rating_detail }} 
                                    onChangeValue={handleRatingChange} 
                                    />
                                : <RatingBar 
                                    style={{ width: 200 }}
                                    isDisabled={false} 
                                    data={{ rating: ratingData.userRating, rating_detail: ratingData.rating_detail }} 
                                    onChangeValue={handleRatingChange} 
                                    />
                        }
                    </div>
                    <hr></hr>
                    <div className='product-select-amount'>
                        <div className='select-amount d-flex'>
                            <span className='body-small'>Số lượng:</span>
                            <div className='select-amount-button'>
                                <label style={{ cursor: 'pointer' }} onClick={decreaseQuantity}><Minus/></label>
                                <input className="quantity body-small" type="text" value={quantity} readOnly />
                                <label style={{ cursor: 'pointer' }} onClick={increaseQuantity}><Plus/></label>
                            </div>
                        </div>
                        <div className='conversion-btn'>
                            <button 
                                onClick={() => {handleAddToCartButton(content.product_data.product_code, quantity)}}
                                className='add-to-cart'
                            >
                                <span className="label-xl">Thêm vào giỏ hàng</span>
                            </button>
                            <button 
                                onClick={() => {handleBuyNowButton(content.product_data.product_code, quantity)}}
                                className='buy-now' 
                            >
                                <span className="label-xl">Mua ngay</span>
                            </button>
                        </div>
                    </div>
                    <hr></hr>
                            <div>
                                <h5 className="margin">Mô tả sản phẩm:</h5>
                                <p className="body-small margin pre-line">
                                    {content.product_data.description}
                                </p>
                            </div>
                </div>
                {
                    content.related_product.length > 0 && (
                        <div>
                            <div className='center'
                                style={{ marginTop: '60px', cursor: 'pointer' }}>
                                <h4 className='head4'>Sản phẩm liên quan</h4>
                                <h6>Xem tất cả <a href="#"><Arrow /></a></h6>
                            </div>
                            <div className="product" style={{ marginBottom: 40 }}>
                                <HorizontalPagination
                                    key={"related_product"}
                                    gap={10} // Adjust the gap between items as needed
                                    background_color="white"
                                    items={content.related_product.map((item, index) => (
                                        <HomepageProductItem
                                            key={index}
                                            data={item}
                                        />
                                    ))}
                                    itemWidth={250} // Set the width of each item as needed
                                    itemHeight={425} // Set the height of each item as needed
                                    paddingItem={10} // Set the padding as needed
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { ProductDetail };