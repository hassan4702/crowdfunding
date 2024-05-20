import React from 'react';
import Help from '../assets/Help.png';

const HelpDetails = ({title,description}) => {
  return (
    <>
        <div className="relative mb-20">
            <img src={Help} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl lg:text-5xl font-bold ">
                    {title}
                </h1>
                </div>
            </div>
        </div>
        <p className='max-w-5xl text-justify pl-20'>
            {description}
        </p>
        
    </>
  );
};

export default HelpDetails;
