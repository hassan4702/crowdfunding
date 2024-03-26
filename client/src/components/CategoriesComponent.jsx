import React from 'react';
import home from '../assets/home.png';
import phone from '../assets/phone.png';
import bag from '../assets/bag.png';
import fitness from '../assets/fitness.png';
import audio from '../assets/audio.png';
import film from '../assets/film.png';
const CategoriesComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-20">
  <h1 className="text-3xl font-semibold text-center mb-4">Which categories interest you?</h1>
  <p className="text-center mb-6">Discover projects just for you and get great recommendations when your interests.</p>
  <button className="bg-[#8c6dfd] text-white py-2 px-4 rounded mb-6">SIGN UP AND SELECT INTERESTS</button>
  <p className="text-center mb-4">Or explore our top categories</p>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-screen-lg">
    <div className="flex flex-col items-center">
      <a href="#" className="hover:bg-gray-200 rounded-lg p-2">
        <img src={home} alt="Category 1" className="w-16 h-auto mb-2 rounded-lg mx-auto" />
        <p className="text-sm text-center">HOME</p>
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a href="#" className="hover:bg-gray-200 rounded-lg p-2">
        <img src={phone} alt="Category 2" className="w-16 h-auto mb-2 rounded-lg mx-auto" />
        <p className="text-sm text-center">PHONES & ACCESSORIES</p>
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a href="#" className="hover:bg-gray-200 rounded-lg p-2">
        <img src={bag} alt="Category 3" className="w-16 h-auto mb-2 rounded-lg mx-auto" />
        <p className="text-sm text-center">TRAVEL & OUTDOORS</p>
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a href="#" className="hover:bg-gray-200 rounded-lg p-2">
        <img src={fitness} alt="Category 4" className="w-16 h-auto mb-2 rounded-lg mx-auto" />
        <p className="text-sm text-center">HEALTH & FITNESS</p>
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a href="#" className="hover:bg-gray-200 rounded-lg p-2">
        <img src={audio} alt="Category 5" className="w-16 h-auto mb-2 rounded-lg mx-auto" />
        <p className="text-sm text-center">AUDIO</p>
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a href="#" className="hover:bg-gray-200 rounded-lg p-2">
        <img src={film} alt="Category 6" className="w-16 h-auto mb-2 rounded-lg mx-auto" />
        <p className="text-sm text-center">FILM</p>
      </a>
    </div>
  </div>
</div>


  

  );
};

export default CategoriesComponent;
