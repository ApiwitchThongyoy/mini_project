import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function CategorySelect() {
  const navigate = useNavigate();

  const categories = {
    Fruits: [
      "apple", "banana", "grape", "watermelon", "orange", "mango",
      "pineapple","strawberry","lemon","peach", "papaya", "lychee",
      "dragonfruit","durian","blueberry","cranberry"
    ],
    Animals: [
      "dog", "cat", "lion", "tiger", "elephant", "giraffe", "monkey",
      "bear", "zebra", "wolf", "fox", "rabbit", "kangaroo", "panda",
      "horse", "cow", "sheep", "goat", "chicken", "duck", "pig",
      "camel", "snake", "frog"
    ],
    Countries: [
      "thailand","USA", "UK", "canada", "australia",
      "china","japan","south korea","india","germany","france","italy",
      "spain","russia", "brazil", "mexico", "argentina","egypt",
      "sweden", "norway", "netherlands"
    ],
  };

  const handleSelect = (category, words) => {
    navigate("/hangman", { state: { category, words } });
  };

  return (
    <>
      <button
        className="absolute top-4 left-4 text-6xl cursor-pointer z-50"
        onClick={() => navigate("/")}
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
