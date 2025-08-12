import React, { useState } from 'react';
import './slider.css';

function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusIndex = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= props.slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = props.slides.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <div className='slider-container'>
      <button className='prev' onClick={() => plusIndex(-1)}>Prev</button>
      <div className='slides'>
        <img src={props.slides[slideIndex]} alt="Slide" />
      </div>
      <button className='next' onClick={() => plusIndex(1)}>Next</button>
    </div>
  );
}

export default Slider;
