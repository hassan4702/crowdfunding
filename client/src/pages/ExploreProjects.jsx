import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
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
      <h1 className="text-5xl lg:text-5xl font-semibold text-center mt-6 mb-20">Block Fund Campaigns</h1>
      <div className="flex flex-wrap gap-8 justify-center">
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
