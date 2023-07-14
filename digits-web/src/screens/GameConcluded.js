export const GameConcluded = ({ open, handleClick, won, attempts, answer }) => {
  return (
    <div className={`menu-screen ${open ? "open" : "close"}`}>
      <div className="menu-content">
        <h2>{won ? `Congratulations!` : `Nice Try!`}</h2>
        <h3>{won && `You solved the puzzle in ${attempts} attempt(s)`}</h3>
        <ExampleRow answer={answer} />
        <p>New puzzles are released every night at midnight EST.</p>
        <div className="close-button" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};

export const ExampleRow = ({ answer }) => (
  <div className="input-container">
    <Number number={1} answer={answer} />
    <div className="example-separator" />
    <Number number={2} answer={answer} />
    <div className="example-separator" />
    <Number number={3} answer={answer} />
  </div>
);

const NumberBox = ({ value }) => (
  <div className="number-box">
    {value !== "" && <div className="number-text">{value}</div>}
  </div>
);

const Number = ({ number, answer }) => {
  const firstIndex = number * 2 - 2;
  const secondIndex = number * 2 - 1;

  return (
    <div className="number">
      <NumberBox value={answer[firstIndex]} />
      <NumberBox value={answer[secondIndex]} />
    </div>
  );
};
