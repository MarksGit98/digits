import React, { useState, useEffect, useRef } from "react";
import { puzzles } from "../puzzles/puzzles";
import "./GameScreen.css";
import { MAX_GUESS_AMOUNT } from "../helpers/constants";

const Clue = ({ clues }) => (
  <div>
    {clues.map((clue, index) => (
      <p>
        {index + 1}) {clue}
      </p>
    ))}
  </div>
);

const NumberInput = React.forwardRef(({ value, onChange, disabled }, ref) => (
  <input
    disabled={disabled}
    ref={ref}
    type="tel" 
    value={value}
    onChange={onChange}
    maxLength={1} 
    pattern="[0-9]*"
  />
));

const GuessList = ({ guesses, answer }) => {
  const formatGuess = (guess) => {
    const formattedGuess = guess.split("-").map(Number);
    return formattedGuess;
  };


  const getCorrectDigits = (guess) => {
    const formattedGuess = formatGuess(guess);
    const correctDigits = formattedGuess.map((digit, index) => {
      if (digit === answer[index]) {
        return true;
      }
      return false;
    });
    return correctDigits;
  };

  return (
    <div className="GuessList">
      <h2>Guesses</h2>
      {guesses.length > 0 ? (
        <ul className="guesses-list">
          {guesses.map((guess, index) => (
            <li key={index}>
              {formatGuess(guess).map((digit, index) => (
                <span
                  key={index}
                  className={`guess-number ${
                    getCorrectDigits(guess)[index]
                      ? "correct-guess"
                      : "incorrect-guess"
                  } ${
                    (index + 1) % 2 === 0 && index + 1 !== answer.length
                      ? "number-division"
                      : null
                  }`}
                >
                  {digit}
                  {(index + 1) % 2 === 0 && index + 1 !== answer.length ? (
                    <span className="guess-separator">-</span>
                  ) : null}
                </span>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>No guesses yet.</p>
      )}
    </div>
  );
};

const GameScreen = () => {
  const inputRefs = useRef([null, null, null, null, null, null]);
  const generateRandomAnswer = () => {
    const puzzleIndex = Math.floor(Math.random() * puzzles.length);
    return puzzles[puzzleIndex].puzzle;
  };

  const [currentGuess, setCurrentGuess] = useState(1);
  const [guess, setGuess] = useState(["", "", "", "", "", ""]);
  const [clues, setClues] = useState([]);
  const [answer, setAnswer] = useState(generateRandomAnswer());
  const [guesses, setGuesses] = useState([]);
  const [clueIndex, setClueIndex] = useState(0);
  const [showFinalGuess, setShowFinalGuess] = useState(false);

  useEffect(() => {
    setClues(generateClues(answer));
  }, [answer]);

  const handleGuessChange = (index, event) => {
    const newGuess = [...guess];
    const inputValue = event.target.value;

    if (/^[0-9]$/.test(inputValue)) {
      newGuess[index] = inputValue;
      setGuess(newGuess);

      if (index < inputRefs.current.length - 1) {
        console.log('forward', inputRefs, index)
        inputRefs.current[index + 1].focus();
      }
    }

    else if (event.nativeEvent.inputType === "deleteContentBackward") {
      newGuess[index] = ''
      setGuess(newGuess)
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }

    console.log(newGuess)
  };

  const Number = ({ disabled, number }) => (
    <div className="number">
      <div className={`input-box ${disabled ? 'disabled' : 'active'}`} >
        <NumberInput
          disabled={disabled}
          ref={!disabled ? (el) => (inputRefs.current[number * 2 - 2] = el): null}
          value={!disabled ? guess[number * 2 - 2] : null}
          onChange={(e) => handleGuessChange(number * 2 - 2, e)}
        />
      </div>
      <div className="input-box">
        <NumberInput
          disabled={disabled}
          ref={!disabled ? (el) => (inputRefs.current[number * 2 - 1] = el): null}
          value={!disabled ? guess[number * 2 - 1] : null}
          onChange={(e) => handleGuessChange(number * 2 - 1, e)}
        />
      </div>
    </div>
  );

  const GuessRow = ({ active }) => (
    <div className="input-container">
      <Number disabled={!active} number={1} />
      <div className="separator" />
      <Number disabled={!active} number={2} />
      <div className="separator" />
      <Number disabled={!active} number={3} />
    </div>
  );

  const checkGuess = () => {
    const formattedGuess = guess.join(" - ");
    const isCorrect = formattedGuess === answer.join(" - ");
    if (isCorrect) {
      alert("Congratulations! You guessed the correct answer!");
      setAnswer(generateRandomAnswer());
    } else {
      handleClueDisplay();
      alert("Sorry, your guess is incorrect. Please try again.");
      setGuesses([...guesses, formattedGuess]);
    }
    setGuess(["", "", "", "", "", ""]);
    setShowFinalGuess(true);
  };

  const generateClues = (answer) => {
    const puzzleIndex = Math.floor(Math.random() * puzzles.length);
    return puzzles[puzzleIndex].clues;
  };

  const handleClueDisplay = () => {
    setClueIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="GameScreen">
      <h1>Number Guessing Game</h1>
      <div>
        <h2>Clues</h2>
        {clueIndex < clues.length && (
          <Clue clues={clues.slice(0, clueIndex + 1)} />
        )}
      </div>
      <div>
        <h2>Guess the Numbers</h2>
        {guess.map((guess, index) => (
          <GuessRow active={currentGuess === index + 1} />
        ))}
        <button onClick={checkGuess}>Check Guess</button>
      </div>
      <GuessList guesses={guesses} answer={answer} />
    </div>
  );
};

export default GameScreen;
