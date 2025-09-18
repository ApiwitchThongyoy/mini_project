import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function CategorySelect() {
  const navigate = useNavigate();

  const categories = {
    Fruits: ["apple", "banana", "grape", "watermelon"],
    Animals: ["tiger", "elephant", "cat", "dog"],
    Countries: ["thailand", "japan", "france", "brazil"],
  };

  const handleSelect = (category, words) => {
    navigate("/hangman", { state: { category, words } });
  };

  return (
    <>
      <button
        className="absolute top-4 left-4 text-6xl cursor-pointer z-50"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeftCircleFill />
      </button>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-5">CATEGORY</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(categories).map(([category, words]) => (
            <button
              key={category}
              onClick={() => handleSelect(category, words)}
              className="px-20 py-5 bg-lime-500 text-white text-lg rounded-lg 
                         hover:bg-lime-600 transition duration-200 cursor-pointer font-bold"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
