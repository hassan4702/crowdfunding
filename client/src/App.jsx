import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import AllCampaigns from "./components/AllCampaigns";
import UpdateCampaign from "./pages/UpdateCampaign";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import TopFinds from "./pages/TopFinds";
import HowItWorks from "./pages/HowItWorks";
import HelpAndSupport from "./pages/HelpAndSupport";
import FindExperts from "./pages/FindExperts";
import Contact from "./pages/Contact";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import BlockFundVsKickstarter from "./pages/BlockFundVsKickstarter";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Crowdfunding from "./pages/Crowdfunding";
import TrustAndSafety from "./pages/TrustAndSafety";
import ExploreProjects from "./pages/ExploreProjects";
import Memorial from "./pages/Memorial";
import Competition from "./pages/Competition";
import PrototypingandProduction from "./pages/PrototypingandProduction";
import CreativeServices from "./pages/CreativeServices";
import Fulfillment from "./pages/Fulfillment";
import HelpDetails from "./pages/HelpDetails";
import {
  EducationCampaigns,
  TravelAndOutdoors,
  Technology,
  SocialImpact,
  HealthAndFitness,
  ArtsAndCulture,
} from "./pages";
import EducationCenter from "./pages/EducationCenter";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative sm:-8 p-4 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1780px] mx-auto sm:pr-5">
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/campaign-update/:id" element={<UpdateCampaign />} />
          <Route path="/about" element={<About />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/topfinds" element={<TopFinds />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
          <Route path="/FindExperts" element={<FindExperts />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/communityGuidelines" element={<CommunityGuidelines />} />
          <Route path="/blockFundVskickstarter" element={<BlockFundVsKickstarter />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/TrustAndSafety" element={<TrustAndSafety />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Crowdfunding" element={<Crowdfunding />} />
          <Route path="/EducationCampaigns" element={<EducationCampaigns />} />
          <Route path="/TravelAndOutdoors" element={<TravelAndOutdoors />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/SocialImpact" element={<SocialImpact />} />
          <Route path="/HealthAndFitness" element={<HealthAndFitness />} />
          <Route path="/ArtsAndCulture" element={<ArtsAndCulture />} />
          <Route path="/ExploreProjects" element={<ExploreProjects searchQuery={searchQuery} />} />
          <Route path="/AllCampaigns" element={<AllCampaigns />} />
          <Route path="/Memorial" element={<Memorial />} />
          <Route path="/Competition" element={<Competition />} />
          <Route path="/PrototypingandProduction" element={<PrototypingandProduction />} />
          <Route path="/CreativeServices" element={<CreativeServices />} />
          <Route path="/Fulfillment" element={<Fulfillment />} />
          <Route path="/HelpDetails" element={<HelpDetails />} />
          <Route path="/EducationCenter" element={<EducationCenter />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
