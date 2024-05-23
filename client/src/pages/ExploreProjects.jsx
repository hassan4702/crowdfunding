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
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    if (data) {
      const filteredData = data.filter(
        (campaign) =>
          campaign.owner !== "0x0000000000000000000000000000000000000000"
      );
      const sortedData = filteredData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setCampaigns(sortedData);
      setSortedCampaigns(sortedData);
    } else {
      setCampaigns([]);
      setSortedCampaigns([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [contract]);

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  const handleSort = (criteria) => {
    let sortedData;
    switch (criteria) {
      case "asc":
        sortedData = [...campaigns].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "dsc":
        sortedData = [...campaigns].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "deadline":
        sortedData = [...campaigns].sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        break;
      case "new":
        sortedData = [...campaigns].sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );
        break;
      case "close":
        sortedData = [...campaigns].sort(
          (a, b) =>
            b.amountRaised / b.goalAmount - a.amountRaised / a.goalAmount
        );
        break;
      default:
        sortedData = campaigns;
    }
    setSortedCampaigns(sortedData);
    setDropdownOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h1 className="text-5xl lg:text-5xl font-semibold text-center mt-6 mb-20">
        Block Fund Campaigns
      </h1>
      <div className="flex justify-end items-end  flex-row relative mb-4">
        <button
          className=" p-2 bg-blue-500 text-white rounded"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Filter Campaigns
        </button>
        {dropdownOpen && (
          <ul className="absolute bg-white border mt-2 p-2 rounded shadow-lg text-black dark:text-black">
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSort("asc")}
            >
              Asc Sort (Title)
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSort("dsc")}
            >
              Dsc Sort (Title)
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSort("deadline")}
            >
              About to End
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSort("new")}
            >
              New Campaigns
            </li>
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSort("close")}
            >
              Close to Goal
            </li>
          </ul>
        )}
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {sortedCampaigns.length === 0 ? (
          <div>No campaigns found.</div>
        ) : (
          sortedCampaigns.map((campaign) => (
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
