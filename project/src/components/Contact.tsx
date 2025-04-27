import React from 'react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join leading brands using Sentibot for Tamil social media analysis. Get in touch with our team for a personalized demo.
              </p>
              <Button 
                label="Schedule Demo →" 
                className="w-full md:w-auto"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;