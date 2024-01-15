import React from "react";
import { FaUser } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div class="flex items-center  bg-slate-100 m-4 rounded-lg w-full">
      <div className="bg-blue-400 p-4 m-4 rounded-full my-4">
        <FaUser className="text-xl" />
      </div>
      <div className="ml-3">
        <p className=" text-gray-900 text-md font-semibold pb-1">{name}</p>
        <p className="font-bold text-black">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
