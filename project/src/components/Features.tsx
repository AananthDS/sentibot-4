import React from 'react';
import { MessageSquare, TrendingUp, Globe2, Zap, Shield, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/10 
      hover:border-purple-500/30 transition-all duration-300 hover:shadow-glow">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 
          group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      title: "Multi-language Analysis",
      description: "Advanced sentiment analysis for Tamil and Tanglish content across social media platforms."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: "Real-time Monitoring",
      description: "Track conversations about your brand as they happen with instant notifications and alerts."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-purple-500" />,
      title: "Cross-platform Support",
      description: "Monitor multiple social media platforms from a single dashboard with unified insights."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: "Quick Insights",
      description: "Get actionable insights with our AI-powered analysis engine in seconds."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Privacy First",
      description: "Enterprise-grade security and privacy protection for your brand's data."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Competitor Analysis",
      description: "Compare your brand's performance against competitors in the Tamil market."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Powerful Features for Your Brand
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Unlock the power of Tamil social media analysis with our comprehensive suite of tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;