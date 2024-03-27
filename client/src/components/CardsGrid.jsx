import React from 'react';
import funding_img1 from '../assets/funding_img1.jpg';
import funding_img2 from '../assets/funding_img2.jpg';
import funding_img3 from '../assets/funding_img3.jpg';
import funding_img4 from '../assets/funding_img4.jpg';

const cardsData = [
  {
    id: 1,
    image: funding_img1,
    name: 'Funding',
    link: '24/7 Health Status | Personalized Health Recommendations | Health Alerts & Family Sharing',
    amount: "$299,363",
    percent: '1,497%',
  },
  {
    id: 2,
    image: funding_img2,
    name: 'Funding',
    link: 'Ozlo Sleepbuds: The Next-Generation Sleepbuds',
    amount: "$4,433,102",
    percent: '4,882%',
  },
  {
    id: 3,
    image: funding_img3,
    name: 'Funding',
    link: 'PawSwing Purrring Automatic Cat Self-Groomer',
    amount: "$150,080",
    percent: '3,002%',
  },
  {
    id: 4,
    image: funding_img4,
    name: 'Funding',
    link: 'AYANEO Flip: World 1st Dual-Screen Windows Handheld',
    amount: "$5,164,077",
    percent: '10,328%',
  },
];

const Card = ({ image, name, link, amount, percent }) => {
  return (
    <div className="max-w-[570px] rounded-[15px] overflow-hidden shadow-lg mb-4 mx-auto md:mx-0 bg-[#1c1c24] transition-transform hover:-translate-y-1">
      <img className="w-full h-auto max-h-64" src={image} alt={name} />
      <div className="px-6 py-8">
        <div className="font-bold text-lg mb-3 text-[#808191]">{name}</div>
        <hr className="mb-5" />
        <a href="#" className="text-white text-xl font-semibold">{link}</a>
        <div className="flex justify-between mt-2 pt-20">
          <p className="text-white text-xl font-semibold">{amount}<span className='text-lg font-normal pl-1'>USD raised</span></p>
          <p className="text-white text-lg font-normal">{percent}</p>
        </div>
        <div className=" h-2 bg-[#8c6dfd] rounded-full mt-1"></div>
      </div>
    </div>
  );
};

const CardsGrid = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
