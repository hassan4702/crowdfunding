import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import left from '../assets/left.png';
import right from '../assets/right.png';
const Carousel = () => {
  const images = [
    { id: 1, src: image1, alt: 'Image 1', text: '"Empower dreams, ignite change - support innovation today!"' },
    { id: 2, src: image2, alt: 'Image 2', text: '"Fuel passion, transform lives - join the movement!"' },
    { id: 3, src: image3, alt: 'Image 3', text: '"Unite to make a difference - together, we create impact!"' }
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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative ">
      <div className="overflow-hidden rounded-lg" >
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-96 object-cover"
          // Adjust h-96 to your desired height
        />
        <div className="absolute left-5 bottom-10 font-bold text-2xl text-white p-2 opacity-75">
        {/* <div className="absolute left-5 bottom-10 font-bold text-lg text-black p-2 opacity-75">
          {images[currentImage].text}
        </div> */}
      </div>
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-l-md"
      >
        <img src={left} className='h-20'></img>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-r-md"
      > */}
        {/* <img src={right} className='h-20'></img>
      </button> */}
    </div>
    </div>
  );

};

export default Carousel;
