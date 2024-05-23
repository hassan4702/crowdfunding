import React from 'react';
import Footer from '../components/Footer';

const CampaignNextStep = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Campaign Next Steps</h1>
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Congratulations on Launching Your Campaign!</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            You've taken the first step towards making your vision a reality. Here are the next steps to ensure your campaign's success:
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">1. Share Your Campaign</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Spread the word about your campaign through social media, email, and word of mouth. The more people you reach, the higher the chances of meeting your funding goal.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">2. Engage with Your Backers</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Keep your backers updated with regular updates. Share progress, new developments, and any milestones achieved. Engaging with your backers builds trust and encourages further support.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">3. Promote Your Campaign</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Use promotional strategies to attract more backers. Consider running ads, collaborating with influencers, and leveraging any media coverage. The more visible your campaign, the more backers you can attract.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">4. Monitor Your Campaign</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Keep an eye on your campaign's performance. Track donations, monitor feedback, and adjust your strategies as needed.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">5. Plan Your Post-Campaign Steps</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Think ahead about what you'll do after your campaign ends. Plan how you'll fulfill rewards, update your backers, and continue engaging with your new community. A well-executed post-campaign plan ensures lasting success.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">6. Seek Help if Needed</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            If you encounter any issues or need advice, don't hesitate to reach out. We are <a className="text-[#8c6dfd] underline cursor-pointer" onClick={() => navigate("/Contact")}>here</a> to help you succeed.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampaignNextStep;
