import React from "react";
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
      link: "View All"
    },
    {
      image: fitness,
      name: "Health and Fitness",
      description: "Projects focused on improving health and fitness.",
      link: "View All"
    },
    {
      image: phone,
      name: "Technology",
      description: "Innovative technology projects.",
      link: "View All"
    },
    {
      image: film,
      name: "Social Impact",
      description: "Projects with a positive social impact",
      link: "View All"
    },
    {
      image: audio,
      name: "Arts and Culture",
      description: "Creative and artistic projects.",
      link: "View All"
    },
    {
      image: bag,
      name: "Travel and Outdoors",
      description: "Projects related to travel and outdoor activities.",
      link: "View All"
    },
  ];

const Card = ({ image, name, description, link }) => {
  return (
    <div className="w-72 h-72 max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24] m-4 hover:-translate-y-1">  {/* Set a fixed width and height */}
      <a href="">
        <img
          className="w-full h-32 object-contain mx-auto"  
          src={image}
          alt={name}
        />
        <div className="px-6 py-4 text-center"> 
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-md">{description}</p>
          <p className="text-[#8c6dfd]">{link}</p>
        </div>
      </a>
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
            />
          ))}
        </div>
      </div>
    );
  };

export default CategoriesCards;
