import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "News",
  "Live",
  "Cricket",
  "Cooking",
  "Songs",
  "Motivation",
  "Gadgets",
  "BGMI",
  "Wildlife",
  "Documentries",
  "Scout",
  "All",
  "Gaming",
  "News",
  "Live",
  "Cricket",
  "Cooking",
  "Songs",
  "Motivation",
  "Gadgets",
  "BGMI",
  "Wildlife",
  "Documentries",
  "Scout",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar">
      <div className="flex w-1">
        {list.map((curr, index) => (
          <Button key={index} name={curr} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
