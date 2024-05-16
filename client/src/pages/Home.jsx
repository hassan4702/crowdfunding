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
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns_topt = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    console.log(data.title);

    setCampaigns(data);
    setIsLoading(false);
  };

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
    console.log(
      campaigns.filter((camp) => camp.title === "hope Village for the poor")
    );
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
        campaigns={campaigns}
      />
      <ImageGallery />
      <BacktheProject />
      <CategoriesComponent />
      <Footer />
    </>
  );
};

export default Home;
