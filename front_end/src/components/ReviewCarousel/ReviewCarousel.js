import React, { useState } from 'react';
import './Carousel.css';
import 'react-bootstrap'

import { ReactComponent as  ArrowBack} from '../../theme/images/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../theme/images/arrow_forward.svg';

const ReviewCarousel = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="review-carousel">
      <button className='carousel-button' onClick={prevSlide}>
        <ArrowBack></ArrowBack>
      </button>
      <div className="review-slide">
          {slides[currentSlideIndex]}
      </div>
      <button className='carousel-button' onClick={nextSlide}>
        <ArrowForward></ArrowForward>
      </button>
    </div>
  );
};

export {ReviewCarousel};
