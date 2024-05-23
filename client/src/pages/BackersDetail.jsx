import React from 'react';
import Footer from '../components/Footer';

const BackersDetail = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Guide for Backers</h1>
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">How to Evaluate and Back Campaigns</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Supporting a crowdfunding campaign can be a rewarding experience. Here's how you can evaluate and back campaigns on Block Fund:
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">1. Explore Campaigns</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Browse through various campaigns on the Block Fund platform. You can use filters to find campaigns that match your interests. Each campaign has a detailed page with information about the project, funding goals, timeline, and updates from the campaign creator.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">2. Evaluate the Campaign</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Before backing a campaign, take the time to evaluate its credibility and feasibility. Look at the campaign details, creator's background, updates, and comments from other backers. Check if the campaign has a clear plan and realistic goals.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">3. Back the Campaign</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Once you've decided to support a campaign, click the "Fund" or "Donate" button. You will be able to enter the amount you wish to contribute. You can also choose from various reward tiers offered by the campaign creator. Payments are processed securely through MetaMask.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">4. Manage Your Contributions</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            After backing a campaign, you can manage your contributions through your Block Fund profile. You can track the progress of the campaigns you've supported, communicate with the campaign creators, and stay updated with their latest posts and developments.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Understanding Block Fund Policies</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Block Fund is committed to maintaining a secure and transparent platform. Here are some key policies to be aware of as a backer:
          </p>

          <a href="/PrivacyPolicy" className="text-[#8c6dfd] underline mb-4 block">Read our Privacy Policy</a>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Terms of Service</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            By using Block Fund, you agree to our Terms of Service. These terms outline your rights and responsibilities as a user, including acceptable use policies, intellectual property rights, and dispute resolution procedures.
          </p>
          <a href="/TermsOfUse" className="text-[#8c6dfd] underline mb-4 block">Read our Terms of use</a>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Support</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            If you have any questions or need assistance, we are <a href="/contact" className="text-[#8c6dfd] underline mb-4">here</a> to help. 
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BackersDetail;
