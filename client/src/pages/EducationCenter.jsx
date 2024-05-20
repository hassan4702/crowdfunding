import React from 'react';
import Footer from '../components/Footer';

const EducationCenter = () => {
  return (
    <>
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-semibold mb-14">How to Create a Campaign</h1>
      <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-800 dark:text-gray-200">
          <li>
            <strong>Enter Your Name:</strong> 
            <p className="mt-1">Type your full name in the "Your Name" field. This helps identify you as the campaign creator and adds credibility to your campaign.</p>
          </li>
          <li>
            <strong>Campaign Title:</strong> 
            <p className="mt-1">Provide a clear and descriptive title for your campaign. A good title can attract more attention and potential donors. Examples: "Help Fund Local Animal Shelter" or "Support Jane's College Education".</p>
          </li>
          <li>
            <strong>Select Category:</strong> 
            <p className="mt-1">Choose the appropriate category for your campaign from the dropdown menu. This helps users find campaigns that match their interests. Categories could include "Fundraiser", "Personal", "Non Profit", "Medical", "Crisis Relief", "Education", "Emergency", "Sports", "Environment", "Family", "Competition", "Memorial" and "Research".</p>
          </li>
          <li>
            <strong>Write Your Story:</strong> 
            <p className="mt-1">Share the details and purpose of your campaign in the "Story" text area. Explain why you are raising funds, how the money will be used, and who will benefit from the campaign. Be honest and transparent to build trust with potential donors.</p>
          </li>
          <li>
            <strong>Set a Goal:</strong> 
            <p className="mt-1">Specify the goal (how much ETH you need). For example, "ETH 0.50". Make sure to set a realistic goal that matches your needs and expenses. It's important to clearly communicate why you need this amount and how it will be utilized.</p>
          </li>
          <li>
            <strong>End Date:</strong> 
            <p className="mt-1">Pick the end date for your campaign from the date picker. This is the deadline by which you hope to reach your fundraising goal. Setting an end date creates a sense of urgency and encourages donors to act quickly.</p>
          </li>
          <li>
            <strong>Upload an Image:</strong> 
            <p className="mt-1">Choose an image that represents your campaign. A compelling image can draw more attention to your campaign and help tell your story. Make sure the image is relevant, high-quality, and visually appealing.</p>
          </li>
          <li>
            <strong>Submit:</strong> 
            <p className="mt-1">Click the "Submit new campaign" button to create your campaign. Once submitted, your campaign will be live and you can start sharing it with your network to attract donations.</p>
          </li>
        </ol>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EducationCenter;
