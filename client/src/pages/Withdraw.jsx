import React from "react";
import ExploreProjects from "./ExploreProjects";

const Withdraw = () => {
  
  // Filter function to check if the campaign has fulfilled its Ethereum goal
  const filterFulfilledCampaigns = (campaign) => {
    return parseFloat(campaign.amountCollected) == parseFloat(campaign.target);
  };

  return (
    <>
      {/* <div className="">
        <h1>All Fulfilled Campaigns</h1>
      </div> */}
      <ExploreProjects filter={filterFulfilledCampaigns} />
    </>
  );
};

export default Withdraw;
