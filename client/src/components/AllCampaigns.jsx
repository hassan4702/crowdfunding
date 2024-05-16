import React from 'react';
import { useNavigate } from 'react-router-dom';
import FundCard from './FundCard';
import { loader } from '../assets';

const AllCampaigns = ({ isLoading, campaigns = [] }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-8 justify-center">
        {isLoading ? (
          <img src={loader} alt="Loading" className="w-16 h-16" />
        ) : campaigns.length === 0 ? (
          <p className="font-epilogue font-semibold text-sm leading-5 text-[#818183]">
            No campaigns available.
          </p>
        ) : (
          campaigns.map((campaign) => (
            campaign.image && (
              <FundCard
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            )
          ))
        )}
      </div>
    </div>
  );
};

export default AllCampaigns;
