import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([
    {
      title: "Fundraiser for the poor",
      description: "Help the poor",
      target: "100000",
      deadline: "2021-09-30T00:00:00.000Z",
      amountCollected: "0",
      image: "https://images.unsplash.com/photo-1601751039435-4b1a2d2b1b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGZ1bmRyYWlzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      pId: "0",
      imageHash: "QmZ4YBZ4Q9zYgJ5n7yvZcV8i7Y6K2YX8Qw3eZw9Q1gZ6H5",
      amount: "0"
    },
    {
      title: "Fundraiser for the poor",
      description: "Help the poor",
      target: "100000",
      deadline: "2021-09-30T00:00:00.000Z",
      amountCollected: "0",
      image: "https://images.unsplash.com/photo-1601751039435-4b1a2d2b1b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGZ1bmRyYWlzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      pId: "0",
      imageHash: "QmZ4YBZ4Q9zYgJ5n7yvZcV8i7Y6K2YX8Qw3eZw9Q1gZ6H5",
      amount:"90"
    }
  ]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Profile