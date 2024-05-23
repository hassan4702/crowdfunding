import React from 'react';
import { useNavigate } from 'react-router-dom';
import game from '../assets/game.png';
import cycle from '../assets/cycle.png';

const BacktheProject = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row items-center justify-center my-20 px-1 bg-white dark:bg-[#1c1c24]">
            <div className="w-full md:w-1/4 flex md:mb-0 justify-center">
                <img src={game} alt="Left Image" className="w-64 h-[25rem]" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
                <div className="text-center md:text-left">
                    <a href="#" className="text-3xl font-semibold mb-8">
                        Back the Project, take the ride
                    </a>
                </div>
                <p className="text-justify text-md pt-8 px-2">Block Fund is your destination for clever innovation in tech, design and more often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the rewards of bringing new products to life.</p>
                <div className='hover:text-[#808191] text-md block text-center mt-4 md:text-left cursor-pointer'><a href='/WhatWeDo'>LEARN ABOUT CROWDFUNDING</a></div>
            </div>
            <div className="w-full md:w-1/4 flex lg:justify-end md:justify-end justify-center mt-6 md:mt-0">
                <img src={cycle} alt="Right Image" className="w-64 h-[25rem]" />
            </div>
        </div>
    )
}

export default BacktheProject;
