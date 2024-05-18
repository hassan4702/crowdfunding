import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MediaRenderer } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
import { CountBox, CustomButton, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";
import { ethers } from "ethers";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Button } from "@nextui-org/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TotalCampainCreatedbyuser from "../components/TotalCampainCreatedbyuser";
const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    donate,
    payOutToCampaignTeam,
    getDonations,
    contract,
    address,
    deleteCampaign,
  } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [radio, setRadio] = useState("");
  const [donators, setDonators] = useState([]);
  const [dropdownOption, setDropdownOption] = useState("fund");

  const remainingDays = daysLeft(state.deadline);

  const handleUpdate = async () => {
    setIsLoading(true);
    navigate(`/campaign-update/${state.pId}`, { state });
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

  const handleWithdraw = async () => {
    setIsLoading(true);

    await payOutToCampaignTeam(state.pId);

    navigate("/");
    setIsLoading(false);
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

  const compareAmounts = () => {
    const collected = parseFloat(
      ethers.utils.parseEther(state.amountCollected)
    );
    const target = parseFloat(ethers.utils.parseEther(state.target));
    return collected <= target;
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isLoading && <Loader />}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex flex-col">
          <div className="font-epilogue font-semibold text-[20px] uppercase p-2">
            {state.title}
          </div>
          <MediaRenderer
            src={state.image}
            width="100%"
            height="410px"
            alt="campaign"
            className="w-full h-[410px] overflow-auto object-cover rounded-xl"
          />
          <div className="relative w-full h-[5px] bg-[#8c6dfd] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            />
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
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div class="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%]" />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px]">
                  {state.owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                  <TotalCampainCreatedbyuser ownerAddress={state.owner} />
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">
              Story
            </h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191]">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">
              Donators
            </h4>
            <div className="mt-[20px]">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd]">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191]">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191]">
                  No donators yet.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] uppercase">
            {state.owner !== address ? "Fund" : ""}
          </h4>
          <div
            className={`${
              remainingDays >= 0 ? "flex" : "hidden"
            } mt-[20px]  flex-col p-4 bg-white dark:bg-[#1c1c24] rounded-[10px]`}
          >
            {/* <select
              className="w-full py-[10px] px-[15px] bg-[#f6f6fa] dark:bg-[#272730] rounded-[10px]"
              onChange={(e) => setDropdownOption(e.target.value)}
              value={dropdownOption}
              defaultValue=""
            >
              <option value="" disabled>
                Fund or Donate
              </option>
              <option value="fund">Fund the Campaign</option>
              <option value="donate">Donate</option>
            </select>

            {dropdownOption === "fund" && (
              <div className="mt-[20px]">
                <input
                  type="number"
                  placeholder="ETH 0.1"
                  step="0.01"
                  className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-gray-200 dark:border-[#3a3a43] bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="my-[20px] p-4 dark:bg-[#13131a] bg-[#f2f2f2] rounded-[10px]">
                  <h4 className="font-epilogue font-semibold text-[14px]">Back because you believe in it.</h4>
                  <p className="font-epilogue font-normal text-[14px] ">
                    Support this project because you care about it.
                  </p>
                </div>
                <CustomButton
                  btnType="button"
                  title={remainingDays >= 0 && compareAmounts() ? "Fund Campaign" : 
                (state.owner == address && (remainingDays == 0 || !compareAmounts())) ? "Withdraw Funds" : "Finished"}
                  styles="w-full bg-[#8c6dfd]"
                  handleClick={handleDonate}
                />
              </div>
            )}

            {dropdownOption === "donate" && (
              <div className="mt-[20px]">
              <div className="mb-2">
                <a href="#" className="text-lg block">Donate 10%</a>
                <hr className="border-t-2 border-gray-100 dark:border-[#13131a]" />
              </div>
              <div className="mb-2">
                <a href="#" className="text-lg block">Donate 20%</a>
                <hr className="border-t-2 border-gray-100 dark:border-[#13131a]" />
              </div>
              <div className="mb-2">
                <a href="#" className="text-lg block">Donate 30%</a>
                <hr className="border-t-2 border-gray-100 dark:border-[#13131a]" />
              </div>
            </div>
            )} */}
            {state.owner !== address && (
              <div className="flex w-full flex-col">
                <Tabs className="flex w-full" aria-label="Options">
                  <Tab key="donate" title="Donate">
                    <div className="flex flex-col space-y-2">
                      <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        step={0.01}
                        label="ETH "
                      />
                      <Button
                        className="w-full bg-[#8c6dfd] text-white"
                        onClick={handleDonate}
                      >
                        Donate
                      </Button>
                    </div>
                  </Tab>
                  <Tab key="fund" title="Fund">
                    <div className="flex flex-col space-y-3">
                      <RadioGroup
                        value={amount}
                        onValueChange={setAmount}
                        label="Select your package"
                      >
                        <Radio value="0.01" description="Discount of 10%">
                          ETH 0.01
                        </Radio>
                        <Radio value="0.05" description="Discount of 20%">
                          ETH 0.05
                        </Radio>
                        <Radio value="0.10" description="Discount of 50%">
                          ETH 0.10
                        </Radio>
                      </RadioGroup>
                      <Button
                        className="w-full bg-[#8c6dfd] text-white"
                        onClick={handleDonate}
                      >
                        Fund
                      </Button>
                      {amount}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            )}
            {state.owner === address && (
              <div className="space-y-2 flex flex-col">
                <Button
                  className={`w-full bg-[#8c6dfd] text-white`}
                  onClick={() => {
                    if (remainingDays == 0 || !compareAmounts()) {
                      handleWithdraw();
                    } else {
                      // You can't withdraw funds before the campaign ends.
                      toast(
                        "You can't withdraw funds before the campaign ends",
                        {
                          position: "bottom-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        }
                      );
                    }
                  }}
                >
                  Withdraw Funds
                </Button>
                <Button
                  className="w-full bg-[#8c6dfd] text-white"
                  handleClick={handleUpdate}
                >
                  {remainingDays >= 0 ? "Edit Campaign" : ""}
                </Button>
                <Button
                  className="w-full bg-[#8c6dfd] text-white"
                  handleClick={handleDelete}
                >
                  {remainingDays >= 0 ? "Delete Campaign" : ""}
                </Button>
                {/* <CustomButton
                  btnType="button"
                  title={remainingDays >= 0 ? "Edit Campaign" : ""}
                  styles="w-full bg-[#8c6dfd]"
                  handleClick={handleUpdate}
                /> */}
                {/* <CustomButton
                  btnType="button"
                  title={remainingDays >= 0 ? "Delete Campaign" : ""}
                  styles="w-full bg-[#8c6dfd]"
                  handleClick={handleDelete}
                /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
