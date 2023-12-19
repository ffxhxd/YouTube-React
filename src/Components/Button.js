import React from "react";

const Button = ({ name, className }) => {
  return (
    <div>
      <button
        className={`px-4 font-medium sm:px-5 py-1 rounded-2xl m-1 sm:m-2 bg-gray-500 hover:bg-red-600 text-white focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
