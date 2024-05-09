import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useStorageUpload } from '@thirdweb-dev/react';
import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';
import { useLocation, useNavigate } from 'react-router-dom';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

const UpdateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { updateCampaign } = useStateContext();
    const { state } = useLocation();
    const [form, setForm] = useState({
        id: `${state.pId}`,
        title: `${state.title}`,
        description: `${state.description}`,
        category:`${state.category}`,
        target: `${state.target}`, 
        deadline: `${state.deadline}`,
        image: `${state.image}`,
      });
      const [file, setFile] = useState(null);
      const { mutateAsync: upload } = useStorageUpload();
      const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
        console.log(form)
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
        await updateCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18),image: uploadUrl[0].toString()});
        navigate('/');
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image. Please try again.');
      } finally {
        setIsLoading(false);
      }
      }
      return (
        
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Edit a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          {/* {state.pId}
          <FormField 
            labelName="Campaign ID *"
            placeholder="123"
            inputType="text"
            value={form.id}
            handleChange={(e) => handleFormFieldChange('id', e)}
          /> */}
        </div>
        <div className="flex flex-wrap gap-[40px]">
          {/* <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          /> */}
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

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get (100 - platformFee)% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
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
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
            />
          </div>
      </form>
    </div>
  )
}

export default UpdateCampaign