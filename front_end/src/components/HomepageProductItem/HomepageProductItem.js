import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import RatingBar from '../RatingBar/RatingBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom'

const HomepageProductItem = ({ data }) => {
    const price_element = data.discount_price !== 0 ? (
        <div style={{display: 'flex',flexDirection: 'row'}}>
            <div className="price-sale">
                <span className="price-inner">{data.discount_price}</span>
            </div>
            <del className="price-del">{data.sell_price}</del>
        </div>
    ) : (
        <div className="price-sale">
            <span className="price-inner">{data.sell_price}</span>
        </div>
    );

    return (
        <Link to="/product_detail" style={{ width: '100%', height: '100%', cursor: 'pointer' }}>
        <Card style={{ width: '100%', height: '100%', padding: '10px 0'}}>
            <Card.Img style={{height: 180, objectFit: 'contain'}} variant="top" src={data.img_product} />
            <Card.Body className='product_title'>
                <Card.Title>
                    {data.product_name}
                </Card.Title>
            </Card.Body>
            <ListGroup style={{border: 0}}>
                <ListGroup.Item style={{border: 0}}>
                    {
                        data.special_badge !== null
                        ? ( 
                            data.special_badge.map((item, index) => (
                                <span key={index} className="tag">{item}</span>
                            ))
                        ) 
                        : (<div></div>)
                    }
                </ListGroup.Item>
                <ListGroup.Item style={{border: 0}}>
                    <RatingBar 
                        isDisabled={true}  
                        data={
                            {
                                rating: data.rating,
                                rating_detail: data.rating_detail
                            }
                        }
                         />
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {price_element}
            </Card.Body>
        </Card>
        </Link>
    );
};

export default HomepageProductItem;