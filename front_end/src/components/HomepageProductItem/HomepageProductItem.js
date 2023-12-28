import React from 'react';
import "react-bootstrap"
import "./HomepageProductItem.css";
import RatingBar from '../RatingBar/RatingBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const HomepageProductItem = ({ data, onClickHandler, margin, padding }) => {
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
    const speical_tag = ["Mới", "Freeship"]
    // const special_tag = data.special_tag.length > 0 ? (
    const special_tag_element = speical_tag.length > 0 ? (
        speical_tag.map((item, index) => (
            <span key={index} className="tag">{item}</span>
        ))
    ) : (
        <></>
    );

    return (
        <Card style={{ width: '100%', height: '100%', cursor: 'pointer' }} onClick={onClickHandler}>
            <Card.Img variant="top" src={data.img_product} />
            <Card.Body className='product_title'>
                <Card.Title>
                    {data.product_name}
                </Card.Title>
            </Card.Body>
            <ListGroup style={{border: 0}}>
                <ListGroup.Item style={{border: 0}}>
                    {special_tag_element}
                </ListGroup.Item>
                <ListGroup.Item style={{border: 0}}>
                    <RatingBar 
                        isDisabled={true}  
                        numOfRating={data.numOfRating}
                        data={
                            {
                                rating: data.rating,
                                numOfRating: data.numOfRating
                            }
                        }
                         />
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {price_element}
            </Card.Body>
        </Card>
    );
};

export default HomepageProductItem;