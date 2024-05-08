import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { Loader } from '../components';
import { useNavigate } from 'react-router-dom';
import ExploreProject from '../assets/ExploreProject.jpg';

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

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <div className="p-6">
      <div className="relative">
        <img src={ExploreProject} alt="Help" className="w-full lg:h-96 h-[20rem] object-cover mb-6" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white">
              Block Fund Campaigns
            </h1>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"> 
        {campaigns.length === 0 ? (
          <div>No campaigns found.</div> 
        ) : (
          campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white dark:bg-[#1c1c24] pb-6 rounded-[15px] shadow-lg">
              <img
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-[15px]"
              />
              <h3 className="text-xl font-bold px-3 mt-4">{campaign.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 px-3">
                {campaign.description.slice(0, 20) + '...'}
              </p>
              <a
                href={`/campaign/${campaign.id}`}
                className="mt-4 bg-[#8c6dfd] text-white py-2 px-4 mx-3 rounded-lg hover:bg-[#8062eb] block text-center"
                onClick={(e) => {
                  e.preventDefault(); 
                  navigate(`/campaign-details/${campaign.title}`, { state: campaign }); 
                }}
              >
                View Campaign
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreProjects;
