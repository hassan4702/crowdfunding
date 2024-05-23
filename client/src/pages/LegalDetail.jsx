import React from 'react';
import Footer from '../components/Footer';

const LegalDetail = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Legal Policies and Processes</h1>
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Introduction</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Welcome to Block Fund's legal page. Here, you will find information about our legal policies, terms of service, privacy policy, and other important legal documents. We are committed to maintaining a transparent and secure platform for our users.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Terms of Use</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Our Terms of Service outline the rules and regulations for using the Block Fund platform. By using our services, you agree to comply with these terms. The Terms of Service cover topics such as account creation, user responsibilities, prohibited activities, and more.
          </p>
          <a href="/TermsOfUse" className="text-[#8c6dfd] underline mb-4 block">Read our Terms of Use</a>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Privacy Policy</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Our Privacy Policy explains how we collect, use, and protect your personal information. We value your privacy and are committed to safeguarding your data. The Privacy Policy covers data collection practices, data security, and more.
          </p>
          <a href="/PrivacyPolicy" className="text-[#8c6dfd] underline mb-4 block">Read our Privacy Policy</a>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Compliance with Laws</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Block Fund complies with all applicable laws and regulations. We ensure that our platform is used for lawful purposes and take action against any illegal activities. Users are expected to adhere to all relevant laws when using our services.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Intellectual Property</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            All content on the Block Fund platform, including text, graphics, logos, and software, is the property of Block Fund or its content suppliers. Unauthorized use of our intellectual property is strictly prohibited. We respect the intellectual property rights of others and expect our users to do the same.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Dispute Resolution</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            In the event of a dispute, Block Fund offers a comprehensive dispute resolution process. Users can <a href="/contact" className="text-[#8c6dfd] cursor-pointer">contact us</a> directly. We aim to resolve disputes fairly and promptly to ensure a positive experience for all users.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Changes to Policies</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Block Fund reserves the right to update our legal policies at any time. We will notify users of any significant changes to our policies. It is your responsibility to review our legal documents regularly to stay informed about our terms and policies.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LegalDetail;
