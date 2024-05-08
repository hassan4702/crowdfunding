import React from 'react';
import CategoriesCards from './CategoriesCards'

const CategoriesComponent = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-4 pb-10">
      <h1 className="text-3xl font-semibold text-center mb-4">Which categories interest you?</h1>
      <p className="text-center mb-4">Discover projects just for you and get great recommendations when you select your interests.</p>
      <p className="text-center mb-5">Explore our top categories</p>
      <CategoriesCards />
    </div>
    </>
  );
};

export default CategoriesComponent;
