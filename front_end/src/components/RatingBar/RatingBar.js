import React, { useState } from 'react';
import { ReactComponent as ActiveStar } from './icons/icon_star.svg';
import { ReactComponent as InactiveStar } from './icons/icon_inactive_star.svg';
import { ReactComponent as HalfStar } from './icons/icon_half_star.svg';
import './style.css';
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
      const isFull = i + 1 <= currentRating;
      const isHalf = i < currentRating && i + 1 > currentRating;

      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          style={{
            cursor: isDisabled ? '' : 'pointer',
            display: 'inline-block',
            height: "10%",
            width: "10%",
            margin: '0 1px', // Add margin between stars
            transition: 'color 0.3s', // Add color transition on hover
          }}
        >
          {isFull ? <ActiveStar /> : isHalf ? <HalfStar /> : <InactiveStar />}
        </span>
      );
    }
    stars.push(
      <span
        key={5}
        className = "rating-detail"
      >
        {data.rating_detail}
      </span>
    )
    return stars;
  };

  return (
    <div style={style}>
      <div>{renderStars()}</div>
    </div>
  );
};

export default RatingBar;