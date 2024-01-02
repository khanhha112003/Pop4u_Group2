import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import RatingBar from '../RatingBar/RatingBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BadgeList } from '../BadgeList/BadgeList';

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

    console.log(data);

    return (
        <Link to="/product_detail" style={{ width: '100%', height: '100%', cursor: 'pointer' }}>
        <Card style={{ width: '100%', height: '100%', padding: '10px 0'}}>
            <Card.Img style={{height: 180, objectFit: 'contain'}} variant="top" src={data.list_product_image[0]} />
            <Card.Body className='product_title' style={{paddingTop: 5, paddingBottom: 5}}>
                <Card.Title>
                    {data.product_name}
                </Card.Title>
            </Card.Body>
            <ListGroup style={{border: 0, marginTop: 'auto'}}>
                <ListGroup.Item style={{border: 0, paddingTop: 5, paddingBottom: 5}}>
                    <BadgeList data={{
                        is_new: data.is_new,
                        is_hot: data.is_hot,
                        is_freeship: data.is_freeship,
                        is_sale: data.is_sale
                    }} />
                </ListGroup.Item>
                <ListGroup.Item style={{border: 0, paddingTop: 5, paddingBottom: 5}}>
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
            <Card.Body style={{paddingTop: 5, paddingBottom: 5, height: 40}}>
                {price_element}
            </Card.Body>
        </Card>
        </Link>
    );
};

export default HomepageProductItem;