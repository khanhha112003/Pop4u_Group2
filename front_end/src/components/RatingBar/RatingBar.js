import React, { useState } from 'react';
import { ReactComponent as ActiveStar } from './icons/icon_star.svg';
import { ReactComponent as InactiveStar } from './icons/icon_inactive_star.svg';
import { ReactComponent as HalfStar } from './icons/icon_half_star.svg';

const RatingBar = ({ rating, isDisabled, onChangeValue }) => {
  const [currentRating, setRating] = useState(rating);

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
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            display: 'inline-block',
            fontSize: '24px', // Adjust the size as needed
            margin: '0 5px', // Add margin between stars
            transition: 'color 0.3s', // Add color transition on hover
          }}
        >
          {isFull ? <ActiveStar /> : isHalf ? <HalfStar /> : <InactiveStar />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div>{renderStars()}</div>
    </div>
  );
};

export default RatingBar;
