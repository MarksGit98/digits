import { ExampleRow } from "./exampleGuesses";

export const GameConcluded = ({ open, handleClick, won, attempts, answer }) => {
  return (
    <div className={`menu-screen ${open ? "open" : "close"}`}>
      <div className="menu-content">
        <h2 className="center-text">
          {won ? `Congratulations!` : `Nice Try!`}
        </h2>
        <h3 className="center-text">
          {won && `You solved the puzzle in ${attempts} attempt(s)!`}
        </h3>
        <ExampleRow example={answer} answer={answer} />
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
