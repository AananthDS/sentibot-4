import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Understanding Tamil Social Media Trends in 2025",
      excerpt: "Discover the latest trends and patterns in Tamil social media usage and how they impact brand perception.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      author: {
        name: "Arun Kumar",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      date: "Mar 15, 2025"
    },
    {
      title: "The Rise of Tanglish in Digital Marketing",
      excerpt: "How the blend of Tamil and English is reshaping digital marketing strategies in South India.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      author: {
        name: "Priya Sharma",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      date: "Mar 12, 2025"
    },
    {
      title: "AI-Powered Sentiment Analysis for Regional Languages",
      excerpt: "Exploring how artificial intelligence is revolutionizing sentiment analysis for Tamil content.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      author: {
        name: "Rajesh Singh",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      },
      date: "Mar 10, 2025"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends in Tamil social media analysis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/10 
                overflow-hidden transition-all duration-300 hover:shadow-glow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.author.image} 
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">
                          {post.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-500 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;