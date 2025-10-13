import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Navbar } from "./components";

// Route-level code splitting with React.lazy
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const CreateCampaign = lazy(() => import("./pages/CreateCampaign"));
const CampaignDetails = lazy(() => import("./pages/CampaignDetails"));
const UpdateCampaign = lazy(() => import("./pages/UpdateCampaign"));
const About = lazy(() => import("./pages/About"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const TopFinds = lazy(() => import("./pages/TopFinds"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const HelpAndSupport = lazy(() => import("./pages/HelpAndSupport"));
const Contact = lazy(() => import("./pages/Contact"));
const CommunityGuidelines = lazy(() => import("./pages/CommunityGuidelines"));
const BlockFundVsKickstarter = lazy(() => import("./pages/BlockFundVsKickstarter"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Crowdfunding = lazy(() => import("./pages/Crowdfunding"));
const TrustAndSafety = lazy(() => import("./pages/TrustAndSafety"));
const ExploreProjects = lazy(() => import("./pages/ExploreProjects"));
const Memorial = lazy(() => import("./pages/Memorial"));
const Competition = lazy(() => import("./pages/Competition"));
const PrototypingandProduction = lazy(() => import("./pages/PrototypingandProduction"));
const CreativeServices = lazy(() => import("./pages/CreativeServices"));
const Fulfillment = lazy(() => import("./pages/Fulfillment"));
const SearchCampaigns = lazy(() => import("./pages/SearchCampaigns"));
const EducationCampaigns = lazy(() => import("./pages/EducationCampaigns"));
const TravelAndOutdoors = lazy(() => import("./pages/TravelAndOutdoors"));
const SocialImpact = lazy(() => import("./pages/SocialImpact"));
const HealthAndFitness = lazy(() => import("./pages/HealthAndFitness"));
const ArtsAndCulture = lazy(() => import("./pages/ArtsAndCulture"));
const EducationCenter = lazy(() => import("./pages/EducationCenter"));
const PaymentsDetail = lazy(() => import("./pages/PaymentsDetail"));
const TrustOperationsDetail = lazy(() => import("./pages/TrustOperationsDetail"));
const CampaignNextStep = lazy(() => import("./pages/CampaignNextStep"));
const LegalDetail = lazy(() => import("./pages/LegalDetail"));
const BackersDetail = lazy(() => import("./pages/BackersDetail"));
const Withdraw = lazy(() => import("./pages/Withdraw"));
const AllCampaigns = lazy(() => import("./components/AllCampaigns"));

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative sm:-8 p-4 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1780px] mx-auto sm:pr-5">
        <Navbar setSearchQuery={setSearchQuery} />
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
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
            <Route path="/Contact" element={<Contact />} />
            <Route path="/communityGuidelines" element={<CommunityGuidelines />} />
            <Route path="/blockFundVskickstarter" element={<BlockFundVsKickstarter />} />
            <Route path="/TermsOfUse" element={<TermsOfUse />} />
            <Route path="/TrustAndSafety" element={<TrustAndSafety />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Crowdfunding" element={<Crowdfunding />} />
            <Route path="/EducationCampaigns" element={<EducationCampaigns />} />
            <Route path="/TravelAndOutdoors" element={<TravelAndOutdoors />} />
            <Route path="/SocialImpact" element={<SocialImpact />} />
            <Route path="/HealthAndFitness" element={<HealthAndFitness />} />
            <Route path="/ArtsAndCulture" element={<ArtsAndCulture />} />
            <Route path="/ExploreProjects" element={<ExploreProjects/>} />
            <Route path="/AllCampaigns" element={<AllCampaigns />} />
            <Route path="/Memorial" element={<Memorial />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/PrototypingandProduction" element={<PrototypingandProduction />} />
            <Route path="/CreativeServices" element={<CreativeServices />} />
            <Route path="/Fulfillment" element={<Fulfillment />} />
            <Route path="/EducationCenter" element={<EducationCenter />} />
            <Route path="/SearchCampaigns" element={<SearchCampaigns searchQuery={searchQuery} />} />
            <Route path="/payments" element={<PaymentsDetail />} />
            <Route path="/CampaignNextStep" element={<CampaignNextStep />} />
            <Route path="/TrustOperationsDetail" element={<TrustOperationsDetail />} />
            <Route path="/LegalDetail" element={<LegalDetail />} />
            <Route path="/BackersDetail" element={<BackersDetail />} />
            <Route path="/Withdraw" element={<Withdraw />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
