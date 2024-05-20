import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
import ExploreProject from "../assets/ExploreProject.jpg";
import FundCard from "../components/FundCard";

const ExploreProjects = () => {
  const { contract, getCampaigns } = useStateContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [contract]);

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
<<<<<<< Updated upstream
      <div className="relative">
        <img src={ExploreProject} alt="Explore Projects" className="w-full lg:h-[20rem] h-[18rem] object-cover mb-6" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white">
              Block Fund Campaigns
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
=======

      <h1 className="lg:text-5xl font-semibold text-center mb-20 mt-14">Block Fund Campaigns</h1>

      <div className="flex flex-wrap gap-8 justify-center"> 
>>>>>>> Stashed changes
        {campaigns.length === 0 ? (
          <div>No campaigns found.</div>
        ) : (
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreProjects;
