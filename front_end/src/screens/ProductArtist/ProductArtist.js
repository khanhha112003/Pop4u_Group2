// import './ProductDetail.css'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';


import RatingBar from '../../components/RatingBar/RatingBar';
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";

import { basicGetRequets, basicPostRequest, combineMultipleRequests } from "../../app_logic/APIHandler";

function ProductArtist() {
    const [searchParam] = useSearchParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [content, setContent] = useState(
        {
            artist_data: {
                artist_name: '',
                artist_code: '',
                is_hot: false,
                artist_logo: "",
                artist_avatar: "",
                artist_description: '',
            },
            related_product: []
        });

    useEffect(() => {
        const getArtistRequest = basicGetRequets('/artist/artist_detail', { artist_code: searchParam.get('artist_code') });
        const getArtistProductRequest = basicGetRequets('/product/product_list', { artist_code: searchParam.get('artist_code') });

        const combineRequest = combineMultipleRequests([getArtistRequest, getArtistProductRequest])
            .then(responses => {
                var list_product = [];
                if (responses[1].data.list_product.length > 0) {
                    list_product = responses[1].data.list_product;
                }
                console.log(responses[0].data.artist_avatar)
                setContent({ artist_data: responses[0].data, related_product: list_product });
            }).catch(error => {
                setIsError(true);
            }).finally(() => {
                setIsLoading(false);
            })
    }, [])

    const styles = {
        overlayImage: {
            backgroundImage: `linear-gradient(0deg, rgba(128,128,128,1) 0%, rgba(128,128,128,0.9) 20%, rgba(128,128,128,0.3) 80%, rgba(255,255,255,0) 100%) ,url(${content.artist_data.artist_avatar})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flex: '0 0 auto',
            width: '100%',
            alignItems: 'flex-end'
        },
    }

    if (isError) {
        return <NotFoundPage />
    }

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className="container">
            <div className="row">
                <Row className="m-0">
                    <Col md={12} sm={12} style={styles.overlayImage}>
                        <div className="text-light">
                            <h3>{content.artist_data.artist_name}</h3>
                            <p>{content.artist_data.artist_description}</p>
                        </div>
                    </Col>
                </Row>

                {
                    content.related_product.length > 0 && (
                        <div>
                            <div className='center'
                                style={{ marginTop: '60px', cursor: 'pointer' }}>
                                <h3 >Sản phẩm</h3>
                                <h6>Xem tất cả sản phẩm<a onClick={() => navigate('/product_detail')}><Arrow /></a></h6>
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

export { ProductArtist };