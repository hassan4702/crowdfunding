import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";
const TopFinds = () => {
  const { address, contract, getCampaigns } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <div>
      <DisplayCampaigns
        campaigns={campaigns.filter((camp) => camp.category === "Fundraiser")}
        title="top Finds"
        isLoading={isLoading}
      />
    </div>
  );
};

export default TopFinds;
