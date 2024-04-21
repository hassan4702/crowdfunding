import React from 'react';
import game from '../assets/game.png';
import cycle from '../assets/cycle.png';

const BacktheProject = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-20 px-1">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
                <img src={game} alt="Left Image" className="w-40 h-auto mb-4" />
            </div>
            <div className="w-full md:w-1/3 md:pl-8">
                <div className="text-center md:text-left">
                    <a href="#" className="text-3xl font-semibold mb-2">
                        Back the Project, take the ride
                    </a>
                </div>
                <p className="text-justify text-sm">Block Fund is your destination for clever innovation in tech, design and more often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the rewards of bringing new products to life.</p>
                <a href='#' className='hover:text-[#808191] text-sm block text-center mt-4 md:text-left'>LEARN ABOUT CROWDFUNDING</a>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center mt-6 md:mt-0">
                <img src={cycle} alt="Right Image" className="w-40 h-auto" />
            </div>
        </div>
    )
}

export default BacktheProject;
