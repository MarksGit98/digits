export const ExampleRow = ({ example, answer }) => (
  <div className="example-input-container">
    <Number number={1} answer={answer} example={example} />
    <div className="example-separator" />
    <Number number={2} answer={answer} example={example} />
    <div className="example-separator" />
    <Number number={3} answer={answer} example={example} />
  </div>
);

const NumberBox = ({ value, correct }) => (
  <div
    className={`number-box ${correct ? "correct-digit" : "incorrect-digit"}`}
  >
    {value !== "" && <div className={"number-text"}>{value}</div>}
  </div>
);

const Number = ({ number, example, answer }) => {
  const firstIndex = number * 2 - 2;
  const secondIndex = number * 2 - 1;

  const isCorrectDigit1 = example[firstIndex] === answer[firstIndex];
  const isCorrectDigit2 = example[secondIndex] === answer[secondIndex];
  return (
    <div className="number">
      <NumberBox value={example[firstIndex]} correct={isCorrectDigit1} />
      <NumberBox value={example[secondIndex]} correct={isCorrectDigit2} />
    </div>
  );
};
