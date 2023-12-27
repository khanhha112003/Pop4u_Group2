import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import img_product from './icons/img_product.png'
import RatingBar from '../RatingBar/RatingBar';

const HomepageProductItem = ({ data, onClickHandler, margin, padding }) => {
    const handleRatingChange = (newRating) => {
        console.log(`Rated: ${newRating}`);
        // You can perform additional actions when the rating changes, e.g., update state or send data to the server.
      };
    return (
        <div onClick={onClickHandler} style={{margin: margin, padding: padding}}>
            <img src={img_product} alt="Product Image" />
            <div style={ {marginTop : "10px"}}>
                <span className="tag">Mới</span>
                <span className="tag">Freeship</span>
                <div className="product-box-title">
                    <p className="product-name">
                    {data.product_name}
                    </p>
                </div>
                <RatingBar isDisabled={true} rating={data.rating} rateAction={handleRatingChange} />
                {data.discount_price !== 0 && (
                <div className="product-box-price d-flex align-items-center">
                        <div className="price-sale">
                            <span className="price-inner">{data.discount_price}</span>
                        </div>
                    <del className="price-del">{data.sell_price}</del>
                </div>
                )}
                { data.discount_price === -1 && (
                <div className="product-box-price d-flex align-items-center">
                    <div className="price-sale">
                        <span className="price-inner">{data.sell_price}</span>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default HomepageProductItem;