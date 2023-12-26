import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import img_product from './icons/img_product.png'
import { ReactComponent as Star } from './icons/icon_star.svg';


const HomepageArtistItem = ({ data, onClickHandler }) => {

    return (
        <div className="col-3 product_4" onClick={onClickHandler}>
            <img src={img_product} alt="Product Image" />
            <div>
                <span className="tag">Mới</span>
                <span className="tag">Freeship</span>
                <div className="product-box-title">
                    <h4 className="product-name">
                        <a href="#" title={data.product_name}>
                            {data.product_name}
                        </a>
                    </h4>
                </div>
                <Star /> <Star /> <Star /> <Star /> <Star />
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

export default HomepageArtistItem;