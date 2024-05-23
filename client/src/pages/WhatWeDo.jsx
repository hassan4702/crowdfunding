import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explore from "../assets/Explore.png";
import inspired from "../assets/inspired.png";
import perk from "../assets/perk.png";
import Journey from "../assets/Journey.png";
import Footer from "../components/Footer";
const WhatWeDo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Subscribed successfully");
        setEmail("");
      } else {
        alert("Error subscribing");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Error subscribing");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-5xl lg:text-7xl font-semibold text-center mt-20 mb-10">
          What We Do?
        </h1>

        {/* Fund the next big thing Section */}
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold pb-3">Fund the next big thing</h2>
          <p className="text-justify">
            Block Fund's crowdfunding campaigns are where new and groundbreaking
            products take flight, sometimes long before they hit mainstream
            availability. With thousands of campaigns launching every week,
            there's great tech, design, and much more around every corner —
            often with limited-time perks and pricing for the earliest backers.
            Before it's everywhere, it's on Block Fund.
          </p>
        </div>

        {/* Join the journey from idea to market Section */}
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold pb-10">
            Join the journey from idea to market
          </h2>
          <div className="flex justify-center ">
            <img
              src={Journey}
              alt="Journey"
              className="object-contain h-auto max-w-full"
            />
          </div>
          <p className="text-justify pt-8">
            With Block Fund, you have the opportunity to support entrepreneurs
            and new technology from the earliest stages of development. Be sure
            to evaluate every campaign closely and contribute at a level you can
            afford in the event that the team is unable to complete the project
            as planned.
          </p>
          <p className="text-justify">
            Browse campaigns, read the stories from the entrepreneurs
            themselves, evaluate the stage of development and any potential
            production risks — and then fund the projects that you want to help
            succeed.
          </p>
          <button
            className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded mt-4 mb-4 text-white"
            onClick={() => navigate("/ExploreProjects")}
          >
            Explore Projects
          </button>
          <p className="text-center">
            Or{" "}
            <span className="text-[#808191] cursor-pointer">
              <a href="/Crowdfunding">learn more</a>
            </span>{" "}
            about crowdfunding and your role as a backer.
          </p>
        </div>

        {/* Great finds, delivered daily Section */}
        <div className="text-center my-8 mx-auto bg-white dark:bg-[#1c1c24] py-20 w-full">
          <h2 className="text-2xl font-bold pb-3">
            Great finds, delivered daily
          </h2>
          <div className="max-w-3xl lg:mx-auto px-4">
            <p>
              We surface the best and brightest of Block Fund in our newsletter.
              Find out about great technology, design, film, and much more — all
              before it hits the mainstream.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center my-4">
            <input
              type="email"
              required
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className=" outline-none px-4 py-2 rounded-l mb-2 md:mb-0 md:mr-2 bg-[#dad6d6] dark:bg-[#0e0e11]"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#8c6dfd] hover:bg-[#9691aa] text-white font-semibold py-2 px-4 rounded-r ml-0 md:ml-2"
            >
              Subscribe
            </button>
          </div>
          <label className="flex flex-col md:flex-row items-center justify-center px-4">
            <input type="checkbox" className="form-checkbox mr-2" />
            <span className="mb-2 md:mb-0 justify-center ">
              I agree to the{" "}
              <span className="text-[#8c6dfd] cursor-pointer">
                <a href="/TermsOfUse">Terms of Use</a>
              </span>{" "}
              and have read and understand the{" "}
              <span className="text-[#8c6dfd] cursor-pointer">
                <a href="/PrivacyPolicy">Privacy Policy.</a>
              </span>
            </span>
          </label>
        </div>

        {/* What is a perk Section */}
        <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-6xl mx-auto pt-10">
          <img
            src={perk}
            alt="perk"
            className="w-96 h-86 object-contain rounded-lg"
          />
          <div className="text-center md:text-left md:pl-8">
            <h2 className="text-2xl font-bold pb-3">What is a perk?</h2>
            <p className="lg:pr-10">
              A perk is a reward or incentive offered by campaign owners to
              backers who contribute to their project. Perks can range from
              tangible items, like merchandise or limited-edition products, to
              intangible benefits, such as exclusive access, digital downloads,
              or personalized experiences. They are used to attract and
              encourage support from potential backers.
            </p>
          </div>
        </div>

        {/* Ready? Explore and Feeling Inspired Section */}
        <div className="text-center lg:my-8">
          <div className="flex flex-col lg:flex-row justify-center items-center my-4">
            <div className="flex flex-col items-center lg:mr-56 mb-10 md:mb-0">
              <img
                src={Explore}
                alt="Explore"
                className="w-24 md:w-32 h-auto object-cover"
              />
              <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">
                Ready? Explore
              </h1>
              <button
                className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded"
                onClick={() => navigate("/ExploreProjects")}
              >
                Discover projects
              </button>
            </div>

            <div className="hidden lg:block lg:h-80 border-l border-gray-400 mx-6"></div>
            <div className="block lg:hidden w-96 border-t border-gray-400 my-20"></div>

            <div className="flex flex-col items-center lg:ml-56 mb-4 md:mb-0 ">
              <img
                src={inspired}
                alt="Inspired"
                className="w-24 md:w-32 h-auto object-cover"
              />
              <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">
                Feeling Inspired?
              </h1>
              <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded">
                <a href="/create-campaign">Become an Entrepreneur</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhatWeDo;
