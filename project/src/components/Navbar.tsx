import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-5 md:p-8 transition-all">
      <div className="text-purple-600 dark:text-purple-400 font-bold text-2xl md:text-3xl tracking-tight">
        Sentibot
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;