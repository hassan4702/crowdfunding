import React from 'react';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-8 min-h-screen">
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Information We Collect</h2>
          <p className="mb-2 text-lg text-justify text-gray-800 dark:text-gray-200">
            As we use blockchain technology, some information, such as your wallet address, transaction amounts,
            and timestamps, is publicly available. We do not control this data as it is part of the blockchain.
          </p>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            Additionally, we collect usage data, including IP address, browser type, operating system, pages
            viewed, time spent on each page, and referring websites. We also use cookies and similar tracking
            technologies to enhance user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            <li className="pb-2"><strong>To provide and improve our services</strong>: We use your information to operate and maintain our platform, ensure functionality, and enhance user experience.</li>
            <li className="pb-2"><strong>For security and fraud prevention</strong>: We may use your information to detect, prevent, and respond to security incidents or fraudulent activities.</li>
            <li className="pb-2"><strong>To comply with legal obligations</strong>: We may use your information to comply with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Your Rights and Choices</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            Depending on your jurisdiction, you may have certain rights regarding your campaign information,
            including access, update, and withdrawal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Data Security</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            We implement appropriate technical and organizational measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Children's Privacy</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            Block Fund is not intended for children under the age of 18. We do not knowingly collect personal
            information from children. If we discover we have collected information from a child under 18, we will
            delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Changes to This Privacy Policy</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            We may update this Privacy Policy from time to time. When we do, we will notify you by posting a notice
            on our website or sending an email. Please review this policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact Us</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            If you have any questions or need assistance, we are <a href="/contact" className="text-[#8c6dfd] underline mb-4">here</a> to help. 
          </p>
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
