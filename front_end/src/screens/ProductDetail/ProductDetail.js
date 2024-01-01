
import './ProductDetail.css'
import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import { ReactComponent as Plus } from './icons/icon_plus.svg';
import { ReactComponent as Minus } from './icons/icon_minus.svg';
import RatingBar from '../../components/RatingBar/RatingBar';
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";

import { basicGetRequets, basicPutRequest, combineMultipleRequests } from "../../app_logic/APIHandler";

function ProductDetail(product_id) {
    const [content, setContent] = useState(
        {
            product_data: {
                product_id: 0,
                product_name: "",
                options: [],
                special_badge: [],
                list_product_image: [],
                description: '',
                discount_price: 0,
                sell_price: 0,
                rating: 0,
                num_of_rating: 0,
                rating_detail: "",
                img_product: "",
            },
            related_product: []
        });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ratingData, setRatingData] = useState({ userRating: 0, rating_detail: "" });
    const [quantity, setQuantity] = useState(1);
    const [imageIndex, setImageIndex] = useState(0);
    const [option, setOption] = useState(0);

    useEffect(() => {
        const productDetailRequest = basicGetRequets("/product_detail", { product_id: product_id });
        const relatedProductRequest = basicGetRequets("/product_list", { type: "related" });
        const userRatingRequest = basicGetRequets("/user_rating", { product_id: product_id });
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
        const updateRatingRequest = basicPutRequest("/update_rating", { product_id: product_id, rating: newRatingData.rating, num_of_rating: newRatingData.num_of_rating });
        updateRatingRequest.then((response) => {
            setRatingData(response.data);
        }).catch(error => {
            setError(error);
        });
    };

    const handleOptionSelection = (selectedOption) => {
        setOption(selectedOption);
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
                                        key={"image_tag_banter" + index}
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
                    <img src={content.product_data.img_product} alt="Product Image" />
                    <div>
                        {content.product_data.special_badge.map((tag, index) => (
                            <span className="tag">{tag}</span>
                        ))}
                        <div className="product-box-title">
                            <h4>
                                <a href="" title={content.product_data.product_name}>
                                    {content.product_data.product_name}
                                </a>
                            </h4>

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
                                ? <RatingBar isDisabled={false} data={{ rating: ratingData.totalRating, rating_detail: ratingData.rating_detail }} onChangeValue={handleRatingChange} />
                                : <RatingBar isDisabled={false} data={{ rating: ratingData.userRating, rating_detail: ratingData.rating_detail }} onChangeValue={handleRatingChange} />
                        }
                        <hr></hr>
                        <div>
                            {
                                content.product_data.options.length > 0 && (
                                    <div>
                                        <h5 className="margin">Ver:</h5>
                                        <div>
                                            {
                                                content.product_data.options.map((optionName, index) => (
                                                    <button
                                                        key={"option" + index}
                                                        className={`btn option-box ${index === option ? 'active' : ''}`}
                                                        onClick={() => handleOptionSelection(index)}
                                                    >
                                                        {optionName}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )

                            }
                            <div>
                                <h5 className="margin">Số lượng:</h5>
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
                                <p className="body-small margin">
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
                            <div className="product">
                                <HorizontalPagination
                                    gap={10} // Adjust the gap between items as needed
                                    background_color="white"
                                    items={content.related_product.map((item, index) => (
                                        <HomepageProductItem
                                            key={index}
                                            data={{
                                                product_name: item.product_name,
                                                discount_price: item.discount_price,
                                                sell_price: item.sell_price,
                                                img_product: item.img_product,
                                                rating_detail: item.rating_detail,
                                                rating: item.rating,
                                                special_badge: item.special_badge
                                            }}
                                        />
                                    ))}
                                    itemWidth={250} // Set the width of each item as needed
                                    itemHeight={600} // Set the height of each item as needed
                                    paddingItem={20} // Set the padding as needed
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