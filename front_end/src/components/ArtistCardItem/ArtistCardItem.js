import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import React from 'react';
import "react-bootstrap";
import './StyleArtistCardItem.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as EmptyAvatar } from './icons/icon_empty_avatar.svg';

export const ArtistCardItem = ({ data, onMoreInfoClick }) => {
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
                        <div className='artist-reference'>
                            <a onClick={onMoreInfoClick} ><span className="label-l">Xem sản phẩm </span><Arrow/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

