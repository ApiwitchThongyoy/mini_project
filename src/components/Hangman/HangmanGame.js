export default class HangmanGame {
  constructor(words, maxAttempts = 6) {
    this.words = words;
    this.maxAttempts = maxAttempts;
    this.resetGame();
  }

  resetGame() {
    this.word = this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
    this.guessed = new Set();
    this.wrong = 0;
  }

  guess(letter) {
    if (!this.guessed.has(letter) && !this.isGameOver()) {
      this.guessed.add(letter);
      if (!this.word.includes(letter)) this.wrong++;
    }
  }

  displayWord() {
    return this.word.split("").map(l => this.guessed.has(l) ? l : "_").join(" ");
  }

  isWon() {
    return this.word.split("").every(l => this.guessed.has(l));
  }

  isLost() {
    return this.wrong >= this.maxAttempts;
  }

  isGameOver() {
    return this.isWon() || this.isLost();
  }
}
