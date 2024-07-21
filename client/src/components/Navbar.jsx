import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
import BlockFundLogo from "../assets/BlockFundLogo.png";

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { connect, address, getCampaigns } = useStateContext();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestedCampaigns, setSuggestedCampaigns] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);

  const handleUserAccount = () => {
    return <ConnectWallet />;
  };

  const handleSearch = () => {
    setSearchQuery(searchInput.trim());
    setSearchInput(""); // Clear search input
    setSuggestedCampaigns([]); // Clear suggested campaigns
    navigate("/SearchCampaigns");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Fetch campaigns for suggestions
  useEffect(() => {
    const fetchCampaigns = async () => {
      const data = await getCampaigns();
      setAllCampaigns(data || []);
    };

    fetchCampaigns();
  }, [getCampaigns]);

  // Clear the search input when the route changes, except on the SearchCampaigns page
  useEffect(() => {
    if (location.pathname !== "/SearchCampaigns") {
      setSearchInput("");
    }
  }, [location.pathname]);

  // Filter suggested campaigns based on search input
  useEffect(() => {
    if (searchInput) {
      const filtered = allCampaigns.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          campaign.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestedCampaigns(filtered);
    } else {
      setSuggestedCampaigns([]);
    }
  }, [searchInput, allCampaigns]);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[10px] gap-6">
      <div></div>
      <div className="lg:flex-1 flex flex-col max-w-[458px] py-2 pl-4 pr-2 h-auto shadow-sm rounded-[100px] dark:bg-[#1c1c24] bg-white relative">
        <div className="flex flex-row py-1">
          <input
            type="text"
            placeholder="Search for campaigns"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex w-full font-epilogue font-normal text-[14px] dark:text-white text-black bg-transparent outline-none"
          />
          <div
            onClick={handleSearch}
            className="w-[62px] h-full py-2 mb-1  rounded-[20px] dark:bg-[#8c6dfd] bg-[#8c6dfd] flex justify-center items-center cursor-pointer"
          >
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
        {searchInput && suggestedCampaigns.length > 0 && (
          <div className="absolute top-[52px] left-0 right-0 bg-white dark:bg-[#1c1c24] rounded-[10px] shadow-lg z-10">
            {suggestedCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  navigate(`/campaign-details/${campaign.id}`, { state: campaign });
                  setSearchInput(""); // Clear search input after selecting a suggestion
                }}
              >
                {campaign.title} - <i>{campaign.category}</i>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sm:flex hidden flex-row justify-end items-center gap-4">
        <CustomButton
          btnType="button"
          title={!address ? "Log In / Sign up" : handleUserAccount()}
          styles={!address ? "bg-[#8c6dfd]" : ""}
          handleClick={() => {
            if (window.ethereum && window.ethereum.isMetaMask) {
              console.log("MetaMask is installed!");
            } else {
              alert("MetaMask extension is not installed!");
            }
            if (address) navigate("/");
            else connect();
          }}
        />
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] flex justify-center items-center cursor-pointer">
          <img
            src={BlockFundLogo}
            alt="user"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 dark:bg-[#2c2f32] bg-gray-50 shadow-lg z-10 py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => {
              const Icon = link.iconLight;
              return (
                <li
                  key={link.name}
                  className={`flex hover:bg-[#3a3a43] p-4 ${
                    isActive === link.name && "dark:bg-[#3a3a43] bg-slate-500"
                  }`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <Icon
                    className={`w-[24px] h-[24px] object-contain ${
                      isActive === link.name ? "text-white" : "text-[#808191]"
                    }`}
                  />
                  <p
                    className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                      isActive === link.name ? "text-white" : "text-[#808191]"
                    }`}
                  >
                    {link.name}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-row justify-center items-center gap-4">
            <CustomButton
              btnType="button"
              title={!address ? "Log In / Sign up" : handleUserAccount()}
              styles={!address ? "bg-[#8c6dfd]" : ""}
              handleClick={() => {
                if (window.ethereum && window.ethereum.isMetaMask) {
                  console.log("MetaMask is installed!");
                } else {
                  alert("MetaMask extension is not installed!");
                }
                if (address) navigate("/");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
