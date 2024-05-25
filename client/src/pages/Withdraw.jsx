// // import React from "react";
// // import ExploreProjects from "./ExploreProjects";

// // const Withdraw = () => {

// //   // Filter function to check if the campaign has fulfilled its Ethereum goal
// //   const filterFulfilledCampaigns = (campaign) => {
// //     return parseFloat(campaign.amountCollected) == parseFloat(campaign.target);
// //   };

// //   return (
// //     <>
// //       {/* <div className="">
// //         <h1>All Fulfilled Campaigns</h1>
// //       </div> */}
// //       <ExploreProjects filter={filterFulfilledCampaigns} />
// //     </>
// //   );
// // };

// // export default Withdraw;
// import React, { useState, useEffect } from "react";
// import { useStateContext } from "../context";
// import { AllCampaigns, Loader } from "../components";
// import { useNavigate } from "react-router-dom";

// const Withdraw = () => {
//   const { contract, getCampaigns } = useStateContext();
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(true);
//   const [campaigns, setCampaigns] = useState([]);

//   const fetchCampaigns = async () => {
//     setIsLoading(true);
//     const data = await getCampaigns();
//     setCampaigns(data || []);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     if (contract) fetchCampaigns();
//   }, [contract]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Campaigns that can be withdrawed
//       </h1>
//       <div className="flex">
//         {campaigns.length === 0 ? (
//           <div>No campaigns found.</div>
//         ) : (
//           <AllCampaigns
//             campaigns={campaigns.filter(
//               (campaign) => campaign.amountCollected >= campaign.target
//             )}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Withdraw;

import React, { useState, useEffect } from "react";

import { AllCampaigns, DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="flex">
      {campaigns.length === 0 ? (
        <div>No campaigns found.</div>
      ) : (
        <AllCampaigns
          campaigns={campaigns.filter(
            (campaign) => campaign.amountCollected >= campaign.target
          )}
        />
      )}
    </div>
  );
};

export default Profile;
