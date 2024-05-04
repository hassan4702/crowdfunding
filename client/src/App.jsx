import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar,Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import UpdateCampaign from './pages/UpdateCampaign';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import TopFinds from './pages/TopFinds';
import HowItWorks from './pages/HowItWorks';
import HelpAndSupport from './pages/HelpAndSupport';
import FindExperts from './pages/FindExperts';
import Contact from './pages/Contact';
import CommunityGuidelines from './pages/CommunityGuidelines';
import BlockFundVsKickstarter from './pages/BlockFundVsKickstarter';
import TermsOfUse from './pages/TermsOfUse';

import TrustAndSafety from './pages/TrustAndSafety';
const App = () => {
  return (
    <div className="relative sm:-8 p-4  min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        {/* <TopNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/campaign-update/:id" element={<UpdateCampaign />} />
          <Route path="/about" element={<About /> } />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/topfinds" element={<TopFinds />} />
          <Route path="/howitworks" element={<HowItWorks/>} />
          <Route path="/HelpAndSupport" element={<HelpAndSupport/>} />
          <Route path="/FindExperts" element={<FindExperts/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/communityGuidelines" element={<CommunityGuidelines/>} />
          <Route path="/blockFundVskickstarter" element={<BlockFundVsKickstarter/>} />
          <Route path="/TermsOfUse" element={<TermsOfUse/>} />
          <Route path="/TrustAndSafety" element={<TrustAndSafety/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App