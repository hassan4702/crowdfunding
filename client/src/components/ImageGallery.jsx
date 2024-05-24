import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const ImageGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto text-center py-10 pt-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Find it first on Block Fund.</h1>
        <p>Block Fund is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
      </div>
      <div className="container mx-auto pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/TopFinds")}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-300 hover:from-purple-800 hover:to-purple-400 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>10 Cool & Clever Finds</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginleft: '4px', color: 'white' }} />
            </div>
            
          </div>

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/Competition")}
          >
            <div className='absolute inset-0 bg-gradient-to-l from-purple-700 to-purple-300 hover:from-purple-800 hover:to-purple-400 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>Non Profit</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginleft: '4px', color: 'white' }} />
            </div>
          </div>

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/WhatWeDo")}
          >
            <div className='absolute inset-0 bg-gradient-to-l from-purple-300 to-purple-700 hover:from-purple-400 hover:to-purple-800 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>What We Do</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginleft: '4px', color: 'white' }} />
            </div>
          </div>

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/Memorial")}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-700 hover:from-purple-400 hover:to-purple-800 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>Memorial</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginleft: '4px', color: 'white' }} />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
