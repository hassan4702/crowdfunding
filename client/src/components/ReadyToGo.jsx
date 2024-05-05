import React from "react";
import CUTTINGEDGETOOLS from '../assets/CUTTINGEDGETOOLS.png';
import BlockFundVsKickstarter from '../assets/BlockFundVsKickstarter.png';
import Education from '../assets/Education.png';
import crowdfunding from '../assets/crowdfunding.png';
const cardsData = [
    {
      image: crowdfunding,
      name: "Start a Campaign",
      description: "Take the plunge with our guided campaign-creation tool. Itss free, and you can easily start now and finish later.",
      link: "GET STARTED"
    },
    {
      image: CUTTINGEDGETOOLS,
      name: "Experts Directory",
      description: "Take your idea further with these experienced companies recommended by Block Fund campaigners and staff.",
      link: "FIND SUPPORT"
    },
    {
      image: Education,
      name: "Education Center",
      description: "Find everything you need for a successful campaign in one convenient, centralized location.",
      link: "EXPLORE RESOURCES"
    },
    {
      image: BlockFundVsKickstarter,
      name: "Block Fund vs Kickstarter",
      description: "Learn about the benefits of choosing Block fund for your idea. See our detailed breakdown.",
      link: "GET INFORMED"
    }
  ];
const Card = ({ image, name, description, link }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24] m-4">
        <img className="mx-auto w-24 h-24" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-sm text-justify pb-10">{description}</p>
        <a href="" className="text-[#8c6dfd] text-center font-bold">{link}</a>
      </div>
    </div>
  );
};

const ReadToGo = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center ">
          {cardsData.map((card) => (
            <Card
              image={card.image}
              name={card.name}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ReadToGo;