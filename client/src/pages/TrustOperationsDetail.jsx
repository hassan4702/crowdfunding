import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const TrustOperationsDetail = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Trust Operations</h1>
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Commitment to Trust and Safety</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            At Block Fund, trust and safety are our top priorities. We ensure a secure and transparent platform for both campaigners and backers. Here’s how we protect our community:
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Fraud Prevention</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            We employ advanced algorithms and manual reviews to detect and prevent fraudulent activities. Our team monitors campaigns for suspicious behavior and takes immediate action when necessary.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Data Privacy</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Your privacy is paramount. We adhere to strict data protection regulations and use state-of-the-art encryption to safeguard your personal information.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Dispute Resolution</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            We are here to help resolve any disputes between campaigners and backers. We provide mediation services to ensure fair outcomes and maintain the integrity of our platform.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Transparency</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            We believe in transparency. Our blockchain-based platform ensures that all transactions are immutable and publicly accessible. This fosters trust and accountability within our community.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Security Measures</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Our platform is built with robust security measures to protect against cyber threats. Regular security audits and updates keep our system secure and reliable.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Reporting Issues</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            If you encounter any issues or suspect fraudulent activity, please report it to our <a className="text-[#8c6dfd] underline cursor-pointer" onClick={() => navigate("/Contact")}>contact page</a> immediately. We take all reports seriously and will investigate promptly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrustOperationsDetail;
