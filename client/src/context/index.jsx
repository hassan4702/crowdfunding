import React, { useContext, createContext } from "react";
import { abi } from "../abis/contractAbi.json";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xc498F9710257C20D12b41Ab4d73F9d651FE269f3"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign({
        args: [
          address, // owner
          form.title, // title
          form.category, // category
          form.email, // email
          form.description, // description
          form.target,
          new Date(form.deadline).getTime(), // deadline,
          form.image,
          form.faqs,
          form.packages,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };
  const updateCampaign = async (form) => {
    try {
      const data = await contract.call("updateCampaign", [
        form.id, // campaign id
        form.title, // title
        form.category,
        form.email, // email
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image,
        form.faqs,
        form.packages,
      ]);
      toast.success("Campaign updated successfully.");
      console.log("contract call success", data);
    } catch (error) {
      toast.error("Error while creating Campaign, please try again");
      console.log("contract call failure", error);
    }
  };

  const deleteCampaign = async (pId) => {
    try {
      const data = await contract.call("deleteCampaign", [pId]);

      toast.success("Campaign deleted successfully.");
      console.log("contract call success", data);
      return data;
    } catch (error) {
      toast.error("Error while deleting Campaign, please try again");
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");
    console.log("campaigns", campaigns);
    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      category: campaign.category,
      email: campaign.email,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
      faqs: campaign.faqs,
      packages: campaign.packages,
    }));

    return parsedCampaings;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    try {
      const data = await contract.call("donateToCampaign", [pId], {
        value: ethers.utils.parseEther(amount),
      });
      return data;
    } catch (err) {
      console.log("Error occured while making donation", err);
    }
  };

  const payOutToCampaignTeam = async (pId) => {
    try {
      const data = await contract.call("payOutToCampaignTeam", [pId]);
      toast.success("Campaign funds successfully withdrawed.");
      return data;
    } catch (err) {
      toast.error("Error occured while withdrawing funds.");
      console.log("Error occured while withdrawing funds", err);
    }
  };
  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  const getNumberOfCampaignsDonatedTo = async (donatorAddress) => {
    const allCampaigns = await getCampaigns();
    let donationCount = 0;

    for (const campaign of allCampaigns) {
      const donations = await getDonations(campaign.pId);
      const hasDonated = donations.some(
        (donation) =>
          donation.donator.toLowerCase() === donatorAddress.toLowerCase()
      );
      if (hasDonated) {
        donationCount++;
      }
    }

    return donationCount;
  };
  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        payOutToCampaignTeam,
        updateCampaign,
        deleteCampaign,
        getNumberOfCampaignsDonatedTo,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
