import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import leftArrow from '../assets/left.png'; 
import rightArrow from '../assets/right.png'; 
import funding_img2 from '../assets/funding_img2.jpg';
import AYANEO from '../assets/AYANEO.jpg';

const Carousel = () => {
  const images = [
    { id: 1, src: image1, alt: 'Image 1', text: '"Empower dreams, ignite change - support innovation today!"' },
    { id: 2, src: funding_img2, alt: 'Image 2', text: '"Fuel passion, transform lives - join the movement!"' },
    { id: 3, src: AYANEO, alt: 'Image 3', text: '"Unite to make a difference - together, we create impact!"' }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative w-full lg:h-[35rem] md:h-[28rem] h-[22rem]">
      {/* Carousel Image */}
      <div className="overflow-hidden rounded-lg w-full h-full">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-4 right-4 flex flex-row gap-2">
        <button
          className="p-2 bg-white rounded-full shadow cursor-pointer"
          onClick={handlePrev}
        >
          <img src={leftArrow} alt="Previous" className="w-6 h-6" />
        </button>

        <button
          className="p-2 bg-white rounded-full shadow cursor-pointer"
          onClick={handleNext}
        >
          <img src={rightArrow} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
