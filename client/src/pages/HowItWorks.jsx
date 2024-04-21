import React from "react";
import Carousel from '../components/Carousel';
import HowItWorksCard from '../components/HowItWorksCard';
import Experts from '../components/Experts';
import ReadyToGo from '../components/ReadyToGo';
import HowItWork from '../assets/HowItWork.jpg';
const HowItWorks = () => {
    return(
        <>
            <Carousel />
            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center mb-1">Dream it. Fund it. Make it. Ship it.</h1>
                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center">We help at every step from concept to market.</h1>
            </div>
            <HowItWorksCard />

            <div className="relative mt-10">
                <img src={HowItWork} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-2 object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white ">
                            Explore the Experts Directory
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mb-10">
                <p className="text-center">Find Block Fund-vetted companies to help you launch your campaign and take your product to market.</p>
                <button className="bg-[#8c6dfd] text-white py-2 px-4 rounded mt-2 font-bold">FIND EXPERTS</button>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center mb-1">All the Right Experts to Help Your Business</h1>
            </div>

            <Experts />

            <div className="px-4 sm:px-6 lg:px-48 py-12 ">
                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center mb-1">Ready to Go?</h1>
                <p className="text-center text-lg ">You're only a step away from kicking off your entrepreneurial adventure on Block Fund. Here's where to go next:</p>
            </div>

            <ReadyToGo />
        </>
    )
}
export default HowItWorks;