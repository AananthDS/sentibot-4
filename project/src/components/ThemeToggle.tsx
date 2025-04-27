import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../utils/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-purple-200/20 dark:hover:bg-purple-900/30 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-purple-700" />
      )}
    </button>
  );
};

export default ThemeToggle;