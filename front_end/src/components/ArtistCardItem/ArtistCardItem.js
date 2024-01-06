import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import React from 'react';
import "react-bootstrap";
import './StyleArtistCardItem.css'
import { useNavigate } from 'react-router-dom';

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
                </div>
            </div>
        </div>
    );
};

