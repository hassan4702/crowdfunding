import React from "react";
import HowItWork from '../assets/HowItWork.jpg';
import distribution from '../assets/distribution.png';
import creative from '../assets/creative.png';
import marketing from '../assets/marketing.png';
import fulfillment from '../assets/fulfillment.png';
import prototype from '../assets/prototype.png';
import Footer from '../components/Footer';
const cardsData = [
    {
      image: creative,
      name: "Creative Services",
      description: "Create an engaging customer experience with top crowdfunding video agencies and design houses to drive loyal backers to your campaign or business.",
      link: "VIEW ALL"
    },
    {
      image: prototype,
      name: "Prototyping & Production",
      description: "Make your product development seamless and cost-efficient with these resources for prototyping, procurement, 3D printing and more.",
      link: "VIEW ALL"
    },
    {
        image: distribution,
        name: "Retail & Market Growth",
        description: "Plot your retail strategy and get your product out of thewrehouse and into stores with these leading brands and agencies.",
        link: "VIEW ALL"
    },
    {
        image: marketing,
        name: "Marketing",
        description: "Expand your reach and build an audience with these agencies offering digital marketing services and more.",
        link: "VIEW ALL"
      },
    {
        image: fulfillment,
        name: "Packaging & Fulfillment",
        description: "Get assistance managing your supply chain and delivering to backers.",
        link: "VIEW ALL"
      },
  ];
const Card = ({ image, name, description, link }) => {
  return (
    <div className="max-w-xl rounded-[15px] overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24]  m-4">
        <a href="">
            <img className="mx-auto w-24 h-24" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{name}</div>
                <p className="text-sm text-justify pb-4">{description}</p>
                <p className="text-[#8c6dfd] text-center font-bold">{link}</p>
            </div>
        </a>
    </div>
  );
};
const FindExperts = () => {
    return(
        <>
            <div className="relative mt-10">
                <img src={HowItWork} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-2 object-cover rounded-[15px]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white ">
                            Explore the Experts Directory
                        </h1>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center mb-1">Categories</h1>
            </div>

            <div className="flex justify-center xs:justify-center md:justify-center sm:justify-center mb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
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
        <Footer />
      </>
    )
}
export default FindExperts;