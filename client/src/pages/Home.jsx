import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import CategoriesComponent from '../components/CategoriesComponent';
import ImageGallery from '../components/ImageGallery';
import BacktheProject from '../components/BacktheProject';
import Upload from '../components/IPFSupload';
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([
    {
      title: "Building a gaming PC",
      description: "I want to create an ultimate gaming PC " +
          "Processor (CPU):\n" +
          "\n" +
          "AMD Ryzen 9 series or Intel Core i9 series for top-tier performance.\n" +
          "Look for high core counts and clock speeds for better multitasking and gaming performance.\n" +
          "Graphics Card (GPU):\n" +
          "\n" +
          "NVIDIA GeForce RTX 30 series (e.g., RTX 3090, RTX 3080) or AMD Radeon RX 6000 series for cutting-edge graphics performance.\n" +
          "The choice between NVIDIA and AMD often comes down to personal preference and availability.\n" +
          "Memory (RAM):\n" +
          "\n" +
          "32GB to 64GB of high-speed DDR4 RAM for optimal gaming and multitasking.\n" +
          "Look for RAM with a high clock speed and low latency.\n" +
          "Storage:\n" +
          "\n" +
          "A fast NVMe SSD (1TB or more) for the operating system and frequently played games for faster load times.\n" +
          "Additional large-capacity HDD or SSD for mass storage.\n" +
          "Motherboard:\n" +
          "\n" +
          "Choose a motherboard that supports the CPU and has features you need, such as PCIe 4.0 support, multiple M.2 slots, and sufficient USB ports.\n" +
          "Power Supply (PSU):\n" +
          "\n" +
          "A high-quality power supply with enough wattage to support your components and potential future upgrades.\n" +
          "Consider a modular or semi-modular PSU for better cable management.\n" +
          "Cooling:\n" +
          "\n" +
          "High-performance CPU cooler for efficient cooling, especially if you plan to overclock.\n" +
          "Consider an all-in-one liquid cooler for even better temperature control.\n" +
          "Case:\n" +
          "\n" +
          "A spacious case with good airflow and cable management options.\n" +
          "Choose a case that supports your motherboard form factor and has room for your GPU.\n" +
          "Operating System:\n" +
          "\n" +
          "Windows 10 is a common choice for gaming due to its wide compatibility with games and applications.\n" +
          "Peripherals:\n" +
          "\n" +
          "A high-refresh-rate gaming monitor for a smoother gaming experience.\n" +
          "Mechanical gaming keyboard, gaming mouse, and a comfortable headset.\n" +
          "Gaming controller if you prefer it for certain games.",
      target: "10",
      deadline: "2024-02-30T00:00:00.000Z",
      amountCollected: "0.0585",
      pId: "3",
      image: "https://cdn.mos.cms.futurecdn.net/MTNYEyWTNTPURkADAP2p7h.jpg",
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      amount: "0"
    },
    {
      title: "hope Village for the poor",
      description: "Help the poor by creating a village for them to live in and get food , water , shelter , education and healthcare." +
          " It will be located in the middle of the desert in Egypt",
      target: "1000",
      deadline: "2024-07-30T00:00:00.000Z",
      amountCollected: "500",
      pId: "0",
      image: "https://i.ibb.co/DYvFbxZ/Main-Image-2.png",
      owner: "0x9B78Da6a701c568545dCfcB03FcB875f56beddC4",
      amount:"90"
    },
    {
      title: "Building a gaming PC",
      description: "I want to create an ultimate gaming PC " +
          "Processor (CPU):\n" +
          "\n" +
          "AMD Ryzen 9 series or Intel Core i9 series for top-tier performance.\n" +
          "Look for high core counts and clock speeds for better multitasking and gaming performance.\n" +
          "Graphics Card (GPU):\n" +
          "\n" +
          "NVIDIA GeForce RTX 30 series (e.g., RTX 3090, RTX 3080) or AMD Radeon RX 6000 series for cutting-edge graphics performance.\n" +
          "The choice between NVIDIA and AMD often comes down to personal preference and availability.\n" +
          "Memory (RAM):\n" +
          "\n" +
          "32GB to 64GB of high-speed DDR4 RAM for optimal gaming and multitasking.\n" +
          "Look for RAM with a high clock speed and low latency.\n" +
          "Storage:\n" +
          "\n" +
          "A fast NVMe SSD (1TB or more) for the operating system and frequently played games for faster load times.\n" +
          "Additional large-capacity HDD or SSD for mass storage.\n" +
          "Motherboard:\n" +
          "\n" +
          "Choose a motherboard that supports the CPU and has features you need, such as PCIe 4.0 support, multiple M.2 slots, and sufficient USB ports.\n" +
          "Power Supply (PSU):\n" +
          "\n" +
          "A high-quality power supply with enough wattage to support your components and potential future upgrades.\n" +
          "Consider a modular or semi-modular PSU for better cable management.\n" +
          "Cooling:\n" +
          "\n" +
          "High-performance CPU cooler for efficient cooling, especially if you plan to overclock.\n" +
          "Consider an all-in-one liquid cooler for even better temperature control.\n" +
          "Case:\n" +
          "\n" +
          "A spacious case with good airflow and cable management options.\n" +
          "Choose a case that supports your motherboard form factor and has room for your GPU.\n" +
          "Operating System:\n" +
          "\n" +
          "Windows 10 is a common choice for gaming due to its wide compatibility with games and applications.\n" +
          "Peripherals:\n" +
          "\n" +
          "A high-refresh-rate gaming monitor for a smoother gaming experience.\n" +
          "Mechanical gaming keyboard, gaming mouse, and a comfortable headset.\n" +
          "Gaming controller if you prefer it for certain games.",
      target: "10",
      deadline: "2024-02-30T00:00:00.000Z",
      amountCollected: "0.0585",
      pId: "3",
      image: "https://cdn.mos.cms.futurecdn.net/MTNYEyWTNTPURkADAP2p7h.jpg",
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      amount: "0"
    },
    {
      title: "hope Village for the poor",
      description: "Help the poor by creating a village for them to live in and get food , water , shelter , education and healthcare." +
          " It will be located in the middle of the desert in Egypt",
      target: "1000",
      deadline: "2024-07-30T00:00:00.000Z",
      amountCollected: "500",
      pId: "0",
      image: "https://i.ibb.co/DYvFbxZ/Main-Image-2.png",
      owner: "0x9B78Da6a701c568545dCfcB03FcB875f56beddC4",
      amount:"90"
    },
    {
      title: "Building a gaming PC",
      description: "I want to create an ultimate gaming PC " +
          "Processor (CPU):\n" +
          "\n" +
          "AMD Ryzen 9 series or Intel Core i9 series for top-tier performance.\n" +
          "Look for high core counts and clock speeds for better multitasking and gaming performance.\n" +
          "Graphics Card (GPU):\n" +
          "\n" +
          "NVIDIA GeForce RTX 30 series (e.g., RTX 3090, RTX 3080) or AMD Radeon RX 6000 series for cutting-edge graphics performance.\n" +
          "The choice between NVIDIA and AMD often comes down to personal preference and availability.\n" +
          "Memory (RAM):\n" +
          "\n" +
          "32GB to 64GB of high-speed DDR4 RAM for optimal gaming and multitasking.\n" +
          "Look for RAM with a high clock speed and low latency.\n" +
          "Storage:\n" +
          "\n" +
          "A fast NVMe SSD (1TB or more) for the operating system and frequently played games for faster load times.\n" +
          "Additional large-capacity HDD or SSD for mass storage.\n" +
          "Motherboard:\n" +
          "\n" +
          "Choose a motherboard that supports the CPU and has features you need, such as PCIe 4.0 support, multiple M.2 slots, and sufficient USB ports.\n" +
          "Power Supply (PSU):\n" +
          "\n" +
          "A high-quality power supply with enough wattage to support your components and potential future upgrades.\n" +
          "Consider a modular or semi-modular PSU for better cable management.\n" +
          "Cooling:\n" +
          "\n" +
          "High-performance CPU cooler for efficient cooling, especially if you plan to overclock.\n" +
          "Consider an all-in-one liquid cooler for even better temperature control.\n" +
          "Case:\n" +
          "\n" +
          "A spacious case with good airflow and cable management options.\n" +
          "Choose a case that supports your motherboard form factor and has room for your GPU.\n" +
          "Operating System:\n" +
          "\n" +
          "Windows 10 is a common choice for gaming due to its wide compatibility with games and applications.\n" +
          "Peripherals:\n" +
          "\n" +
          "A high-refresh-rate gaming monitor for a smoother gaming experience.\n" +
          "Mechanical gaming keyboard, gaming mouse, and a comfortable headset.\n" +
          "Gaming controller if you prefer it for certain games.",
      target: "10",
      deadline: "2024-02-30T00:00:00.000Z",
      amountCollected: "0.0585",
      pId: "3",
      image: "https://cdn.mos.cms.futurecdn.net/MTNYEyWTNTPURkADAP2p7h.jpg",
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      amount: "0"
    },
    {
      title: "hope Village for the poor",
      description: "Help the poor by creating a village for them to live in and get food , water , shelter , education and healthcare." +
          " It will be located in the middle of the desert in Egypt",
      target: "1000",
      deadline: "2024-07-30T00:00:00.000Z",
      amountCollected: "500",
      pId: "0",
      image: "https://i.ibb.co/DYvFbxZ/Main-Image-2.png",
      owner: "0x9B78Da6a701c568545dCfcB03FcB875f56beddC4",
      amount:"90"
    },
    {
      title: "Building a gaming PC",
      description: "I want to create an ultimate gaming PC " +
          "Processor (CPU):\n" +
          "\n" +
          "AMD Ryzen 9 series or Intel Core i9 series for top-tier performance.\n" +
          "Look for high core counts and clock speeds for better multitasking and gaming performance.\n" +
          "Graphics Card (GPU):\n" +
          "\n" +
          "NVIDIA GeForce RTX 30 series (e.g., RTX 3090, RTX 3080) or AMD Radeon RX 6000 series for cutting-edge graphics performance.\n" +
          "The choice between NVIDIA and AMD often comes down to personal preference and availability.\n" +
          "Memory (RAM):\n" +
          "\n" +
          "32GB to 64GB of high-speed DDR4 RAM for optimal gaming and multitasking.\n" +
          "Look for RAM with a high clock speed and low latency.\n" +
          "Storage:\n" +
          "\n" +
          "A fast NVMe SSD (1TB or more) for the operating system and frequently played games for faster load times.\n" +
          "Additional large-capacity HDD or SSD for mass storage.\n" +
          "Motherboard:\n" +
          "\n" +
          "Choose a motherboard that supports the CPU and has features you need, such as PCIe 4.0 support, multiple M.2 slots, and sufficient USB ports.\n" +
          "Power Supply (PSU):\n" +
          "\n" +
          "A high-quality power supply with enough wattage to support your components and potential future upgrades.\n" +
          "Consider a modular or semi-modular PSU for better cable management.\n" +
          "Cooling:\n" +
          "\n" +
          "High-performance CPU cooler for efficient cooling, especially if you plan to overclock.\n" +
          "Consider an all-in-one liquid cooler for even better temperature control.\n" +
          "Case:\n" +
          "\n" +
          "A spacious case with good airflow and cable management options.\n" +
          "Choose a case that supports your motherboard form factor and has room for your GPU.\n" +
          "Operating System:\n" +
          "\n" +
          "Windows 10 is a common choice for gaming due to its wide compatibility with games and applications.\n" +
          "Peripherals:\n" +
          "\n" +
          "A high-refresh-rate gaming monitor for a smoother gaming experience.\n" +
          "Mechanical gaming keyboard, gaming mouse, and a comfortable headset.\n" +
          "Gaming controller if you prefer it for certain games.",
      target: "10",
      deadline: "2024-02-30T00:00:00.000Z",
      amountCollected: "0.0585",
      pId: "3",
      image: "https://cdn.mos.cms.futurecdn.net/MTNYEyWTNTPURkADAP2p7h.jpg",
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      amount: "0"
    },
    {
      title: "hope Village for the poor",
      description: "Help the poor by creating a village for them to live in and get food , water , shelter , education and healthcare." +
          " It will be located in the middle of the desert in Egypt",
      target: "1000",
      deadline: "2024-07-30T00:00:00.000Z",
      amountCollected: "500",
      pId: "0",
      image: "https://i.ibb.co/DYvFbxZ/Main-Image-2.png",
      owner: "0x9B78Da6a701c568545dCfcB03FcB875f56beddC4",
      amount:"90"
    },



  ]);

  const { address, contract, getCampaigns } = useStateContext();

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
<>
    {/* <Upload/> */}
    {/* <TermsOfUse /> */}
    <Carousel />
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
    <ImageGallery />
    <BacktheProject />
    <CategoriesComponent />
    <Footer />
</>
  )
}

export default Home