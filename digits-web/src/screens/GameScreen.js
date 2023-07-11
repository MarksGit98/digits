import React, { useState, useEffect, useRef, forwardRef, useMemo } from "react";
import { puzzles } from "../puzzles/puzzles";
import { HelpGuide } from "./HelpGuide";
import { GameConcluded } from "./GameConcluded";
import "./GameScreen.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MAX_GUESS_AMOUNT } from "../helpers/constants";

const NumberInput = forwardRef(
  ({ value, onChange, disabled, onKeyDown }, ref) => (
    <input
      disabled={disabled}
      ref={ref}
      type="tel"
      value={value}
      onChange={onChange}
      maxLength={1}
      pattern="[0-9]*"
      onKeyDown={onKeyDown}
    />
  )
);

const GameScreen = () => {
  const inputRefs = useRef([]);

  const generateRandomAnswer = () => {
    const puzzleIndex = Math.floor(Math.random() * puzzles.length);
    return puzzles[puzzleIndex].puzzle;
  };
  const [openHelpGuide, setOpenHelpGuide] = useState(false);
  const [currentInput, setCurrentInput] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(0);
  const [guess, setGuess] = useState(["", "", "", "", "", ""]);
  const [clues, setClues] = useState([]);
  const [answer, setAnswer] = useState(generateRandomAnswer());
  const [answerFound, setAnswerFound] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [openEndScreen, setOpenEndScreen] = useState(false);

  useEffect(() => {
    setClues(generateClues(answer));
  }, [answer]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyCode = event.keyCode || event.which;
      const isNumberKey = keyCode >= 48 && keyCode <= 57; // Check if the pressed key is a number
      if (isNumberKey && inputRefs.current.length) {
        inputRefs.current[0].focus();
      }

      // Remove the event listener after it's been used
      window.removeEventListener("keydown", handleKeyDown);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (
      inputRefs.current.length &&
      currentGuess !== MAX_GUESS_AMOUNT &&
      !answerFound
    )
      inputRefs.current[currentInput].focus();
  }, [inputRefs, currentInput, guess, currentGuess]);

  const ClueDisplay = ({ clues }) => (
    <div className="clue-display">
      {Array(MAX_GUESS_AMOUNT)
        .fill("-")
        .map((_, index) => (
          <div className={"clue"} key={index}>
            <div className={"clue-number"}>{index + 1}.</div>
            <div className={"clue-text"}>
              {index < currentGuess + 1 ? `${clues[index]}` : ""}
            </div>
          </div>
        ))}
    </div>
  );

  const handleGuessChange = (index, event) => {
    const newGuess = [...guess];
    const inputValue = event.target.value;

    if (/^[0-9]$/.test(inputValue)) {
      newGuess[index] = parseInt(inputValue);
      setGuess(newGuess);

      if (index < MAX_GUESS_AMOUNT - 1) {
        setCurrentInput(index + 1);
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      const newGuess = [...guess];
      if (newGuess[index] === "" && index > 0) {
        setCurrentInput(index - 1);
      }
      newGuess[index] = "";
      setGuess(newGuess);
    }
  };

  const Number = ({ disabled, number, guessed, rowIndex }) => {
    const firstIndex = number * 2 - 2;
    const secondIndex = number * 2 - 1;

    const isCorrectDigit = (guess, index) => {
      return guess[index] === answer[index];
    };

    return (
      <div className="number">
        <div
          className={`input-box ${disabled ? "disabled" : "active"} ${
            guessed
              ? isCorrectDigit(guesses[rowIndex], firstIndex)
                ? "correct-guess"
                : "incorrect-guess"
              : null
          }`}
        >
          <NumberInput
            key={`${rowIndex} - ${firstIndex}`}
            disabled={disabled}
            ref={
              !disabled ? (el) => (inputRefs.current[firstIndex] = el) : null
            }
            value={
              !disabled
                ? guess[firstIndex]
                : guessed
                ? guesses[rowIndex][firstIndex]
                : ""
            }
            onChange={(e) => handleGuessChange(firstIndex, e)}
            onKeyDown={(e) => handleBackspace(firstIndex, e)}
          />
        </div>
        <div
          className={`input-box ${disabled ? "disabled" : "active"} ${
            guessed
              ? isCorrectDigit(guesses[rowIndex], secondIndex)
                ? "correct-guess"
                : "incorrect-guess"
              : null
          }`}
        >
          <NumberInput
            key={`${rowIndex} - ${secondIndex}`}
            disabled={disabled}
            ref={
              !disabled ? (el) => (inputRefs.current[secondIndex] = el) : null
            }
            value={
              !disabled
                ? guess[secondIndex]
                : guessed
                ? guesses[rowIndex][secondIndex]
                : ""
            }
            onChange={(e) => handleGuessChange(secondIndex, e)}
            onKeyDown={(e) => handleBackspace(secondIndex, e)}
          />
        </div>
      </div>
    );
  };

  const GuessRow = ({ active, guessed, index }) => (
    <div className="input-container">
      <Number
        disabled={!active}
        number={1}
        guessed={guessed}
        rowIndex={index}
      />
      <div className="separator" />
      <Number
        disabled={!active}
        number={2}
        guessed={guessed}
        rowIndex={index}
      />
      <div className="separator" />
      <Number
        disabled={!active}
        number={3}
        guessed={guessed}
        rowIndex={index}
      />
    </div>
  );

  const handleQuestionClick = () => {
    setOpenHelpGuide((current) => !current);
  };

  const handleEndScreenClick = () => {
    setOpenEndScreen((current) => !current);
  };

  const Header = () => (
    <div className="header">
      <h1>Number Guessing Game</h1>
      <button className="question-button" onClick={handleQuestionClick}>
        <i className="fas fa-question-circle"></i>
      </button>
    </div>
  );

  const checkGuess = () => {
    const isCorrect = guess.every((value, index) => value === answer[index]);
    if (isCorrect) {
      setAnswer(generateRandomAnswer());
      setAnswerFound(true);
      setOpenEndScreen(true);
    } else if (currentGuess + 1 === MAX_GUESS_AMOUNT) {
      setOpenEndScreen(true);
    }
    setGuesses([...guesses, guess]);
    setGuess(["", "", "", "", "", ""]);
    setCurrentInput(0);
    setCurrentGuess((currentGuess) => currentGuess + 1);
  };

  const generateClues = (answer) => {
    const puzzleIndex = Math.floor(Math.random() * puzzles.length);
    return puzzles[puzzleIndex].clues;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyCode = event.keyCode || event.which;
      const isEnterKey = keyCode === 13;
      if (isEnterKey && guess.every((input) => input !== "")) {
        checkGuess();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess]);

  return (
    <div className="GameScreen">
      <Header />
      <HelpGuide open={openHelpGuide} handleClick={handleQuestionClick} />
      <h2>Clues</h2>
      <ClueDisplay clues={clues.slice(0, currentGuess + 1)} />
      <div>
        <h2>Guess the Numbers</h2>
        {guess.map((guess, index) => (
          <GuessRow
            key={index}
            guessed={index < currentGuess || currentGuess === MAX_GUESS_AMOUNT}
            active={currentGuess === index && !answerFound}
            index={index}
          />
        ))}

        <button
          className={`check-guess ${
            guess.some((input) => input === "") ? "disabled" : "active"
          }`}
          disabled={guess.some((input) => input === "")}
          onClick={checkGuess}
        >
          Check Guess
        </button>
        <GameConcluded
          open={openEndScreen}
          handleClick={handleEndScreenClick}
          won={answerFound}
          attempts={currentGuess}
        />
      </div>
    </div>
  );
};

export default GameScreen;
