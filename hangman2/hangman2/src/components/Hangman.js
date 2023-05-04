import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { RandomWord } from "./Words";
import step1 from "../images/2.jpg";
import step2 from "../images/3.jpg";
import step3 from "../images/4.jpg";
import step4 from "../images/5.jpg";
import step5 from "../images/6.jpg";
import step6 from "../images/7.jpg";
import step7 from "../images/8.jpg";
import step8 from "../images/9.jpg";
import step9 from "../images/10.jpg";
import AlphabetButtons from "./AlphabetButtons";
import GameStatus from "./GameStatus";
import Help from "./Help";
import "./Hangman2.css";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 9,
    images: [step1, step2, step3, step4, step5, step6, step7, step8, step9],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: RandomWord(),
    };
  }

  handleGuess = (e) => {
    let letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: RandomWord(),
    });
  };

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    let isWinner = this.guessedWord().join("") === this.state.answer;

    let gameStat = "";
    if (isWinner) {
      gameStat = "YOU WON!!!";
    } else if (gameOver) {
      gameStat = "YOU LOST!";
    }

    return (
      <div className="container">
        <h1>Hangman</h1>
        <div>
          Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
        </div>
        <div>
          <img
            src={this.props.images[this.state.mistake]}
            alt={`Step ${this.state.mistake + 1}`} // each time a mistake is made this changes the image
          />
        </div>
        <Help className="helpbutton" />
        <Button
          className="buttonreset"
          variant="warning"
          onClick={this.resetButton}
        >
          Reset
        </Button>
        <div>
          <p>Guess the animal:</p>
          <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
          <GameStatus
            isWinner={isWinner}
            gameOver={gameOver} // these are to tell if you have won or lost the game
            gameStat={gameStat}
          />
          <AlphabetButtons
            handleGuess={this.handleGuess}
            guessed={this.state.guessed}
          />
        </div>
      </div>
    );
  }
}

export default Hangman;
