import React, { useState, useEffect } from 'react';
import { signIn } from '../utils/auth';
import Logo from './Logo';

const descriptions = [
  'Struggling with meal ideas? Our app uses OpenAI to create delicious recipes from the ingredients you already have at home or are planning to have.',
  'Easily manage your kitchen! Add your inventory, equipment, and generate personalized recipes that automatically update your stock.',
  'Save, rate, and take notes on your favorite recipes all while spending less time staring at your cabinets wondering what you are going to cook.',
];

function Signin() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full mx-10 rounded-lg h-5/6">
        <div className="flex flex-col items-center justify-center w-1/2 p-8 rounded-l-lg bg-sea-green">
          {/* Left content */}
          <div className="space-y-6 text-center">
            <div className="flex justify-center ">
              <Logo size="medium" />
            </div>
            <h1 className="text-3xl text-kitchen-gray-600">Helping You Cook</h1>
            <p className=" text-stone-500">{descriptions[currentIndex]}</p>
            <div className="flex justify-center space-x-4">
              {descriptions.map((description, index) => (
                <div
                  key={description}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-forest-green' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 p-8 bg-gray-100 rounded-r-lg">
          {/* Right content */}
          <h2 className="mb-12 text-3xl">
            <span className="text-kitchen-gray-600">Kitchen</span>
            <span className="text-forest-green">Pal</span>
          </h2>
          <button
            type="button"
            className="px-16 py-2 rounded-md text-stone-500 border-stone-400 border-1 hover:bg-kitchen-mustard hover:text-white"
            onClick={signIn}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
