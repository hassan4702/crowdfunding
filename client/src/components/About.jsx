import React from 'react';
import about from '../assets/about.jpg';
import mission from '../assets/mission.jpg';
const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-center mb-8">About Us</h1>

      <p className="text-lg sm:text-xl lg:text-2xl \ text-center mb-8 lg:px-32 lg:text-justify">
      Block Fund is a Blockchain based Crowd Funding platform, designed to overcome the challenges faced by traditional crowdfunding platforms like Kickstarter. Our primary focus is to revolutionize the funding landscape by introducing transparency, security, efficiency, eliminating high intermediary costs and geographical limitations to transform the way projects are funded. 
      </p>

      <img src={mission} alt="About Us" className="w-full mb-8"/>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">Block Fund Innovation</h2>

      <p className="text-lg sm:text-xl lg:text-lg text-center mb-8">
      Block Fund aims to redefine the funding landscape, providing a platform where ideas can flourish and communities can support impactful projects worldwide.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
        <div className="sm:w-1/3 px-4 mb-4">
          <p className="text-lg lg:text-normal text-center">Products on Block Fund are unique, more interesting. They aren’t like what I’d find on the market. They aren’t mainstream. It’s the newest tech that companies don’t even know will be popular.</p>
        </div>
        <div className="sm:w-1/3 px-4 mb-4">
          <p className="text-lg text-center lg:text-normal">Block Fund look for things that could be useful in my everyday life. I look for innovation – what kind of features does this have in addition to what’s already on the market.</p>
        </div>
        <div className="sm:w-1/3 px-4 mb-4">
          <p className="text-lg text-center lg:text-normal">Block Fund allows you to connect your creations with a community that is eager for innovation. The team behind the platform also provided great feedback based on their experience.</p>
        </div>
      </div>

      <img src={about} alt="About Us" className="w-full mb-8"/>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">The Creative Independent</h2>

      <p className="text-lg sm:text-xl lg:text-lg lg:text-justify lg:px-32 text-center mb-8">
      Block Fund’s support for creative work goes beyond our platform. We publish The Creative Independent (TCI) as a way to share advice and illuminate the many, many routes to living a creative life. 
      </p>

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">Our team</h3>

      <p className="text-lg sm:text-xl lg:text-lg text-center lg:text-justify lg:px-32">
      We're an independent company of passionate people working together. We spend our time designing and building Block Fund, forging community around creative projects, and supporting the creative ecosystem around us. We’re developers, designers, support specialists, writers.
      </p>
    </div>
  );
};

export default About;
