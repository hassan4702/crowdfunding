import React from 'react';
import { useNavigate } from 'react-router-dom';
import phone from '../assets/phone.png';
import bag from '../assets/bag.png';
import fitness from '../assets/fitness.png';
import audio from '../assets/audio.png';
import film from '../assets/film.png';
import Education from '../assets/Education.png';

const cardsData = [
    {
      image: Education,
      name: "Education",
      description: "Projects focused on learning and education.",
      link: "View All",
      route: "/EducationCampaigns",
    },
    {
      image: fitness,
      name: "Health and Fitness",
      description: "Projects focused on improving health and fitness.",
      link: "View All",
      route: "/HealthAndFitness",
    },
    {
      image: phone,
      name: "Technology",
      description: "Innovative technology projects.",
      link: "View All",
      route: "/Technology",
    },
    {
      image: film,
      name: "Social Impact",
      description: "Projects with a positive social impact",
      link: "View All",
      route: "/SocialImpact",
    },
    {
      image: audio,
      name: "Arts and Culture",
      description: "Creative and artistic projects.",
      link: "View All",
      route: "/ArtsAndCulture",
    },
    {
      image: bag,
      name: "Travel and Outdoors",
      description: "Projects related to travel and outdoor activities.",
      link: "View All",
      route: "/TravelAndOutdoors",
    },
];

const Card = ({ image, name, description, link, route }) => {
  const navigate = useNavigate(); 
  
  return (
    <div
      className="w-72 h-72 max-w-xs rounded-[15px] overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24] m-4 hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(route)} 
    >
      <img
        className="w-full h-32 object-contain mx-auto"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-semibold text-xl mb-2">{name}</div>
        <p className="text-md">{description}</p>
        <p className="text-[#8c6dfd]">{link}</p>
      </div>
    </div>
  );
};

const CategoriesCards = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
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

export default CategoriesCards;
