import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';
import {Button} from "@nextui-org/react";
import { useStorageUpload } from '@thirdweb-dev/react';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    category:'Fundraiser',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });
  const [file, setFile] = useState(null);
  const { mutateAsync: upload } = useStorageUpload();
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // setForm({ ...form, image: selectedFile });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select an image file');
      return;
    }
    setIsLoading(true);
    try {
      const uploadUrl = await upload({
        data: [file],
        options: { uploadWithGatewayUrl: true },
      });
      setForm({ ...form, image: uploadUrl[0].toString() });
      console.log('uploadUrl:', uploadUrl[0].toString())
      console.log('form:', form); 
      await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18),image: uploadUrl[0].toString()});
      navigate('/');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className=" flex justify-center items-center flex-col rounded-[10px] sm:p-10 mt-8 p-4 bg-white dark:bg-[#1c1c24]">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#8c6dfd] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
          <FormField
            labelName="Select Category *"
            placeholder="Select..."
            isCategory
            value={form.category}
            handleChange={(e) => handleFormFieldChange("category", e)}
          />
        </div>
        <FormField
            labelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />

        <div className="w-full flex justify-center items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="file"
            // value={form.image}
            handleChange={handleFileChange}
          />
          

          <div className="flex justify-center items-center mt-[40px]">
            <Button
                type={"submit"}
                fullWidth={true}
                className={
                  "font-epilogue h-[50px] font-semibold text-[18px]  text-white px-4 rounded-[10px] bg-[#8c6dfd]"
                }

              >
              Submit new campaign
              </Button>
          </div>
      </form>
    </div>
  )
}

export default CreateCampaign