import React, { useState } from "react";
import HangmanGame from "./HangmanGame";
import HangmanDrawing from "./HangmanDrawing";
import { ImCross } from "react-icons/im";

const words = ["apple", "pieapple", "banana", "watermelon", "melon"];

function HangmanGameSnapshot(gameObj) {
  return Object.assign(Object.create(HangmanGame.prototype), gameObj);
}

export default function Hangman() {
  const [game, setGame] = useState(new HangmanGame(words));

  // ฟังก์ชันเมื่อกดปุ่มตัวอักษร
  function handleGuess(letter) {
    game.guess(letter);
    setGame(HangmanGameSnapshot(game));
  }

  // ฟังก์ชันรีเซ็ตเกม
  function resetGame() {
    game.resetGame();
    setGame(HangmanGameSnapshot(game));
  }

  return (
    <div>
      
      <button onClick={() => {}} className="absolute mt-5 ml-5  text-5xl  cursor-pointer">
        <ImCross />
      </button>

      <div className="text-center font-sans">
        {/* หัวข้อเกม */}
        <h1 className="text-6xl font-bold mb-4">Hangman</h1>

        {/* รูปแขวน */}
        <HangmanDrawing wrong={game.wrong} />

        {/* คำที่ต้องทาย */}
        <p className="text-5xl tracking-widest mt-4">{game.displayWord()}</p>

        {/* จำนวนครั้งผิด */}
        <p className="mt-4 text-3xl">
          Missed : {game.wrong}/{game.maxAttempts}
        </p>

        {/* ปุ่มตัวอักษร */}
        {!game.isGameOver() && (
          <div className="max-w-xl mx-auto mt-4 grid grid-cols-7 gap-2">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
              const isLastRow = letter === "V";
              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={game.guessed.has(letter)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-black text-lg cursor-pointer
                    ${isLastRow ? "col-start-2" : ""}
                    ${
                      game.guessed.has(letter)
                        ? "bg-gray-300 cursor-not-allowed"
                        : "hover:bg-black-600 shadow-md hover:shadow-lg transition duration-200"
                    }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        )}

        {/* ข้อความชนะ */}
        {game.isWon() && (
          <div className="mt-10 text-3xl">
            <h2 className="text-green-600 text-2xl mb-2">
              YOU WIN!! THE ANSWER IS : {game.word}
            </h2>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 cursor-pointer"
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        {/* ข้อความแพ้ */}
        {game.isLost() && (
          <div className="mt-10 text-3xl">
            <h2 className="text-red-600 text-2xl mb-2">
              YOU LOSE!! THE ANSWER IS : {game.word}
            </h2>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 cursor-pointer"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
