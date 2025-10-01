import { HangmanGame } from "./HangmanGame";

export class CategoryGame extends HangmanGame {
  constructor(category, words, maxAttempts = 6) {
    const randomWord =
      words[Math.floor(Math.random() * words.length)];
    super(randomWord, maxAttempts);
    this.category = category;
  }

  getCategory() {
    return this.category;
  }
}
