// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.

const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

const guess1 = new Hangman('taco', 3)
console.log(guess1)

const guess2 = new Hangman('burrito', 4)
console.log(guess2)

