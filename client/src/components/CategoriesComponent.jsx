import React from 'react';
import Review1 from '../assets/Review1.jpg'
import Review2 from '../assets/Review2.jpg'
import Review3 from '../assets/Review3.jpg'
import CategoriesCards from './CategoriesCards'

const cardsData = [
  {
    image: Review1,
    title: 'Looking Ahead: 5 Trends in Crowdfunding To Watch In 2024',
    description: "What's in store for Block Fund in the new year?",
    link: 'LEARN MORE',
  },
  {
    image: Review2,
    title: 'Unboxing a New Gaming & Productivity Handheld',
    description: 'Does the OneXPlayer X1 live up to the hype?',
    link: 'LEARN MORE',
  },
  {
    image: Review3,
    title: 'Reviewing Retro Mini PC',
    description: 'We put the new AYANEO AM02 Mini PC to the test!',
    link: 'LEARN MORE',
  },
];

const Card = ({ image, title, description, link }) => {

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 hover:-translate-y-1 transition-transform bg-white dark:bg-[#1c1c24] ">
      <a href="#">
        <img className="w-full h-64 object-cover mb-4 rounded-lg" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="text-sm mb-2">{title}</div>
          <p className="text-sm mb-2">{description}</p>
          <p className="text-[#8c6dfd]">{link}</p>
        </div>
      </a>
    </div>
  );
};

const CategoriesComponent = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-4 pb-10">
      <h1 className="text-3xl font-semibold text-center mb-4">Which categories interest you?</h1>
      <p className="text-center mb-4">Discover projects just for you and get great recommendations when you select your interests.</p>
      <p className="text-center mb-5">Explore our top categories</p>
      <CategoriesCards />
    </div>

    <div className="flex flex-col items-center justify-center px-4 pb-10 pt-14">
  <h1 className="text-3xl font-semibold text-center mb-4">From the Block Fund Review</h1>
  <p className="text-center mb-2">Your behind-the-scenes</p>
  <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
</div>
    </>
  );
};

export default CategoriesComponent;
