
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FundCard from './FundCard';
import { loader } from '../assets';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';


const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const extralargeScreenSize = 5; // For large screens
  const largeScreenSize = 4; // For large screens
  const mediumScreenSize = 3; // For medium screens
  const smallScreenSize = 2; // For small screens
  const extrasmallScreenSize = 1;

  const getPageSize = () => {

    const width = window.innerWidth;
    if (width >= 1400) {
      return extralargeScreenSize;}
    else if (width >= 1200) {
      return largeScreenSize;
    } else if (width >= 1010) {
      return mediumScreenSize;
    } else if (width >= 750) {
      return smallScreenSize;
    } else {
      return extrasmallScreenSize;
    }
  };

  const [pageSize, setPageSize] = useState(getPageSize());

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + pageSize < campaigns.length) {
      setStartIndex(startIndex + pageSize);
    }
  };

  const handlePrevious = () => {
    if (startIndex - pageSize >= 0) {
      setStartIndex(startIndex - pageSize);
    }
  };

  const displayedCampaigns = campaigns.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(campaigns.length / pageSize);
  const currentPage = startIndex / pageSize;

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className="font-epilogue font-semibold text-[18px] my-10 text-left">{title}</h1>
        <h1 
          className="font-epilogue font-semibold text-[18px] my-10 text-left cursor-pointer flex items-center" 
          onClick={() => navigate("/ExploreProjects")}
        >
          All Campaigns
          <HiArrowRight style={{ transform: 'rotate(-45deg)', marginleft: '4px' }} />
        </h1>
      </div>

      <div className="flex justify-between items-center mt-[10px]">
        <button
          className="text-[10px] text-gray-400 dark:text-gray-600 hover:text-black p-2 mr-1 bg-white dark:bg-[#1c1c24] rounded-full"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="flex flex-wrap justify-center gap-[24px] w-full overflow-x-hidden">
          {isLoading ? (
            <img src={loader} alt="Loading" className="w-[100px] h-[100px]" />
          ) : campaigns.length === 0 ? (
            <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
              No campaigns available.
            </p>
          ) : (
            displayedCampaigns.map((campaign) => (
              <FundCard
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))
          )}
        </div>

        <button
          className="text-[10px] text-gray-400 dark:text-gray-600 hover:text-black p-2 ml-1 bg-white dark:bg-[#1c1c24] rounded-full"
          onClick={handleNext}
          disabled={startIndex + pageSize >= campaigns.length}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center mt-[14px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full mx-[5px] cursor-pointer ${
              index === currentPage ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setStartIndex(index * pageSize)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
