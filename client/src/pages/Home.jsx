import React, { useState, useEffect } from "react";
import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CategoriesComponent from "../components/CategoriesComponent";
import ImageGallery from "../components/ImageGallery";
import BacktheProject from "../components/BacktheProject";
import Upload from "../components/IPFSupload";
const Home = () => {
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
    <>
      {/* <Upload/> */}
      {/* <TermsOfUse /> */}
      <Carousel />
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns.filter((campaign) => {
          // Check if campaign object is not empty
          return (
            campaign.owner !== "0x0000000000000000000000000000000000000000"
            
          );
        })}
      />
      <ImageGallery />
      <BacktheProject />
      <CategoriesComponent />
      <Footer />
    </>
  );
};

export default Home;
