import React from 'react';
import Bluesmart from '../assets/Bluesmart.png';
import Evapolar from '../assets/Evapolar.png';
import Explore from '../assets/Explore.png';
import GetTheTech from '../assets/GetTheTech.jpg';
import inspired from '../assets/inspired.png';
import perk from '../assets/perk.png';
import SuperTroopers from '../assets/SuperTroopers.png';
import MisfitShine from '../assets/MisfitShine.png';

const WhatWeDo = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* Tech Image Section */}
      <div className="relative">
        <img src={GetTheTech} alt="Tech Image" className="w-full h-screen object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold pb-3">
            Get the tech that gets people talking
          </h1>
          <p className="font-bold">With both live crowdfunding campaigns and innovative products shipping now, there’s no better place to start the hunt for cool and clever innovations that surprise and delight. Block Fund is where new launches.</p>
        </div>
      </div>

      {/* Fund the next big thing Section */}
      <div className="text-center my-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold pb-3">Fund the next big thing</h2>
        <p className='text-justify'>Block Fund's crowdfunding campaigns are where new and groundbreaking products take flight, sometimes long before they hit mainstream availability. With thousands of campaigns launching every week, there's great tech, design, and much more around every corner — often with limited-time perks and pricing for the earliest backers. Before it's everywhere, it's on Block Fund.</p>
      </div>

      {/* Join the journey from idea to market Section */}
      <div className="text-center my-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold pb-3">Join the journey from idea to market</h2>
        <p className='text-justify'>With Block Fund, you have the opportunity to support entrepreneurs and new technology from the earliest stages of development. Be sure to evaluate every campaign closely and contribute at a level you can afford in the event that the team is unable to complete the project as planned.</p>
        <p className='text-justify'>Browse campaigns, read the stories from the entrepreneurs themselves, evaluate the stage of development and any potential production risks — and then fund the projects that you want to help succeed.</p>
        <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-bold py-2 px-4 rounded mt-4 mb-4">
          Explore Projects
        </button>
        <p className='text-center'>Or <span className='text-[#808191]'><a href='#'>learn more</a></span> about crowdfunding and your role as a backer.</p>
      </div>

      {/* Great finds, delivered daily Section */}
      <div className="text-center my-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold pb-3">Great finds, delivered daily</h2>
        <p>We surface the best and brightest of Block Fund in our newsletter. Sign up to find out about great technology, design, film, and much more — all before it hits the mainstream.</p>
        <div className="flex flex-col md:flex-row justify-center items-center my-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-400 px-4 py-2 rounded-l mb-2 md:mb-0 md:mr-2"
          />
          <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-bold py-2 px-4 rounded-r ml-0 md:ml-2">
            Subscribe
          </button>
        </div>
        <label className="flex flex-col md:flex-row items-center">
          <input type="checkbox" className="form-checkbox mr-2" />
          <span className="mb-2 md:mb-0">
            I agree to the <a href='#' className="text-blue-500">Terms of Use</a> and have read and understand the <a href='#' className="text-blue-500">Privacy Policy.</a> 
          </span>
        </label>
      </div>

      {/* What is a perk Section */}
      <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
        <img src={perk} alt="Left Image" className="w-full md:w-1/4 mb-4 md:mb-0" />
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-2xl font-bold pb-3">What is a perk?</h2>
          <p>Services, events, or anything that does not violate our Terms of Use. Perks are listed on the right side of the Campaign page, under the "Back It" button. If you do not see any perks listed, the campaign owner may have decided not to offer any perks.</p>
        </div>
      </div>

      {/* Just a few of our favorite campaigns Section */}
      <div className="text-center my-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold pb-3">Just a few of our favorite campaigns</h2>
        <div className="flex flex-col md:flex-row justify-center items-center my-4">
          <div className="flex flex-col items-center md:items-start mr-0 md:mr-8 mb-4 md:mb-0">
            <img src ={Bluesmart} alt="Bluesmart" className="w-full md:w-1/2 object-cover" />
            <div className="text-center md:text-left mt-4">
              <h3 className='text-2xl font-semibold'>Bluesmart</h3>
              <p>10,984 Backers</p>
              <p>This smash-hit campaign almost singlehandedly invented the smart suitcase as the must-have travel accessory that it is today. With innovative features like location tracking and a built-in scale, Bluesmart went big on Block Fund before landing in stores around the world.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img src={Evapolar} alt="Evapolar" className="w-full md:w-1/2 object-cover" />
            <div className="text-center md:text-left mt-4">
              <h3 className='text-2xl font-semibold'>Evapolar</h3>
              <p>6,616 Backers</p>
              <p>The Evapolar team’s slick air conditioner is small enough to place exactly where you need it most. It even cleans and humidifies as it cools. The campaign was so successful that the team came back to Block Fund to launch the next-gen version.</p>
            </div>
          </div>
        </div>

        {/* Second row of campaigns */}
        <div className="flex flex-col md:flex-row justify-center items-center my-4">
          <div className="flex flex-col items-center md:items-start mr-0 md:mr-8 mb-4 md:mb-0">
            <img src={MisfitShine} alt="MisfitShine" className="w-full md:w-1/2 object-cover" />
            <div className="text-center md:text-left mt-4">
              <h3 className='text-2xl font-semibold'>Misfit Shine</h3>
              <p>7,957 Backers</p>
              <p>With super-smart fitness technology squeezed into a sleek, take-it-anywhere design, the Misfit Shine was a huge hit. Today it’s available in stores everywhere, but Block Fund backers were in on the action first.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img src={SuperTroopers} alt="Super Troopers 2" className="w-full md:w-1/2 object-cover" />
            <div className="text-center md:text-left mt-4">
              <h3 className='text-2xl font-semibold'>Super Troopers 2</h3>
              <p>6,616 Backers</p>
              <p>With its truly gigantic backer community, Super Troopers 2 became one of the most iconic Block Fund film projects. The team behind the project offered backers everything from movie tickets to an actual police car from the film!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready? Explore and Feeling Inspired Section */}
      <div className="text-center my-8">
        <div className="flex flex-col md:flex-row justify-center items-center my-4">
          <div className="flex flex-col items-center mr-8 mb-4 md:mb-0">
            <img src={Explore} alt="Explore" className="w-1/3 md:w-auto h-auto" />
            <h1 className='text-2xl font-bold  mb-5 md:mb-10'>Ready? Explore</h1>
            <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-bold py-2 px-4 rounded">
              Discover projects
            </button>
          </div>
          <div className="h-80 border-l border-gray-200 hidden md:block mx-6"></div>
          <div className="flex flex-col items-center">
            <img src={inspired} alt="inspired" className="w-1/3 md:w-auto h-auto" />
            <h1 className='text-2xl font-bold mt-5 mb-5 md:mt-0 md:mb-10'>Feeling Inspired?</h1>
            <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-bold py-2 px-4 rounded">
              Become an Entrepreneur
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatWeDo;

