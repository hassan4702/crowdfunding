import React from "react";
import distribution from '../assets/distribution.png';
import creative from '../assets/creative.png';
import marketing from '../assets/marketing.png';
import fulfillment from '../assets/fulfillment.png';
import prototype from '../assets/prototype.png';
const cardsData = [
    {
      image: creative,
      name: "Creative Services",
    },
    {
      image: fulfillment,
      name: "Fulfillment",
    },
    {
      image: marketing,
      name: "Marketing and Communication",
    },
    {
      image: prototype,
      name: "Prototyping and Production",
    },
    {
        image: distribution,
        name: "Retail, Licensing and Distributions",
      },
  ];
const Card = ({ image, name }) => {
  return (
    <div className="max-w-xl  rounded overflow-hidden bg-white dark:bg-[#1c1c24]  m-4">
        <a href="">
        <img className="mx-auto w-24 h-24" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
      </div>
      </a>
    </div>
  );
};

const Experts = () => {
    return (
      <div className="flex justify-center xs:justify-center md:justify-center sm:justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
          {cardsData.map((card) => (
            <Card
              image={card.image}
              name={card.name}
            />
          ))}
        </div>
      </div>
    );
  };

  export default Experts;