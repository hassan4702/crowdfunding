import React from "react";
import { useNavigate } from 'react-router-dom';
import ReadyToGo from '../components/ReadyToGo';
import HowItWork from '../assets/HowItWork.jpg';
import Footer from '../components/Footer';
import WORLDWIDE from '../assets/WORLDWIDE.png';
const HowItWorks = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="px-4 sm:px-6 lg:px-8 pt-12">
                <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-1">Dream it. Fund it. Make it. Ship it.</h1>
                <h1 className="text-2xl lg:text-3xl font-semibold text-center">We help at every step from concept to market.</h1>
            </div>

            <div className="relative mt-10">
                <img src={HowItWork} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-2 object-cover rounded-[15px]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white ">
                            How It Works?
                        </h1>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col items-center justify-center mb-20">
                <p className="text-center">Find Block Fund-vetted companies to help you launch your campaign and take your product to market.</p>
                <button className="bg-[#8c6dfd] text-white py-2 px-4 rounded mt-2 font-semibold" onClick={() => navigate("/FindExperts")}>FIND EXPERTS</button>
            </div> */}

            {/* <div className="bg-white dark:bg-[#2c2f32] shadow-lg rounded-lg p-10">
                <div className="px-4 sm:px-6 lg:px-8 pb-8">
                    <h1 className="text-2xl  lg:text-3xl font-semibold text-center mb-1">All the Right Experts to Help Your Business</h1>
                </div>
                <Experts />
            </div> */}

            <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto mt-20">
                <img src={WORLDWIDE} alt="WORLDWIDE" className="w-1/4 mb-4 md:mb-0" />
                <div className="text-center md:text-left md:pl-8">
                    <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">FLEXIBILITY & WORLDWIDE REACH</h2>
                    <p className="text-3xl font-bold pb-3">Freedom to raise funding for anything and from everywhere</p>
                </div>
            </div>
            <div className="text-center my-8 max-w-3xl mx-auto">
                <p className="text-justify text-lg pb-8">Block Fund embodies flexibility and global reach, granting creators the freedom to raise funds for any project from anywhere in the world. Whether you're launching a local initiative or targeting a global audience, our platform empowers you to harness the power of crowdfunding without limitations. With seamless access to a diverse pool of backers and a borderless approach to fundraising, Block Fund enables you to realize your vision on a truly international scale, breaking down barriers and unlocking opportunities for success.</p>
            </div>

            <div className="bg-white dark:bg-[#2c2f32] shadow-lg rounded-lg mb-20">
                <div className="px-4 sm:px-6 lg:px-48 py-12 ">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-1">Ready to Go?</h1>
                    <p className="text-center text-lg ">You're only a step away from kicking off your entrepreneurial adventure on Block Fund. Here's where to go next:</p>
                </div>
                <ReadyToGo />
            </div>
            <Footer />
        </>
    )
}
export default HowItWorks;