import React from 'react';
import funding_img4 from '../assets/funding_img4.jpg';
import CoolClever from '../assets/CoolClever.jpg';
import TeamFavorites from '../assets/TeamFavorites.jpg';
import StudentFilm from '../assets/StudentFilm.jpg';
import WhatWeDo from '../assets/WhatWeDo.png';

const ImageGallery = () => {
  return (
    <>
      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl md:text-4xl lg:text-3xl font-semibold mb-4">Find it first on Block Fund.</h1>
        <p>Block Fund is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
      </div>
      <div className="container mx-auto pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">

          <div className="relative flex flex-col">
            <a href="#" className="block">
              <img src={CoolClever} alt="Image 1" className="w-full h-64 object-cover rounded-lg mb-2" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>10 Cool & Clever Finds</p>
              </div>
            </a>
            <div className="flex justify-between">
              <p className="text-left mb-2 text-sm font-bold">Our Roundup of Standout Projects</p>
              <a href='#' className="text-right text-sm font-bold"><span>SEE COLLECTION</span></a>
            </div>
          </div>

          <div className="relative flex flex-col">
            <a href="#" className="block">
              <img src={TeamFavorites} alt="Image 2" className="w-full h-64 object-cover rounded-lg mb-2" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>Team Favorites</p>
              </div>
            </a>
            <div className="flex justify-between">
              <p className="text-left mb-2 text-sm font-bold">HERO & More Team Favorites</p>
              <a href='#' className="text-right text-sm font-bold"><span>SEE COLLECTION</span></a>
            </div>
          </div>

          <div className="relative flex flex-col">
            <a href="#" className="block">
              <img src={WhatWeDo} alt="Image 3" className="w-full h-64 object-cover rounded-lg mb-2" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>What We Do</p>
              </div>
            </a>
            <div className="flex justify-between">
              <p className="text-left mb-2 text-sm font-bold">Get the tech that gets people talking</p>
              <a href='#' className="text-right text-sm font-bold"><span>SEE COLLECTION</span></a>
            </div>
          </div>

          <div className="relative flex flex-col">
            <a href="#" className="block">
              <img src={StudentFilm} alt="Image 4" className="w-full h-64 object-cover rounded-lg mb-2 opacity-80" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>Student Films</p>
              </div>
            </a>
            <div className="flex justify-between">
              <p className="text-left mb-2 text-sm font-bold">Support students that have innovative ideas</p>
              <a href='#' className="text-right text-sm font-bold"><span>SEE COLLECTION</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
