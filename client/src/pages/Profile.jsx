import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } =
    useStateContext();

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
    <div className={"flex flex-col p-2 "}>
      <div className={"flex flex-row p-2 space-x-2 m-2"}>
        <Card>
          <CardBody>
            <p className={"text-lg"}>
             Your Address: <span className={"font-bold"}>{address}</span>
            </p>
          </CardBody>
        </Card>
        {/* <Card>
          <CardBody>
            <p className={"text-lg"}>
              NumberOfCampaignsDonatedTo:{" "}
              <span className={"font-bold"}>
                {getNumberOfCampaignsDonatedTo(address)}
              </span>
            </p>
          </CardBody>
        </Card> */}
        <Card>
          <CardBody>
            <p className={"text-lg"}>
              Campaigns Created:{" "}
              <span className={"font-bold"}>{campaigns.length}</span>
            </p>
          </CardBody>
        </Card>
      </div>
      <DisplayCampaigns
        title="Your Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
};

export default Profile;
