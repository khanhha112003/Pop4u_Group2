import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Artist.css';
import "react-bootstrap";
import data from './ArtistData.json';
import 'animate.css/animate.min.css'; 

function ArtistList() {
  const [filterName, setFilterName] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = event => {
    const inputValue = event.target.value;
    setFilterName(inputValue);

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Set new timeout for 2 seconds
    const newTimeout = setTimeout(() => {
      const newFilteredData = data.filter(artist =>
        artist.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(newFilteredData);
    }, 150);

    // Save the new timeout ID
    setSearchTimeout(newTimeout);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
            <div className='banner-artist'>
              <span className='head3'>Nghệ Sĩ</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='search-artist'>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                <label htmlFor="filterInput" className='label-xxxl search-label'>Bạn Muốn Lắng Nghe Âm Nhạc Từ Ai?</label>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                <input
                  className='label-m'
                  type="text"
                  id="filterInput"
                  value={filterName}
                  onChange={handleFilterChange}
                  placeholder="Tên nghệ sĩ..."
                />
            </div>
          </div>
        </div>
        <div className="row">
          {filteredData.map(artist => (
            <div key={artist.id} className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="artist-card animate__animated animate__slideInRight">
                <div className="artist-pic">
                  <img src={artist.pic} alt={artist.name} />
                </div>
                <div className="artist-name">
                  <a href=''><span className="label-xxl">{artist.name}</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ArtistList };
