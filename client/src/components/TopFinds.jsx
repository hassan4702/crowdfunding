import React, { useEffect, useState } from 'react';
import funding_img1 from '../assets/funding_img1.jpg';
import funding_img2 from '../assets/funding_img2.jpg';
import funding_img3 from '../assets/funding_img3.jpg';
import funding_img4 from '../assets/funding_img4.jpg';
import akaso from '../assets/akaso.jpg';
import AYANEO from '../assets/AYANEO.jpg';
import BLUTTI from '../assets/BLUTTI.jpg';
import VeraRing from '../assets/VeraRing.jpg';
import MinimalPhone from '../assets/MinimalPhone.jpg';
import DisplayCampaigns from './DisplayCampaigns';
import { useStateContext } from '../context';
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
  {
    id: 5,
    image: MinimalPhone,
    name: 'Funding',
    link: 'The Minimal Phone: First E-Ink QWERTY Phone',
    amount: "$518,198",
    percent: '104%',
  },
  {
    id: 6,
    image: BLUTTI,
    name: 'Funding',
    link: 'BLUTTI SwapSolar - An Ecosystem to Power & Chill',
    amount: "$719,056",
    percent: '1,438%',
  },
  {
    id: 7,
    image: VeraRing,
    name: 'Funding',
    link: 'The Vera Ring: Peace of Mind About Health',
    amount: "$322,212",
    percent: '1,611%',
  },
  {
    id: 8,
    image: akaso,
    name: 'Funding',
    link: 'AKASO Seemor: AI-ISP Full-Color Night Vision Goggle',
    amount: "$716,850",
    percent: '14,120%',
  },
  {
    id: 9,
    image: AYANEO,
    name: 'Funding',
    link: 'AYANEO AMO2:784OHS Retro Mini PC With a 4 Screen',
    amount: "$2,198,126",
    percent: '3,664%',
  },
  {
    id: 10,
    image: funding_img2,
    name: 'Funding',
    link: 'Ozlo Sleepbuds: The Next-Generation Sleepbuds',
    amount: "$3,000,000",
    percent: '30,000%',
  },
];




const TopFinds = () => {
  const { address, contract, getCampaigns } = useStateContext();
0
  const [campaigns, setCampaigns] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }
  
  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
//     <div className="max-w-[570px] rounded-[15px] overflow-hidden shadow-lg mb-4 mx-auto md:mx-0 bg-[#1c1c24] transition-transform hover:-translate-y-1">
//       <img className="w-full h-auto max-h-64" src={image} alt={name} />
//       <div className="px-6 py-8">
//         <div className="font-bold text-lg mb-3 text-[#808191]">{name}</div>
//         <hr className="mb-5" />
//         <a href="#" className="text-white text-xl font-semibold">{link}</a>
//         <div className="flex justify-between mt-2 pt-20">
//           <p className="text-white text-xl font-semibold">{amount}<span className='text-lg font-normal pl-1'>USD raised</span></p>
//           <p className="text-white text-lg font-normal">{percent}</p>
//         </div>
//         <div className=" h-2 bg-[#8c6dfd] rounded-full mt-1"></div>
//       </div>
//     </div>
//   );
// };

// const TopFinds = () => {
//   return (
//     <div className="container mx-auto mt-5">
//       <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mt-10 sm:mt-20 mb-6'>10 Cool & Clever Finds</h1>
// <p className='text-lg sm:text-xl lg:text-2xl text-center px-4 sm:px-32 mb-10'>Discover your next "a-ha" moment in our roundup of standout projects, from live crowdfunding & InDemand campaigns to innovative products shipping now.</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
//         {cardsData.map((card) => (
//           <Card key={card.id} {...card} />
//         ))}
//       </div>
//     </div>
<DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default TopFinds;
