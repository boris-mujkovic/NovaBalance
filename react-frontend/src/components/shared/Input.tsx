import React from "react";

type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: any) => void; // type-safe
  className?: string; // optional extra classes
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  value,
  placeholder,
  required = false,
  onChange,
  className = "",
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className={`w-full sm:w-auto min-w-[300px] border flex-1 px-4 py-2 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-hover-dark-pink ${className}`}
    />
  );
};

export default Input;
