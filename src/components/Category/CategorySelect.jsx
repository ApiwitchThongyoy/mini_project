// CategorySelect.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategorySelect() {
  const navigate = useNavigate();

  const categories = {
    Fruits: ["apple", "banana", "grape", "watermelon"],
    Animals: ["tiger", "elephant", "zebra", "kangaroo"],
    Countries: ["thailand", "japan", "france", "brazil"],
  };

  const handleSelect = (category, words) => {
    // ส่ง category + words ไปที่หน้าหลัก
    navigate("/hangman", { state: { category, words } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-400">
      <h1 className="text-3xl font-bold mb-6">เลือกหมวดหมู่</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(categories).map(([category, words]) => (
          <button
            key={category}
            onClick={() => handleSelect(category, words)}
            className="px-6 py-3 bg-white rounded-2xl shadow-lg hover:bg-gray-200 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
