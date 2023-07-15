import { ExampleRow } from "./exampleGuesses";

export const HelpGuide = ({ open, handleClick }) => {
  const rules = [
    "You must input a digit 0-9 in all 6 of the digit slots to submit a guess.",
    "The 3 numbers can be anything from 0 - 99. Numbers less than 10 will begin with the digit 0.",
    "With each attempted guess, a new clue will be provided to help you guess the numbers.",
    "Tiles from previous attempts will appear orange if you had correctly guessed the digit for that tile.",
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
        <h2>How To Play</h2>
        <h3>Correctly guess all 6 digits to compose the 3 numbers</h3>
        <ul className="menu-content-rules">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
        <ExampleRow example={exampleGuesses[0]} answer={exampleAnswer} />
        <ExampleRow example={exampleGuesses[1]} answer={exampleAnswer} />
        <ExampleRow example={exampleGuesses[2]} answer={exampleAnswer} />
        <ExampleRow example={exampleGuesses[3]} answer={exampleAnswer} />
        <ExampleRow example={exampleGuesses[4]} answer={exampleAnswer} />
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
