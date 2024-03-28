import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { MediaRenderer } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
import { CountBox, CustomButton, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";

const CampaignDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address, deleteCampaign } =
    useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const compareAmounts = () => {
    const collected = parseFloat(
      ethers.utils.parseEther(state.amountCollected)
    );
    const target = parseFloat(ethers.utils.parseEther(state.target));
    return collected <= target;
  };
  const handleUpdate = async () => {
    setIsLoading(true);
    navigate(`/campaign-update/${state.pId}`,{ state });
    setIsLoading(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);

    await deleteCampaign(state.pId);
    navigate("/");
    setIsLoading(false);
  };
  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/");
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <div
            className={"font-epilogue font-semibold text-[20px] uppercase p-2"}
          >
            {state.title}
          </div>

          <MediaRenderer
            src={state.image}
            width="full"
            height="410px"
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${state.target} ETH`}
            value={state.amountCollected}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px]  uppercase">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] break-all">
                  {state.owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                  10 Campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px]  uppercase">
              Story
            </h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px]  text-justify">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px]  uppercase">
              Donators
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px]  uppercase">
          {state.owner != address && (<div>Fund</div> )}
          </h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <div className="flex items-center justify-center">
              
              <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              {state.owner != address ? ( <div> Fund the campaign</div>):(<div> Admin Settings</div>)}
                {state.owner != address && (
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex items-center justify-center ml-2 w-8 h-8 bg-gray-200 rounded-full text-gray-600 hover:text-gray-800 focus:outline-none focus:bg-gray-300"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 6.707a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>)}
              </p>
              {isOpen && (
                <div className="relative left-0 right-0 mt-2 w-20 ml-2 bg-white rounded-md shadow-lg">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                      role="menuitem"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-[30px]">
              {state.owner != address && (
                <>
                  <input
                    type="number"
                    placeholder="ETH 0.1"
                    step="0.01"
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                    <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                      Back it because you believe in it.
                    </h4>
                    <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                      Support the project for no reward, just because it speaks
                      to you.
                    </p>
                  </div>

                  <CustomButton
                    btnType="button"
                    title="Fund Campaign"
                    styles="w-full bg-[#8c6dfd]"
                    handleClick={handleDonate}
                  />
                </>
              ) }
              <br />
              <br />
              {state.owner == address ? (
                <CustomButton
                  btnType="button"
                  title={remainingDays >= 0 && compareAmounts() ? "Edit" : ""}
                  styles="w-full bg-[#8c6dfd]"
                  handleClick={() => {
                    if (state.owner == address) handleUpdate();
                  }}
                />
              ) : (
                ""
              )}{" "}
              <br />
              <br />
              {state.owner == address ? (
                <CustomButton
                  btnType="button"
                  title={remainingDays >= 0 && compareAmounts() ? "Delete" : ""}
                  styles="w-full bg-[#8c6dfd]"
                  handleClick={() => {
                    if (state.owner == address) handleDelete(state.pId);
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
