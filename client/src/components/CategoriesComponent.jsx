import React from 'react';
import home from '../assets/home.png';
import phone from '../assets/phone.png';
import bag from '../assets/bag.png';
import fitness from '../assets/fitness.png';
import audio from '../assets/audio.png';
import film from '../assets/film.png';
import Review1 from '../assets/Review1.jpg'
import Review2 from '../assets/Review2.jpg'
import Review3 from '../assets/Review3.jpg'
const CategoriesComponent = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-4 pb-10">
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
            <img src={bag} alt="Category 3" className="w-16 h-auto    mb-2 rounded-lg mx-auto" />
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

    <div className="flex flex-col items-center justify-center px-4 pb-10">
  <h1 className="text-3xl font-semibold text-center mb-4">From the Block Fund Review</h1>
  <p className="text-center mb-2">Your behind-the-scenes</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
    <div className="rounded-lg shadow-md p-4">
      <img src={Review1} alt="Review 1" className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-sm mb-2">Looking Ahead: 5 Trends in Crowdfunding To Watch In 2024</p>
      <p className="text-sm mb-2">What's in store for Block Fund in the new year?</p>
      <a href="#" className="text-[#8c6dfd]">LEARN MORE</a>
    </div>
    <div className="rounded-lg shadow-md p-4">
      <img src={Review2} alt="Review 2" className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-sm mb-2">Unboxing a New Gaming & Productivity Handheld</p>
      <p className="text-sm mb-2">Does the OneXPlayer X1 live up to the hype?</p>
      <a href="#" className="text-[#8c6dfd]">LEARN MORE</a>
    </div>
    <div className="rounded-lg shadow-md p-4">
      <img src={Review3} alt="Review 3" className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-sm mb-2">Reviewing Retro Mini PC</p>
      <p className="text-sm mb-2">We put the new AYANEO AM02 Mini PC to the test!</p>
      <a href="#" className="text-[#8c6dfd]">LEARN MORE</a>
    </div>
  </div>
</div>

    </>
  );
};

export default CategoriesComponent;
