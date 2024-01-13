import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import RatingBar from '../RatingBar/RatingBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BadgeList } from '../BadgeList/BadgeList';

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
        <Card 
            className="product-item-card" // nah man, this is not a good way to do it, you should use css module instead
            // but i don't have time to fix it, so i will leave it here
            style={{ width: '100%', height: '100%', padding: '10px 0', cursor: 'pointer' }}
            onMouseOver={(e) => { e.target.style.transform = 'scale(1.06)'; }} 
            onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }} 
        >
            <Card.Img style={{height: 180, objectFit: 'contain'}} variant="top" src={data.list_product_image[0]}/>
            <Card.Body className='product_title' style={{paddingTop: 5, paddingBottom: 2}}>
                <Card.Title>
                    {data.product_name}
                </Card.Title>
            </Card.Body>
            <ListGroup style={{border: 0, marginTop: 'auto'}}>
                <ListGroup.Item style={{border: 0, paddingTop: 5, paddingBottom: 5}}>
                    <BadgeList data={data} />
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
                        style={{width: '100%'}}
                         />
                </ListGroup.Item>
            </ListGroup>
            <Card.Body style={{paddingTop: 5, paddingBottom: 5, height: 40}}>
                {price_element}
            </Card.Body>
        </Card>
    );
};

export default HomepageProductItem;