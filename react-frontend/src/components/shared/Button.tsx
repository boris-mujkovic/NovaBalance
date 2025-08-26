import React from "react";

type ButtonProps = {
  name: string;
  color: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ name, color, onClick, className = "" }) => {
  return (
    <button
      className={`px-5 py-2 rounded-xl transition bg-${color} hover:bg-hover-dark-pink text-white cursor-pointer w-[135px] ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
