// import React, { useEffect, useState } from "react";
// import { useStateContext } from "../context";
// import { AllCampaigns } from "../components";
// const TopFinds = () => {
//   const { address, contract, getCampaigns } = useStateContext();
//   const [isLoading, setIsLoading] = useState(false);
//   const [campaigns, setCampaigns] = useState([]);
//   const fetchCampaigns = async () => {
//     setIsLoading(true);
//     const data = await getCampaigns();
//     setCampaigns(data);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     if (contract) fetchCampaigns();
//   }, [address, contract]);
//   return (
//     <div>
//       <AllCampaigns
//         campaigns={campaigns.filter((camp) => camp.category === "Fundraiser")}
//         title="top Finds"
//         isLoading={isLoading}
//       />
//     </div>
//   );
// };

// export default TopFinds;



import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { AllCampaigns, Loader } from '../components';
import { useNavigate } from 'react-router-dom';

const TopFinds = () => {
  const { contract, getCampaigns } = useStateContext();
  const navigate = useNavigate(); 

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true); 
    const data = await getCampaigns(); 

    // Sort campaigns by goal in descending order and select the top 10
    const sortedCampaigns = (data || [])
      .filter(campaign => campaign.category === 'Fundraiser')
      .sort((a, b) => b.goal - a.goal)
      .slice(0, 10);

    setCampaigns(sortedCampaigns); 
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
      <h1 className="text-2xl font-bold mb-6 text-center">10 Cool & Clever Finds</h1>
      <div className="flex"> 
        {campaigns.length === 0 ? (
          <div>No campaigns found.</div> 
        ) : (
          <AllCampaigns campaigns={campaigns} />
        )}
      </div>
    </div>
  );
};

export default TopFinds;