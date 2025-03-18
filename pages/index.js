import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { useAuth } from '../utils/context/authContext';

const descriptions = [
  'Start by adding your ingredients to the Inventory tab! Keep track of what’s in your kitchen, and let the app help you make the most of what you already have.',
  'Explore new meal ideas in the Recipes tab! Enter your available ingredients, and our AI will generate recipes that match your preferences and what’s in your inventory.',
  'Make sure your Equipment is up to date! Listing your cooking tools helps refine recipe suggestions, ensuring you only get meals that fit what you can cook at home.',
  'Tired of food waste? Our app helps you manage your pantry and fridge while generating creative recipes that use what you already have.',
  'Your saved recipes are more than just a list! Rate them, leave notes, and even regenerate improved versions based on your past feedback.',
  'Let your kitchen work smarter! Our app streamlines your inventory, recipe ideas, and cooking tools to make mealtime easier and more efficient.',
];

function Home() {
  const { user } = useAuth();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[80vh] text-center justify-content-center align-content-center pt-10">
      <div className="flex flex-col items-center justify-center w-[70vw] p-8 rounded-lg bg-opacity-55 bg-sea-green">
        {/* Left content */}
        <div className="space-y-8 text-center">
          <div className="flex justify-center ">
            <Logo size="medium" />
          </div>
          <h1 className="text-3xl text-stone-100">Hello {user.displayName}!</h1>
          <p className="max-w-2xl pb-2 mx-auto text-stone-100">
            {descriptions[currentIndex]}
          </p>
          <div className="flex justify-center space-x-4">
            {descriptions.map((description, index) => (
              <div
                key={description}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-forest-green' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
