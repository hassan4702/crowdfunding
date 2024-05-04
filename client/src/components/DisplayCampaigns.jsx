import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FundCard from './FundCard';
import { loader } from '../assets';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 


const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  
  const largeScreenSize = 3; // 3 cards for large screens
  const mediumScreenSize = 2; // 2 cards for medium screens
  const smallScreenSize = 1; // 1 card for small screens

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  const getPageSize = () => {
    const width = window.innerWidth;
    if (width >= 1200) { // Large screens
      return largeScreenSize;
    } else if (width >= 900) { // Medium screens
      return mediumScreenSize;
    } else { // Small screens
      return smallScreenSize;
    }
  };

  const [pageSize, setPageSize] = useState(getPageSize());
  React.useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] mt-5 text-left">
        Recent Finds
      </h1>

      <div className="flex items-center justify-between mt-[20px]">
        <button
          className="text-[34px] text-gray-400 dark:text-gray-600 hover:text-black p-2 mr-4 bg-white dark:bg-[#1c1c24] rounded-full"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="flex flex-wrap justify-center gap-[26px] w-[90%] overflow-x-hidden">
          {isLoading ? (
            <img src={loader} alt="loader" className="w-[100px] h-[100px] object-cover" />
          ) : campaigns.length === 0 ? (
            <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
              You have not created any campaigns yet.
            </p>
          ) : (
            displayedCampaigns.map((campaign) => (
              <FundCard
                key={uuidv4()}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))
          )}
        </div>

        <button
          className="text-[34px] text-gray-400 dark:text-gray-600 hover:text-black p-2 ml-4 bg-white dark:bg-[#1c1c24] rounded-full"
          onClick={handleNext}
          disabled={startIndex + pageSize >= campaigns.length}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default DisplayCampaigns;