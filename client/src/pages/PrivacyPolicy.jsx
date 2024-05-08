import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className=" mb-2 text-lg text-justify">
          As we use blockchain technology, some information, such as your wallet address, transaction amounts,
          and timestamps, is publicly available. We do not control this data as it is part of the blockchain.
        </p>
        <p className="mb-10 text-lg text-justify">
          Additionally, we collect usage data, including IP address, browser type, operating system, pages
          viewed, time spent on each page, and referring websites. We also use cookies and similar tracking
          technologies to enhance user experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-10 text-lg text-justify">
          <li className='pb-2'><strong>To provide and improve our services</strong>: We use your information to operate and maintain our platform, ensure functionality, and enhance user experience. </li>
          <li className='pb-2'><strong>For security and fraud prevention</strong>: We may use your information to detect, prevent, and respond to security incidents or fraudulent activities.</li>
          <li className='pb-2'><strong>To comply with legal obligations</strong>: We may use your information to comply with applicable laws and regulations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights and Choices</h2>
        <p className="mb-10 text-lg text-justify">
          Depending on your jurisdiction, you may have certain rights regarding your campaign information,
          including access and update, withdrawe.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-10 text-lg text-justify">
          We implement appropriate technical and organizational measures to protect your personal information
          from unauthorized access, disclosure, alteration, or destruction. 
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Children's Privacy</h2>
        <p className="mb-10 text-lg text-justify">
          Block Fund is not intended for children under the age of 18. We do not knowingly collect personal
          information from children. If we discover we have collected information from a child under 18, we will
          delete it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
        <p className="mb-10 text-lg text-justify">
          We may update this Privacy Policy from time to time. When we do, we will notify you by posting a notice
          on our website or sending an email. Please review this policy periodically for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-10 text-lg text-justify">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact
          us.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
