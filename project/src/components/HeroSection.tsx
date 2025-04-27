import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-8 z-10 relative">
      <p className="text-gray-600 dark:text-blue-200 mb-10 max-w-2xl text-lg">
      வாழ்க தமிழ்! வளர்க தமிழ்!!
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradientFlow">
        தமிழ்/Tanglish social media comments analysis
      </h1>
      <p className="text-gray-600 dark:text-blue-200 mb-10 max-w-2xl text-lg">
        Be the first to know what's being said about your brand, product, and competitors in the news & social media
      </p>
      <Button 
        label="Analyze Now →" 
        className="animate-bounce-subtle"
      />
    </div>
  );
};

export default HeroSection;