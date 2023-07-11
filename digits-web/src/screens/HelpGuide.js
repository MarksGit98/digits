export const HelpGuide = ({ open, handleClick }) => {
  const rules = [
    "You must input a digit 0-9 in all 6 of the digit slots to submit a guess.",
    "The 3 numbers can be anything from 0 - 99. Numbers less than 10 will begin with the digit 0.",
    "With each attempted guess, a new clue will be provided to help you guess the numbers.",
    "Tiles from previous attempts will appear orange if you had correctly guessed the digit for that tile.",
  ];

  return (
    <div className={`help-guide ${open ? "open" : "close"}`}>
      <div className="help-content">
        <h2>How To Play</h2>
        <h3>Correctly guess all 6 digits to compose the 3 numbers</h3>
        <ul className="help-content-rules">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
        <p>New puzzles are released every night at midnight EST.</p>
        <div className="close-button" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};
