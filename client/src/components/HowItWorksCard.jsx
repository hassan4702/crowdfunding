import React from "react";
import crowdfunding from '../assets/crowdfunding.png';
import Indemand from '../assets/Indemand.png';
const cardsData = [
    {
      image: crowdfunding,
      name: "Raise funds with a crowdfunding campaign",
      description: "Acquire starter capital and validate your idea by tapping into Block Fund's global network of early adopters.",
      link: "Start a Campaign >"
    },
    {
      image: Indemand,
      name: "Extend your campaign with InDemand",
      description: "After your crowdfunding campaign, continue raising money and building your community with InDemand. No fundraising target, no deadline limits.",
      link: "Start a Campaign >"
    },
  ];
  const Card = ({ image, name, description, link }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden m-4">
          <img className="mx-auto h-28 w-28 object-cover" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-justify">{name}</div>
          <p className="text-sm text-justify pb-4">{description}</p>
          <a href={link} className="text-[#8c6dfd] text-justify">{link}</a>
        </div>
      </div>
    );
  };
  
  

const HowItWorksCard = () => {
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

  export default HowItWorksCard;