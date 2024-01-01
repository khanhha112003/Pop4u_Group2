import React, { useState } from 'react';
import { ReactComponent as ActiveStar } from './icons/icon_star.svg';
import { ReactComponent as InactiveStar } from './icons/icon_inactive_star.svg';
import { ReactComponent as HalfStar } from './icons/icon_half_star.svg';

const RatingBar = ({style, data, isDisabled, onChangeValue }) => {
  const [currentRating, setRating] = useState(data.rating);

  const handleStarClick = (starIndex) => {
    if (!isDisabled) {
      setRating(starIndex + 1);
      onChangeValue(starIndex + 1);
    }
  };

  const handleStarHover = (starIndex) => {
    if (!isDisabled) {
      setRating(starIndex + 1);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      var isFull = false;
      var isHalf = false;
      if (i + 1 > currentRating && i < currentRating) {
        isFull = false;
        isHalf = true;
      } else if (i + 1 < currentRating) {
        isFull = true;
        isHalf = false;
      }
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          style={{
            cursor: isDisabled ? '' : 'pointer',
            display: 'inline-block',
            height: "15%",
            width: "15%",
            margin: '0 1px', // Add margin between stars
            transition: 'color 0.3s', // Add color transition on hover
          }}
        >
          {isFull ? <ActiveStar /> : isHalf ? <HalfStar /> : <InactiveStar />}
        </span>
      );
    }
    if (data.rating_detail !== null) {
      stars.push(
        <span
          key={5}
          style={{
            color: '#6c757d',
            fontSize: '12px',
            marginLeft: 10,
            width: '30%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {data.rating_detail}
        </span>
      )
    }
    return stars;
  };

  return (
    <div style={style}>
      <div style={{
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            flexDirection: 'row',
      }}>{renderStars()}</div>
    </div>
  );
};

export default RatingBar;
