import React, { useState, useEffect } from 'react';
import './Artist.css';
import "react-bootstrap"
import data from './ArtistData.json';

// import ArtistPic from './images/b5d47b7be6a10edef21b0c0fd540070a.png';

const ArtistList = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          {data.map(artist => (
            <div key={artist.id} class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div class="artist-card">
                <div class="artist-pic">
                  <img src={artist.pic} alt={artist.name} />
                </div>
                <div class="artist-name">
                  <span class="h5">{artist.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ArtistList };
