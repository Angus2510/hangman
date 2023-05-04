import React from "react";
import Button from "react-bootstrap/Button";
import "./Hangman2.css";

// this is to make all the letters into buttons
const AlphabetButtons = ({ handleGuess, guessed }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div>
      {alphabet.map((letter) => (
        <Button
          className="button"
          variant="warning"
          key={letter}
          value={letter}
          onClick={handleGuess}
          disabled={guessed.has(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default AlphabetButtons;
