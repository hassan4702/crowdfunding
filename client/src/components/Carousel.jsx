import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useStateContext } from '../context';

const Carousel = ({ autoPlayInterval = 5000 }) => {
  const { contract, getCampaigns } = useStateContext();

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState(1);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data || []); 
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns(); 
  }, [contract]);

  useEffect(() => {
    if (campaigns.length > 0) { 
      const interval = setInterval(() => {
        handleNext(); 
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [currentCampaign, autoPlayInterval, campaigns.length]);

  const handleNext = () => {
    if (campaigns.length > 0) {
      setCurrentCampaign((currentCampaign + 1) % campaigns.length); 
    }
  };

  const handlePrev = () => {
    if (campaigns.length > 0) {
      setCurrentCampaign((currentCampaign - 1 + campaigns.length) % campaigns.length);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (campaigns.length === 0) {
    return <div>No campaigns available.</div>;
  }

  const currentData = campaigns[currentCampaign];
  if (!currentData) {
    return <div>Error: No campaign found.</div>; 
  }

  const { image, title, description } = currentData;

  // Set a maximum description length and adjust it based on screen size
  const maxDescriptionLength = {
    sm: 50, // Small devices (mobile)
    md: 75, // Medium devices (tablet)
    lg: 100, // Large devices (desktop)
  };

  const getDescriptionSnippet = () => {
    const windowWidth = window.innerWidth;
    let maxLength = maxDescriptionLength.sm;

    if (windowWidth >= 800) {
      maxLength = maxDescriptionLength.md;
    }
    if (windowWidth >= 1024) {
      maxLength = maxDescriptionLength.lg;
    }

    return description ? description.slice(0, maxLength) + '...' : '';
  };

  return (
    <div className="relative w-full lg:h-[35rem] md:h-[28rem] h-[22rem]">
      <div className="overflow-hidden rounded-lg w-full h-full">
        <img
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-16 lg:bottom-4  left-4  text-white bg-black bg-opacity-50 p-2 rounded">
        <h3 className="font-bold text-sm md:text-lg lg:text-xl">{title}</h3>
        <p className="text-xs md:text-sm lg:text-base">{getDescriptionSnippet()}</p> 
      </div>

      <div className="absolute bottom-4 right-4 flex flex-row gap-1">
        <button
          className="text-[24px] text-gray-400 hover:text-black p-2 bg-white dark:bg-[#1c1c24] dark:bg-opacity-50 dark:text-white rounded-full"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>

        <button
          className="text-[24px] text-gray-400 hover:text-black p-2 bg-white dark:bg-[#1c1c24] dark:bg-opacity-50 dark:text-white rounded-full"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
