import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoolClever from '../assets/CoolClever.jpg';
import TeamFavorites from '../assets/TeamFavorites.jpg';
import WhatWeDo from '../assets/WhatWeDo.jpg';
import memorial from '../assets/memorial.jpg';

const ImageGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto text-center py-10 pt-24">
        <h1 className="text-3xl md:text-4xl lg:text-3xl font-semibold mb-4">Find it first on Block Fund.</h1>
        <p>Block Fund is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
      </div>
      <div className="container mx-auto pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          <div className="relative flex flex-col bg-white dark:bg-[#1c1c24] rounded-lg shadow-lg cursor-pointer" onClick={() => navigate("/TopFinds")}>
              <img src={CoolClever} alt="Image 1" className="w-full h-64 object-cover rounded-lg mb-2" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>10 Cool & Clever Finds</p>
              </div>
            <div className="flex justify-between py-2 px-2">
              <p className="text-left mb-2 text-sm font-semibold">Our Roundup of Standout Projects</p>
              <a className="text-right text-sm font-semibold"><span>SEE COLLECTION</span></a>
            </div>
          </div>

          <div className="relative flex flex-col bg-white dark:bg-[#1c1c24] rounded-lg shadow-lg cursor-pointer" onClick={() => navigate("/Competition")}>
              <img src={TeamFavorites} alt="Image 2" className="w-full h-64 object-cover rounded-lg mb-2" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>Competition</p>
              </div>
            <div className="flex justify-between py-2 px-2">
              <p className="text-left mb-2 text-sm font-semibold">HERO & More</p>
              <a className="text-right text-sm font-semibold"><span>SEE COLLECTION</span></a>
            </div>
          </div>

          <div className="relative flex flex-col bg-white dark:bg-[#1c1c24] rounded-lg shadow-lg cursor-pointer" onClick={() => navigate("/WhatWeDo")}>
              <img src={WhatWeDo} alt="Image 3" className="w-full h-64 object-cover rounded-lg mb-2" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>What We Do</p>
              </div>
            <div className="flex justify-between py-2 px-2">
              <p className="text-left mb-2 text-sm font-semibold">Get the tech that gets people talking</p>
              <a className="text-right text-sm font-semibold"><span>SEE COLLECTION</span></a>
            </div>
          </div>

          <div className="relative flex flex-col bg-white dark:bg-[#1c1c24] rounded-lg shadow-lg cursor-pointer" onClick={() => navigate("/Memorial")}>
              <img src={memorial} alt="Image 4" className="w-full h-64 object-cover rounded-lg mb-2 opacity-80" />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center font-extrabold text-3xl text-white'>Memorial</p>
              </div>
            <div className="flex justify-between py-2 px-2">
              <p className="text-left mb-2 text-sm font-semibold">Projects focused on honoring and preserving memories.</p>
              <a className="text-right text-sm font-semibold"><span>SEE COLLECTION</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
