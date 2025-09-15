import React, { useState } from "react";
import HangmanGame from "./HangmanGame";
import HangmanDrawing from "./HangmanDrawing";

const words = ["python", "hangman", "object", "class", "inheritance"];


function HangmanGameSnapshot(gameObj) {
  return Object.assign(Object.create(HangmanGame.prototype), gameObj);
}

export default function Hangman() {
  const [game, setGame] = useState(new HangmanGame(words));

  function handleGuess(letter) {
    game.guess(letter);
    setGame(HangmanGameSnapshot(game));
  }

  function resetGame() {
    game.resetGame();
    setGame(HangmanGameSnapshot(game));
  }

  return (
    <div className="text-center font-sans mt-6">
      <h1 className="text-3xl font-bold mb-4">Hangman</h1>

      {/* รูป */}
      <HangmanDrawing wrong={game.wrong} />

      {/* แสดงคำ */}
      <p className="text-2xl tracking-widest mt-4">{game.displayWord()}</p>

      {/* จำนวนครั้งเดาผิด */}
      <p className="mt-2">
        ผิดแล้ว: {game.wrong}/{game.maxAttempts}
      </p>

      {/* ปุ่มตัวอักษร */}
      {!game.isGameOver() && (
        <div className="max-w-xl mx-auto mt-4 grid grid-cols-7 gap-2 justify-center">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={game.guessed.has(letter)}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white text-lg
                ${game.guessed.has(letter)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-black-600 shadow-md hover:shadow-lg transition duration-200"
                }`}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* ข้อความชนะ */}
      {game.isWon() && (
        <div className="mt-4">
          <h2 className="text-green-600 text-2xl mb-2">
            ✅ คุณชนะ! คำคือ {game.word}
          </h2>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          >
            เล่นใหม่
          </button>
        </div>
      )}

      {/* ข้อความแพ้ */}
      {game.isLost() && (
        <div className="mt-4">
          <h2 className="text-red-600 text-2xl mb-2">
            ❌ คุณแพ้! คำคือ {game.word}
          </h2>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            เล่นใหม่
          </button>
        </div>
      )}
    </div>
  );
}
