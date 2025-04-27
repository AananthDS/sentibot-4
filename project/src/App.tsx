import React from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden transition-colors duration-300 
        bg-gradient-to-b from-white to-purple-50 
        dark:from-navy-950 dark:to-purple-950">
        <div className="absolute inset-0 h-full w-full">
          <ParticlesBackground />
        </div>
        <Navbar />
        <HeroSection />
        <Features />
        <Stats />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;