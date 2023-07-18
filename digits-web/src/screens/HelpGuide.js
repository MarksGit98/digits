import { ExampleRow } from "./exampleGuesses";

export const HelpGuide = ({ open, handleClick }) => {
  const rules = [
    "Each guess consists of three numbers, two digits each, separated by dashes",
    "Each number can be anything from 00-99 and each digit can be anything from 0-9",
    "With each guess, a new clue will be provided to help you with future guesses.",
    "Tiles from previous attempts will be highlighted in orange if you had correctly guessed the digit for that tile.",
  ];

  const exampleGuesses = [
    [1, 2, 3, 6, 4, 5],
    [1, 3, 2, 5, 7, 9],
    [1, 5, 8, 1, 1, 3],
    [1, 5, 4, 9, 1, 5],
    [1, 5, 4, 9, 1, 7],
  ];

  const exampleAnswer = [1, 5, 4, 9, 1, 7];

  return (
    <div className={`menu-screen ${open ? "open" : "close"}`}>
      <div className="menu-content">
        <h2 className={"center-text underline"}>How To Play</h2>
        <h3>Correctly guess all 6 digits to compose the 3 numbers</h3>
        <ul className="menu-content-rules">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
        <h3 className="center-text underline">Example Game</h3>
        <p className="center-text">
          Clue 1: The 2nd number is a perfect square
        </p>
        <ExampleRow example={exampleGuesses[0]} answer={exampleAnswer} />
        <p className="center-text">Clue 2: Only one of the digits is even</p>
        <ExampleRow example={exampleGuesses[1]} answer={exampleAnswer} />
        <p className="center-text">Clue 3: The first number is divisble by 3</p>
        <ExampleRow example={exampleGuesses[2]} answer={exampleAnswer} />
        <p className="center-text">
          Clue 4: The 2nd digit and 3rd digit sum to the 4th digit
        </p>
        <ExampleRow example={exampleGuesses[3]} answer={exampleAnswer} />
        <p className="center-text">Clue 5: The 3rd number is a prime number</p>
        <ExampleRow example={exampleGuesses[4]} answer={exampleAnswer} />
        <p className="center-text">Solved!</p>
        <p className="new-puzzle-info">
          New puzzles are released every night at midnight EST.
        </p>
        <div className="close-button" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};
