import React from "react";
import { useNavigate } from 'react-router-dom';
import Help from '../assets/Help.png';
import HelpFooter from '../assets/HelpFooter.png';
import HelpCards from '../components/HelpCards';
import BestPractice from '../assets/BestPractice.jpg';
import ConnectToExperts from '../assets/ConnectToExperts.jpg';
// const cardsData = [
//   {
//     image: BestPractice,
//     name: "Learn Best Paractices",
//     description: "Find advice about everything from planning your launch to shipping your product via articles, guide, webinars and more.",
//     link: "See Education Center",
//     route: "/EducationCenter",
//   },
//   {
//     image: ConnectToExperts,
//     name: "Connect to Experts",
//     description: "Take your further with these experienced companies recommended by Block Fund campaigners and staff.",
//     link: "See Expert Directory",
//     route: "/FindExperts",
//   },
// ];
// const Card = ({ image, name, description, link, route }) => {
//   const navigate = useNavigate();
// return (
//   <div className="max-w-lg rounded-[15px] overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24] m-4 hover:-translate-y-1 " onClick={() => navigate(route)}>
//       <a href="">
//       <img className="mx-auto w-full" src={image} alt={name} />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl mb-2 text-center">{name}</div>
//       <p className="text-lg text-center">{description}</p>
//       <p className="text-[#8c6dfd] text-center text-">{link}</p>
//     </div>
//     </a>
//   </div>
// );
// };

const HelpAndSupport = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="relative mb-20">
       <img src={Help} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 object-cover" />
       <div className="absolute inset-0 flex flex-col justify-center items-center">
         <div className="max-w-3xl mx-auto text-center">
           <h1 className="text-3xl lg:text-5xl font-bold ">
             How may we help you?
           </h1>
           {/* <div className="relative mt-8 lg:mt-10">
             <input type="text" placeholder="Search our help articles" className="border border-gray-300 px-10 py-2 rounded w-full lg:max-w-[458px]" />
             <svg className="absolute left-3 top-3 lg:top-2 lg:left-10 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2M15 10a5 5 0 11-10 0 5 5 0 0110 0z"></path>
             </svg>
           </div> */}
         </div>
       </div>
     </div>

      <HelpCards />

      {/* <div className="container mx-auto m-20">
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
      </div> */}

      <div className="relative">
        <img src={HelpFooter} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 mt-20 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold ">
              Still can't find what you need?
            </h1>
            <button className="bg-[#8c6dfd] text-white py-2 px-4 rounded mt-10 mb-4" onClick={() => navigate("/Contact")}>CONTACT SUPPORT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
