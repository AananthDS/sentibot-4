import React from 'react';
import { Search, BarChart2, BrainCircuit } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-purple-500" />,
      title: "Data Collection",
      description: "We collect social media data from multiple platforms in real-time",
      image: "https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg"
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      title: "AI Analysis",
      description: "Our AI processes Tamil/Tanglish content for sentiment and context",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-purple-500" />,
      title: "Insights Delivery",
      description: "Get actionable insights through our intuitive dashboard",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Three simple steps to unlock powerful insights from Tamil social media
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-75" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/90">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;