import React from "react";
import Backers from '../assets/Backers.png';
import Campaign from '../assets/Campaign.png';
import Payments from '../assets/Payments.png';
import TrustOperations from '../assets/TrustOperations.png';
import Profile from '../assets/Profile.png';
import CampaignNextStep from '../assets/CampaignNextStep.png';
import Legal from '../assets/Legal.png';
const cardsData = [
    {
      image: Backers,
      name: "Backers",
      description: "Find out how to evaluate and back crowdfunding campaigns, and manage your orders",
      link: "View All"
    },
    {
      image: Campaign,
      name: "Campaigns",
      description: "Discover how to plan, create, and manage your crowdfunding campaign",
      link: "View All"
    },
    {
      image: Payments,
      name: "Payments",
      description: "Learn how to connect your bank account and recieve funds from your crowdfunding campaign",
      link: "View All"
    },
    {
      image: TrustOperations,
      name: "Trust Operations",
      description: "understand Block Fund's policies and how our Trust Operations tram protects our customers",
      link: "View All"
    },
    {
      image: CampaignNextStep,
      name: "Campaign Next Steps",
      description: "Learn about Block Fund and other next steps for your campaign",
      link: "View All"
    },
    {
      image: Legal,
      name: "Legal",
      description: "Read about Block Fund's legal policies and processes",
      link: "View All"
    },
    {
        image: Profile,
        name: "Profile",
        description: "Build and customize your Block Fund profile",
        link: "View All"
      },
  ];
const Card = ({ image, name, description, link }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-sm shadow-gray-400  m-4 hover:-translate-y-1">
        <a href="">
        <img className="mx-auto w-24" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-sm text-center">{description}</p>
        <p className="text-[#8c6dfd] text-center">{link}</p>
      </div>
      </a>
    </div>
  );
};

const HelpCards = () => {
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

  export default HelpCards;