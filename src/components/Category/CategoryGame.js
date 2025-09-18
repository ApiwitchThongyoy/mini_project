import { HangmanGame } from "./HangmanGame";

// Encapsulation + Inheritance
export class CategoryGame extends HangmanGame {
  constructor(category, words, maxAttempts = 6) {
    const randomWord =
      words[Math.floor(Math.random() * words.length)];
    super(randomWord, maxAttempts);
    this.category = category;
  }

  // Polymorphism
  getCategory() {
    return this.category;
  }
}
