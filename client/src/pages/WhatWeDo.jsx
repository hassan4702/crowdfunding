import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bluesmart from '../assets/Bluesmart.png';
import Evapolar from '../assets/Evapolar.png';
import Explore from '../assets/Explore.png';
import GetTheTech from '../assets/GetTheTech.png';
import inspired from '../assets/inspired.png';
import perk from '../assets/perk.png';
import SuperTroopers from '../assets/SuperTroopers.png';
import MisfitShine from '../assets/MisfitShine.png';
import Journey from '../assets/Journey.png';
import Footer from '../components/Footer';
const WhatWeDo = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex flex-col items-center justify-center mb-10">

      {/* Tech Image Section */}
        <div className="relative">
            <img src={GetTheTech} alt="Tech Image" className="md:w-full lg:w-screen h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold pb-3 text-[#8c6dfd]">
                        Get the tech that gets people talking
                    </h1>
                    <p className="font-bold text-[#8c6dfd]">With both live crowdfunding campaigns and innovative products shipping now, there’s no better place to start the hunt for cool and clever innovations that surprise and delight. Block Fund is where new launches.</p>
                </div>
            </div>
        </div>


      {/* Fund the next big thing Section */}
      <div className="text-center my-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold pb-3">Fund the next big thing</h2>
        <p className='text-justify'>Block Fund's crowdfunding campaigns are where new and groundbreaking products take flight, sometimes long before they hit mainstream availability. With thousands of campaigns launching every week, there's great tech, design, and much more around every corner — often with limited-time perks and pricing for the earliest backers. Before it's everywhere, it's on Block Fund.</p>
      </div>

      {/* Join the journey from idea to market Section */}
      <div className="text-center my-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold pb-10">Join the journey from idea to market</h2>
        <div className="flex justify-center ">
         <img src={Journey} alt="Journey" className="object-contain h-auto max-w-full" />
       </div>
        <p className='text-justify pt-8'>With Block Fund, you have the opportunity to support entrepreneurs and new technology from the earliest stages of development. Be sure to evaluate every campaign closely and contribute at a level you can afford in the event that the team is unable to complete the project as planned.</p>
        <p className='text-justify'>Browse campaigns, read the stories from the entrepreneurs themselves, evaluate the stage of development and any potential production risks — and then fund the projects that you want to help succeed.</p>
        <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded mt-4 mb-4 text-white" onClick={() => navigate("/ExploreProjects")}>
          Explore Projects
        </button>
        <p className='text-center'>Or <span className='text-[#808191] cursor-pointer' onClick={() => navigate("/Crowdfunding")}>learn more</span> about crowdfunding and your role as a backer.</p>
      </div>

      {/* Great finds, delivered daily Section */}
      <div className="text-center my-8 mx-auto bg-white dark:bg-[#1c1c24] py-20 w-full">
        <h2 className="text-2xl font-bold pb-3">Great finds, delivered daily</h2>
        <div className='max-w-3xl lg:mx-auto px-4'><p >We surface the best and brightest of Block Fund in our newsletter. Find out about great technology, design, film, and much more — all before it hits the mainstream.</p></div>
        
        <div className="flex flex-col md:flex-row justify-center items-center my-4">
          <input
            type="email"
            placeholder="Enter your email"
            className=" outline-none px-4 py-2 rounded-l mb-2 md:mb-0 md:mr-2 bg-[#dad6d6] dark:bg-[#0e0e11]"
          />
          <button className="bg-[#8c6dfd] hover:bg-[#9691aa] text-white font-semibold py-2 px-4 rounded-r ml-0 md:ml-2">
            Subscribe
          </button>
        </div>
        <label className="flex flex-col md:flex-row items-center justify-center px-4">
          <input type="checkbox" className="form-checkbox mr-2" />
          <span className="mb-2 md:mb-0 justify-center ">
            I agree to the <span className="text-[#8c6dfd] cursor-pointer" onClick={() => navigate("/TermsOfUse")}>Terms of Use</span> and have read and understand the <span className="text-[#8c6dfd] cursor-pointer" onClick={() => navigate("/PrivacyPolicy")}>Privacy Policy.</span> 
          </span>
        </label>
      </div>

      {/* What is a perk Section */}
      <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-6xl mx-auto pt-10">
        <img src={perk} alt="perk" className="w-96 h-86 object-contain rounded-lg" />
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-2xl font-bold pb-3">What is a perk?</h2>
          <p className="lg:pr-10">A perk is a reward or incentive offered by campaign owners to backers who contribute to their project. Perks can range from tangible items, like merchandise or limited-edition products, to intangible benefits, such as exclusive access, digital downloads, or personalized experiences. They are used to attract and encourage support from potential backers.</p>
        </div>
      </div>


      {/* Just a few of our favorite campaigns Section */}
      <div className="text-center my-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold pb-3">Just a few of our favorite campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="m-auto">
              <img src={Bluesmart} alt="Bluesmart" className="w-full object-cover md:w-3/4" />
            </div>
            <div className="text-center md:text-left mt-4 mx-2">
              <h3 className="text-2xl font-semibold">Bluesmart</h3>
              <p>10,984 Backers</p>
              <p className="text-justify">
               This smash-hit campaign almost singlehandedly invented the smart suitcase as the must-have
                travel accessory that it is today. With innovative features like location tracking and a
                built-in scale, Bluesmart went big on Block Fund before landing in stores around the world.
             </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="m-auto">
              <img src={Evapolar} alt="Evapolar" className="w-full object-cover md:w-3/4" />
            </div>
            <div className="text-center md:text-left mt-4 mx-2">
              <h3 className="text-2xl font-semibold">Evapolar</h3>
              <p>6,616 Backers</p>
              <p className="text-justify">
                The Evapolar team's slick air conditioner is small enough to place exactly where you need
                it most. It even cleans and humidifies as it cools. The campaign was so successful that
                the team came back to Block Fund to launch the next-gen version.
              </p>
            </div>
         </div>

          <div className="flex flex-col items-center md:items-start">
            <div class="m-auto">
              <img src={MisfitShine} alt="Misfit Shine" className="w-full object-cover md:w-3/4" />
            </div>
            <div className="text-center md:text-left mt-4 mx-2">
              <h3 className="text-2xl font-semibold">Misfit Shine</h3>
              <p>7,957 Backers</p>
              <p className="text-justify">
                With super-smart fitness technology squeezed into a sleek, take-it-anywhere design, the
                Misfit Shine was a huge hit. Today it's available in stores everywhere, but Block Fund
                backers were in on the action first.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div class="m-auto">
             <img src={SuperTroopers} alt="Super Troopers 2" className="w-full object-cover md:w-3/4" />
            </div>
            <div className="text-center md:text-left mt-4 mx-2">
              <h3 className="text-2xl font-semibold">Super Troopers 2</h3>
              <p>6,616 Backers</p>
              <p className="text-justify">
                With its truly gigantic backer community, Super Troopers 2 became one of the most iconic
                Block Fund film projects. The team behind the project offered backers everything from movie
                tickets to an actual police car from the film!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready? Explore and Feeling Inspired Section */}
     <div className="text-center lg:my-8">
        <div className="flex flex-col lg:flex-row justify-center items-center my-4">
          <div className="flex flex-col items-center lg:mr-56 mb-10 md:mb-0">
            <img
              src={Explore}
              alt="Explore"
              className="w-24 md:w-32 h-auto object-cover"
            />
            <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">Ready? Explore</h1>
            <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded" onClick={() => navigate("/ExploreProjects")}>
              Discover projects
            </button>
          </div>

          <div className="hidden lg:block lg:h-80 border-l border-gray-400 mx-6"></div>
          <div className="block lg:hidden w-96 border-t border-gray-400 my-20"></div>

          <div className="flex flex-col items-center lg:ml-56 mb-4 md:mb-0 ">
            <img
              src={inspired}
              alt="Inspired"
              className="w-24 md:w-32 h-auto object-cover"
            />
            <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">Feeling Inspired?</h1>
            <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded">
              Become an Entrepreneur
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default WhatWeDo;

