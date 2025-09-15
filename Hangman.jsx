// Hangman.jsx
import React, { useState, useEffect } from "react";
import HangmanDrawing from "./HangmanDrawing";

const words = ["python", "hangman", "object", "class", "inheritance"];

export default function Hangman() {
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState(new Set());
  const [wrong, setWrong] = useState(0);
  const maxAttempts = 6;

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(randomWord);
    setGuessed(new Set());
    setWrong(0);
  }

  function handleGuess(letter) {
    if (!guessed.has(letter) && !isGameOver()) {
      const newGuessed = new Set(guessed);
      newGuessed.add(letter);
      setGuessed(newGuessed);

      if (!word.includes(letter)) {
        setWrong(prev => prev + 1);
      }
    }
  }

  function displayWord() {
    return word
      .split("")
      .map((l) => (guessed.has(l) ? l : "_"))
      .join(" ");
  }

  function isWon() {
    return word && word.split("").every((l) => guessed.has(l));
  }

  function isLost() {
    return wrong >= maxAttempts;
  }

  function isGameOver() {
    return isWon() || isLost();
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: 24 }}>
      <h1>🎮 Hangman</h1>

      {/* SVG drawing */}
      <HangmanDrawing wrong={wrong} />

      <p style={{ fontSize: 22, letterSpacing: 6 }}>{displayWord()}</p>
      <p>ผิดแล้ว: {wrong}/{maxAttempts}</p>

      {!isGameOver() && (
        <div style={{ maxWidth: 600, margin: "12px auto" }}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={guessed.has(letter)}
              style={{
                margin: 4,
                padding: "8px 10px",
                minWidth: 38,
                cursor: guessed.has(letter) ? "not-allowed" : "pointer",
                borderRadius: 4,
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {isWon() && (
        <div>
          <h2>✅ คุณชนะ! คำคือ {word}</h2>
          <button onClick={resetGame}>เล่นใหม่</button>
        </div>
      )}

      {isLost() && (
        <div>
          <h2>❌ คุณแพ้! คำคือ {word}</h2>
          <button onClick={resetGame}>เล่นใหม่</button>
        </div>
      )}
    </div>
  );
}
