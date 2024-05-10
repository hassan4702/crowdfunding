import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { Loader } from '../components';
import { useNavigate } from 'react-router-dom';

const ArtsAndCulture = () => {
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
      <h1 className="text-2xl font-bold mb-6 text-center">Arts And Culture</h1>
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
              <h3 className="text-lg font-semibold px-3 mt-4">{campaign.title}</h3>
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

export default ArtsAndCulture;
