import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-full shadow-md
      hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 active:translate-y-0
      transition-all duration-300 ease-in-out text-lg ${className}`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;