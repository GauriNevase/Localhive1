import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Automatically change the slide every 3 seconds (adjust the interval as needed)
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, [currentIndex, images]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;
