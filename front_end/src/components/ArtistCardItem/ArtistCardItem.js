import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as EmptyAvatar } from './icons/icon_empty_avatar.svg';

export const ArtistCardItem = ({ data, onMoreInfoClick }) => {
    return (
        <Card style={{ padding: 0, borderRadius: 40, overflow: 'clip', height: 300 }}>
            <Card.Body style={{ padding: 0, height: '100%' }}>
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

                                {/* Artist name */}
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal' }}>
                                    {data.artist_name}
                                </h3>

                                {/* Icon */}
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
            </Card.Body>
        </Card>
    );
};

