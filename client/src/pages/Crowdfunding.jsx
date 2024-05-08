import React from 'react';
import HelpFooter from '../assets/HelpFooter.png';

const Crowdfunding = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-4">What is Crowdfunding?</h1>
      <p className="text-lg mb-10 text-justify">
        Crowdfunding is a method of raising funds for a project, business, cause, or individual
        initiative by collecting small amounts of money from a large number of people, typically via
        the internet. It has gained significant popularity in recent years due to its democratizing
        effect on fundraising and its ability to connect people with shared interests.
      </p>

      <h1 className="text-3xl font-bold text-center mb-4">What is Block Fund?</h1>
      <p className="text-lg mb-10 text-justify">
            Block Fund is a platform designed to facilitate crowdfunding campaigns using blockchain technology. It allows project creators to raise funds from a global audience, while backers gain a transparent and secure way to support projects they believe in. The platform uses smart contracts to automate funding, disbursement,  ensuring that the process is efficient and trusted.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Benefits of Crowdfunding</h2>
      <ul className="list-disc pl-6 mb-10 text-lg text-justify">
        <li className='pb-2'><strong>Access to Capital</strong>: Crowdfunding provides an alternative to traditional funding sources, such as banks or venture capital.</li>
        <li className='pb-2'><strong>Market Validation</strong>: It allows project creators to test the market and gauge interest in their idea before full-scale production.</li>
        <li className='pb-2'><strong>Community Building</strong>: It fosters a community of backers who are invested in the success of the project or cause.</li>
        <li className='pb-2'><strong>Reduced Risk</strong>: Crowdfunding can reduce financial risk by pre-selling products or gathering support before significant investments are made.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Challenges of Crowdfunding</h2>
      <ul className="list-disc pl-6 mb-10 text-lg text-justify">
        <li className='pb-2'><strong>Competition</strong>: With so many projects seeking funding, it can be challenging to stand out.</li>
        <li className='pb-2'><strong>Responsibility</strong>: Successful crowdfunding campaigns create a commitment to deliver on promises made to backers.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Key Considerations for a Successful Crowdfunding Campaign</h2>
      <ul className="list-disc pl-6 mb-10 text-lg text-justify">
        <li className='pb-2'><strong>Clear Vision</strong>: A compelling story or vision that resonates with potential backers.</li>
        <li className='pb-2'><strong>Effective Marketing</strong>: Use social media, email, and other channels to promote the campaign.</li>
        <li className='pb-2'><strong>Transparency</strong>: Communicate openly with backers about progress and challenges.</li>
        <li className='pb-2'><strong>Fulfillment Strategy</strong>: Have a plan for delivering rewards or products to backers on time.</li>
      </ul>

      <p className="text-lg mb-10 text-justify">
        Crowdfunding has revolutionized how individuals and businesses raise funds, allowing them to
        connect with a global audience and turn ideas into reality. However, it requires careful
        planning, clear communication, and a commitment to fulfilling promises to ensure a successful outcome.
      </p>
    </div>

    <div className="relative">
        <img src={HelpFooter} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold ">
              Still can't find what you need?
            </h1>
            <button className="bg-[#8c6dfd] text-white py-2 px-4 rounded mt-10 mb-4">CONTACT SUPPORT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crowdfunding;
