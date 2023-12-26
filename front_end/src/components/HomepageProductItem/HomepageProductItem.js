import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import img_product from './icons/img_product.png'
import RatingBar from '../RatingBar/RatingBar';

const HomepageProductItem = ({ data, onClickHandler }) => {
    const handleRatingChange = (newRating) => {
        console.log(`Rated: ${newRating}`);
        // You can perform additional actions when the rating changes, e.g., update state or send data to the server.
      };
    return (
        <div onClick={onClickHandler}>
            <img src={img_product} alt="Product Image" />
            <div style={ {marginTop : "10px"}}>
                <span className="tag">Mới</span>
                <span className="tag">Freeship</span>
                <div className="product-box-title">
                    <h4 className="product-name">
                    {data.product_name}
                    </h4>
                </div>
                <RatingBar isDisabled={false} rating={3} rateAction={handleRatingChange} />
                <div className="product-box-price d-flex align-items-center">
                    {data.discount_price !== 0 && (
                        <div className="price-sale">
                            <span className="price-inner">{data.discount_price}</span>
                        </div>
                    )}
                    <del className="price-del">{data.sell_price}</del>
                </div>
            </div>
        </div>
    );
};

export default HomepageProductItem;