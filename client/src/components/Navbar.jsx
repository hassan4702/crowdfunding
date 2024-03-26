import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectWallet } from '@thirdweb-dev/react';
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
import { Avatar, Button } from "@nextui-org/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();
  
  const handleUserAccount = () => {
    return <ConnectWallet /> 
  }
  return (
    <div className="flex md:flex-row flex-col-reverse  justify-between mb-[35px] gap-6">
      <div></div>
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px] ">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />

        <div className="w-[62px] h-full rounded-[20px] bg-[#8c6dfd] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end items-center gap-4">

        {/* <Button
          className={
            "font-epilogue font-semibold text-[16px]  text-white px-4 rounded-[10px] bg-[#8c6dfd]"
          }
          onClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        >
          {address ? "Create a campaign" : "Connect"}
        </Button> */}
        <CustomButton 
          btnType="button"
          title={!address ? 'Connect' : handleUserAccount() }
          styles={!address ? 'bg-[#8c6dfd]' : '' /*'bg-[#8c6dfd]'*/ }
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] flex justify-center items-center cursor-pointer">
            <Avatar src={"/img.png"}></Avatar>
          </div>
        </Link>

      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={"/crowdfunding-removebg-preview.png"}
            alt="user"
            className="w-[100%] h-[100%] bg-white rounded-md object-contain"
          />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex hover:bg-[#3a3a43] p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
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
            ))}
          </ul>

          <div className="flex flex-row justify-between items-center mx-4">

            {/* <CustomButton */}
            {/*   btnType="button" */}
            {/*   title={address ? "Create a campaign" : "Connect"} */}
            {/*   styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"} */}
            {/*   handleClick={() => { */}
            {/*     if (address) navigate("create-campaign"); */}
            {/*     else connect(); */}
            {/*   }} */}
            {/* /> */}
            <Button
                className={
                  "font-epilogue font-semibold text-[16px]  text-white px-4 rounded-[10px] bg-[#8c6dfd]"
                }
                onClick={() => {
                  if (address) navigate("create-campaign");
                  else connect();
                }}
            >
              {address ? "Create a campaign" : "Connect"}
            </Button>
            <Link to="/profile">
              <div className="w-[52px] h-[52px] flex justify-center items-center cursor-pointer">
                <Avatar src={"/img.png"}></Avatar>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
