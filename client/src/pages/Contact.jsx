import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 pt-20 px-4">
      <div className="mx-auto">
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-auto lg:flex-shrink-0 mb-2 lg:mb-0">
            <a href="#" className="inline-block">Block Fund Help Center &gt; Submit a request</a>
          </div>
          <div className="lg:flex-1 lg:ml-4 order-1 lg:order-none">
            <input type="text" placeholder="Search" className="border border-gray-300 px-4 py-2 rounded w-full lg:max-w-[458px]" />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-8 mt-20">Have a question?</h2>
        <p className="mb-4">To get started, please log in to your Block Fund account if you have one.</p>
        <div className="mb-8 flex flex-col lg:flex-row lg:justify-center">
          <button className="bg-[#8c6dfd] hover:bg-[#7d60e7] px-6 py-3 rounded mb-2 lg:mb-0 text-uppercase w-full lg:w-auto lg:mr-4">LOGIN</button>
          <button className="bg-[#8c6dfd] hover:bg-[#7d60e7] px-6 py-3 rounded text-uppercase w-full lg:w-auto">I DON'T HAVE AN ACCOUNT</button>
        </div>
        <hr className="border-gray-300 my-8" /> 
      </div>
    </div>
  );
};

export default Contact;
