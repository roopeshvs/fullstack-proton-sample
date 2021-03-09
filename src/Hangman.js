import React, { Component } from "react";
import "./Hangman.css";
import { randomIndex } from "./words";
import img0 from "./assets/0.jpg";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import Clue from "./Clues";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    let randomWord = randomIndex();
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord.word,
      hint: randomWord.hints
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        className="Hangman-button"
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  resetGame() {
    let newWord;
    do {
      newWord = randomIndex();
    } while (newWord.word === this.state.answer);
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: newWord.word,
      hint: newWord.hints
    });
  }

  hasWon = () => {
    let a = this.state.answer.split("");
    let winner = a.every(l => {
      return [...this.state.guessed].indexOf(l) >= 0;
    });
    return winner ? true : false;
  };

  showClue = () => {
    let a = this.state.answer.split("");
    let newSet = this.state.guessed;
    newSet.add(a[0]);
    newSet.add(a[a.length - 1]);
    this.setState({
      guessed: newSet
    });
  };

  doClue = _ => {
    let a = this.state.answer.split("");
    let newSet = this.state.guessed;
    if (this.state.nWrong >= this.props.maxWrong - 2 ) {
      if (newSet.has(a[0]) && newSet.has(a[a.length - 1])) {
        return false
      }
      else {
        return true
      }
    }
    return false
  }

  render() {
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={this.state.nWrong + " / " + this.props.maxWrong}
        />
        <p>Incorrect Guesses: {this.state.nWrong}</p>
        {this.hasWon() ? <p>You Won :)</p> : ""}
        {this.state.nWrong === this.props.maxWrong ? (
          <p className="Hangman-word">{this.state.answer}</p>
        ) : (
          <p className="Hangman-word">{this.guessedWord()}</p>
        )}
        {this.state.nWrong === this.props.maxWrong || this.hasWon() ? (
          <div>
            <p>Game Over</p>
            <button className="Hangman-reset" onClick={this.resetGame}>
              Start Over
            </button>
          </div>
        ) : (
          <p className="Hangman-btns">{this.generateButtons()}</p>
        )}
        {this.state.nWrong === this.props.maxWrong || this.hasWon() ? (
          ""
        ) : (
          <Clue hints={this.state.hint}></Clue>
        )}
        {this.doClue() ? <button className="Hangman-reset" onClick={this.showClue}>Reveal Letters</button> : ''}
      </div>
    );
  }
}

export default Hangman;
