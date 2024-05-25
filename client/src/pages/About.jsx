import React from "react";
import { useNavigate } from "react-router-dom";
import about from "../assets/about.jpg";
import mission from "../assets/mission.jpg";
import Footer from "../components/Footer";
import { Card, CardBody } from "@nextui-org/card";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center mb-8">
          About Us
        </h1>

        <p className="text-lg sm:text-xl lg:text-xl text-center mb-8 lg:px-32 lg:text-justify">
          Block Fund is a Blockchain based Crowd Funding platform, designed to
          overcome the challenges faced by traditional crowdfunding platforms
          like Kickstarter. Our primary focus is to revolutionize the funding
          landscape by introducing transparency, security, efficiency,
          eliminating high intermediary costs and geographical limitations to
          transform the way projects are funded.
        </p>

        <div className="relative mb-20">
          <img
            src={mission}
            alt="Mission"
            className="w-full lg:h-[30rem] h-[27rem] mb-8 object-cover rounded-[15px] "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl lg:text-3xl font-bold text-white">
                Our mission is to empower people to unite around ideas that
                matter to them and together make those ideas come to life.
              </h1>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
          Block Fund Innovation
        </h2>

        <p className="text-lg sm:text-xl lg:text-lg text-center mb-8">
          Block Fund aims to redefine the funding landscape, providing a
          platform where ideas can flourish and communities can support
          impactful projects worldwide.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
          <div className="sm:w-1/3 px-4 mb-4">
            <Card>
              <CardBody>
                <p className="text-lg lg:text-normal text-center">
                  Products on Block Fund are unique. They
                  aren’t like what I’d find on the market. They aren’t
                  mainstream. It’s the newest tech that companies don’t even
                  know will be popular.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-1/3 px-4 mb-4">
            <Card>
              <CardBody>
                <p className="text-lg lg:text-normal text-center">
                  Block Fund look for things that could be useful in my everyday
                  life. I look for innovation – what kind of features does this
                  have in addition to what’s already on the market.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-1/3 px-4 mb-4">
            <Card>
              <CardBody>
                <p className="text-lg lg:text-normal text-center">
                  Block Fund allows you to connect your creations with a
                  community that is eager for innovation. The team behind the
                  platform also provided great feedback based on their
                  experience.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="relative">
          <img
            src={about}
            alt="About Us"
            className="w-full h-96 mb-8 object-cover rounded-[15px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white">
                Find it first on Block Fund
              </h1>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
          The Creative Independent
        </h2>

        <p className="text-lg sm:text-xl lg:text-lg lg:text-justify lg:px-32 text-center mb-8">
          Block Fund's support for creative work goes beyond our platform. We
          publish The Creative Independent (TCI) as a way to share advice and
          illuminate the many, many routes to living a creative life.
        </p>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
          Our team
        </h3>

        <p className="text-lg sm:text-xl lg:text-lg text-center lg:text-justify lg:px-32">
          We're an independent company of passionate people working together. We
          spend our time designing and building Block Fund, forging community
          around creative projects, and supporting the creative ecosystem around
          us. We’re developers, designers, support specialists, writers.
        </p>

        <div className="flex flex-col items-center pt-20 sm:pt-10 md:pt-20 lg:pt-24 xl:pt-32">
          <button
            className="text-white px-6 py-3 rounded-[10px] bg-[#8c6dfd] mb-14"
            onClick={() => navigate("/ExploreProjects")}
          >
            EXPLORE
          </button>
          <div className="flex flex-col sm:flex-row w-full mb-8 justify-center gap-8">
            <div className="w-full sm:w-1/3 text-center mb-8 sm:mb-0">
              <p className="font-semibold">LEARN MORE</p>
              <hr className="border-t-2 border-gray-300 mt-3 mr-7 lg:mb-8 mb-3" />
              <div
                className="text-[#8c6dfd] text-lg font-semibold cursor-pointer"
              ><a href='/WhatWeDo'>What We Do</a>
                <span className="ml-1">→</span>
              </div>
            </div>
            <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
              <p className="font-semibold">DISCOVER</p>
              <hr className="border-t-2 border-gray-300 mt-3 mr-7 mb-3 lg:mb-8" />
              <div
                className="text-[#8c6dfd] text-lg font-semibold cursor-pointer"
                onClick={() => navigate("/ExploreProjects")}
              >
                <span>Explore clever things</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
