import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "per month",
      description: "Perfect for small businesses starting with social media analysis",
      features: [
        "5 social media channels",
        "Basic sentiment analysis",
        "Daily reports",
        "Email support",
        "1 user account"
      ],
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg"
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "per month",
      description: "Ideal for growing businesses with active social presence",
      features: [
        "15 social media channels",
        "Advanced sentiment analysis",
        "Real-time monitoring",
        "Priority support",
        "5 user accounts",
        "Custom reports"
      ],
      popular: true,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations needing comprehensive analysis",
      features: [
        "Unlimited channels",
        "Custom AI models",
        "API access",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom integration"
      ],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Flexible pricing options to match your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${
              plan.popular ? 'transform scale-105' : ''
            }`}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/10 
                overflow-hidden transition-all duration-300 hover:shadow-glow">
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 
                    text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="h-48 relative">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/80">{plan.period}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    label={plan.price === "Custom" ? "Contact Sales" : "Get Started"} 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;