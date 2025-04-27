import React from 'react';
import { Users, MessageSquare, Globe2, TrendingUp } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: "10M+",
      label: "Social Posts Analyzed",
      description: "Daily monitoring across platforms"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      value: "95%",
      label: "Sentiment Accuracy",
      description: "For Tamil/Tanglish content"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-purple-500" />,
      value: "500+",
      label: "Active Brands",
      description: "Trust our platform"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      value: "24/7",
      label: "Real-time Monitoring",
      description: "Instant insights delivery"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/10 
                hover:border-purple-500/30 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;