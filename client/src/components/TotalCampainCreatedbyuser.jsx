import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
const TotalCampainCreatedbyuser = ({ ownerAddress }) => {
  const { address, contract, getCampaigns } = useStateContext();

  const [campaigns, setCampaigns] = useState([]);
  const fetchCampaigns = async () => {
    const data = await getCampaigns();
    setCampaigns(data);
  };
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  const getTotalCampaignsByOwner = (owneraddress) => {
    return campaigns.filter((campaign) => campaign.owner === owneraddress)
      .length;
  };
  return (
    <div>
      <p> {getTotalCampaignsByOwner(ownerAddress)} Campaign(s)</p>
    </div>
  );
};

export default TotalCampainCreatedbyuser;
