import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import React from 'react';
import "react-bootstrap";
import './StyleArtistCardItem.css'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as EmptyAvatar } from './icons/icon_empty_avatar.svg';

export const ArtistCardItem = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div style={{ width: '100%' }}>
            <div className='hp-artist-card'>
                <div className='d-flex justify-content-between '>
                    <div className='hp-artist-card-image'
                    style={{ backgroundImage: `url(${data.artist_avatar})` }}>
                    </div>
                    <div className='hp-artist-card-content'>
                        <img
                            src={data.artist_logo}
                            alt="Avatar"
                        />
                        <h6 className='head6'>
                            {data.artist_name}
                        </h6>
                        <div className='artist-reference' onClick={() => {navigate('/artist_detail?artist_code=' + data.artist_code)}}>
                            <span className="label-l">Xem sản phẩm </span><Arrow/>
                        </div>
                    </div>
                    {/* <Card.Body style={{ padding: 0, height: '100%' }}>
                        <Container style={{ padding: 0, height: '100%' }}>
                            <Row style={{ padding: 0, height: '100%' }}>
                                <Col md={6} style={{ padding: 0 }}>
                                    <div
                                        style={{
                                            borderRadius: '20px 0 0 20px',
                                            overflow: 'hidden',
                                            height: '100%',
                                        }}
                                    >
                                        <img
                                            src={data.artist_avatar}
                                            alt="Your Image"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} style={{ backgroundColor: '#D8E2FF', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <img
                                            src={data.artist_logo}
                                            alt="Avatar"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                marginBottom: '10px',
                                            }}
                                        />

                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal' }}>
                                            {data.artist_name}
                                        </h3>

                                        <h6>
                                            Xem sản phẩm
                                            <a href="#" onClick={onMoreInfoClick}>
                                                <Arrow />
                                            </a>
                                        </h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body> */}
                </div>

            </div>
        </div>
    );
};

