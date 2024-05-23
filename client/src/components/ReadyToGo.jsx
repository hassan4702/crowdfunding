import React from "react";
import { useNavigate } from 'react-router-dom';
import BlockFundVsKickstarter from '../assets/BlockFundVsKickstarter.png';
import Education from '../assets/Education.png';
import crowdfunding from '../assets/crowdfunding.png';
const cardsData = [
    {
      image: crowdfunding,
      name: "Start a Campaign",
      description: "Take the plunge with our guided campaign-creation tool. Itss free, and you can easily start now and finish later.",
      link: "GET STARTED",
      route: "/create-campaign",
    },
    {
      image: Education,
      name: "Education Center",
      description: "Find everything you need for a successful campaign in one convenient, centralized location.",
      link: "EXPLORE RESOURCES",
      route: "/EducationCenter",
    },
    {
      image: BlockFundVsKickstarter,
      name: "Block Fund vs Kickstarter",
      description: "Learn about the benefits of choosing Block fund for your idea. See our detailed breakdown.",
      link: "GET INFORMED",
      route: "/BlockFundVsKickstarter",
    }
  ];
const Card = ({ image, name, description, link, route }) => {
  const navigate = useNavigate(); 
  return (
    <div className="max-w-xs rounded-[15px] overflow-hidden shadow-lg bg-gray-50 dark:bg-[#1c1c24] m-4" onClick={() => navigate(route)}>
        <img className="mx-auto w-24 h-24" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-sm text-justify pb-6">{description}</p>
        <a href="" className="text-[#8c6dfd] text-center font-semibold">{link}</a>
      </div>
    </div>
  );
};

const ReadToGo = () => {
    return (
      <div className="container mx-auto pb-10">
        <div className="flex flex-wrap justify-center ">
          {cardsData.map((card) => (
            <Card
              image={card.image}
              name={card.name}
              description={card.description}
              link={card.link}
              route={card.route}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ReadToGo;