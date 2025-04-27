import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Rajendran",
      role: "Marketing Director",
      company: "TechCorp India",
      image: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
      content: "Sentibot has transformed how we understand our Tamil audience. The insights are invaluable for our regional marketing strategy."
    },
    {
      name: "Karthik Kumar",
      role: "Social Media Manager",
      company: "Digital Solutions",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      content: "The ability to analyze Tanglish comments has given us a huge advantage in understanding customer sentiment accurately."
    },
    {
      name: "Deepa Krishnan",
      role: "Brand Manager",
      company: "Retail Giants",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      content: "Real-time monitoring of Tamil social media has helped us respond to customer feedback faster than ever before."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied businesses using Sentibot for Tamil social media analysis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-purple-500 dark:text-purple-400">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;