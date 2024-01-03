
import './ProductDetail.css'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
        // Do something with the new rating, e.g., update it in the state
        const newRatingData = { rating: newRating, num_of_rating: ratingData.num_of_rating + 1 };
        const updateRatingRequest = basicPutRequest("/update_rating", { product_code: searchParam.get("product_code") , rating: newRatingData.rating, num_of_rating: newRatingData.num_of_rating });
        updateRatingRequest.then((response) => {
            setRatingData(response.data);
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
            <div className="row">
                <div className="col-md-6 col-sm-12">
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

                <div className="col-md-3 product_1">
                    <div>
                        <div className="product-box-title">
                            <h4>
                                <a href="" title={content.product_data.product_name}>
                                    {content.product_data.product_name}
                                </a>
                            </h4>
                        </div>
                        <div style={{maxWidth: 400}}>
                            <BadgeList data={content.product_data} small={false} />
                        </div>
                        <div>
                            {
                                content.product_data.discount_price === 0 ? (
                                    <div className="price-sale">
                                        <span className="price-inner">{content.product_data.sell_price}</span>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div className="price-sale">
                                            <span className="price-inner">{content.product_data.discount_price}</span>
                                        </div>
                                        <del className="price-del">{content.product_data.sell_price}</del>
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
                        <hr></hr>
                        <div>
                            <div>
                                <h6 className="margin">Số lượng: {content.product_data.product_stock}</h6>
                                <label style={{ cursor: 'pointer' }} onClick={decreaseQuantity}><Minus /></label>
                                <input className="quantity" type="text" value={quantity} readOnly />
                                <label style={{ cursor: 'pointer' }} onClick={increaseQuantity}><Plus /></label>
                            </div>
                            <div>
                                <button className='btn add-cart' ><span className="label-l" style={{ color: 'var(--theme-primary1, #325DA8)' }}>Thêm vào giỏ hàng</span></button>
                                <button className='btn pay' ><span className="label-l" style={{ color: 'var(--theme-typo-label-light, #FFF)' }} >Thanh toán ngay</span></button>
                            </div>
                            <hr></hr>
                            <div>
                                <h5 className="margin">Mô tả sản phẩm:</h5>
                                <p className="body-small margin pre-line">
                                    {content.product_data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    content.related_product.length > 0 && (
                        <div>
                            <div className='center'
                                style={{ marginTop: '60px', cursor: 'pointer' }}>
                                <h3 >Sản phẩm liên quan </h3>
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