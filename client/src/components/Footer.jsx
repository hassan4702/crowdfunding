import React from 'react';
import email from '../assets/email.png';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" py-12 bg-white dark:bg-[#1c1c24]">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap -mx-4 justify-between">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className=" font-bold mb-4">Explore</h3>
            <ul className="">
              <li className="mb-2"><a href="#">What We Do</a></li>
              <li className="mb-2"><a href="#">Funding</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className=" font-bold mb-4">About</h3>
            <ul className="">
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Trust & Safety</a></li>
              <li className="mb-2"><a href="#">Help & Support</a></li>
              <li className="mb-2"><a href="#">Press</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className=" font-bold mb-4">Entrepreneurs</h3>
            <ul className="">
              <li className="mb-2"><a href="#">How It Works</a></li>
              <li className="mb-2"><a href="#">Block Fund vs. Kickstarter</a></li>
              <li className="mb-2"><a href="#">Education Cerner</a></li>
              <li className="mb-2"><a href="#">Experts Directory</a></li>
              <li className="mb-2"><a href="#">Fees</a></li>
              <li className="mb-2"><a href="#">Enterprise</a></li>
              <li className="mb-2"><a href="#">China</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <img src={email} alt="Logo" className="w-16 mb-4 mx-auto" />
            <h4 className=" font-bold mb-2 text-center">Find it first on Block Fund</h4>
            <a href="#" className=" mb-6 block text-center">Discover new and clever products in the Block Fund newsletter</a>
            <input type="email" placeholder="Your email address" className="bg-gray-700 text-white px-4 py-2 mb-4 block w-full rounded" />
            <label className="flex mb-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-justify">I agree to the <span className='font-bold underline'><a href='#'>Terms of Use</a></span> and have read and understand the <span className='font-bold underline'><a href='#'>Privacy Policy</a></span></span>
            </label>
            <button className="bg-[#8c6dfd] px-6 py-3 rounded hover:bg-[#7359d3] transition-colors w-full">Sign Me Up</button>
          </div>
        </div>

        {/* Social icons and currency selection */}
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
          <div className='flex'>
            <a href='#' className='text-[24px] hover:text-[#8c6dfd] lg:mr-6 md:mr-6 mr-2 mt-3'><FaInstagram /></a>
            <a href='#' className='text-[24px] hover:text-[#8c6dfd] lg:mr-6 md:mr-6 mr-2 mt-3'><FaFacebook /></a>
            <a href='#' className='text-[24px] hover:text-[#8c6dfd] lg:mr-6 md:mr-6 mr-2 mt-3'><FaTwitter /></a>
            <a href='#' className='text-[24px] hover:text-[#8c6dfd] lg:mr-6 md:mr-6 mr-2 mt-3'><FaLinkedin /></a>
            <a href='#' className='text-[24px] hover:text-[#8c6dfd] lg:mr-6 md:mr-6 mr-2 mt-3'><FaYoutube /></a>
            <a href='#' className='text-[24px] hover:text-[#8c6dfd] lg:mr-6 md:mr-6 mr-2 mt-3'><FaShopify /></a>
          </div>
        </div>

        <hr className="border-gray-700 my-8" /> 
        <div class=" text-center text-sm">
          <ul class="flex flex-col sm:flex-row justify-center sm:justify-center sm:flex-wrap">
            <li class="mr-4 mb-2 sm:mb-0"><a href="#">Term of Use</a></li>
            <li class="mr-4 mb-2 sm:mb-0"><a href="#">Privacy Policy</a></li>
            <li class="mr-4 mb-2 sm:mb-0"><a href="#">Cookie Policy</a></li>
            <li class="mr-4 mb-2 sm:mb-0"><a href="#">Do Not Sell My Personal Information</a></li>
            <li class="mr-4 mb-2 sm:mb-0"><a href="#">Accessibility</a></li>
          </ul>
          <p>&copy; 2024 Block Fund. Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
