import {
  checkIfEven,
  checkIfOdd,
  checkIfDivisibleBy,
  checkIfPerfectSquare,
  checkIfPrime,
  checkIfSameDifference,
  checkIfDifferenceByFactor,
  checkIfSquareRootOf,
  checkIfNumbersSum,
  checkIfTheSame,
  checkIfProportionalBy,
  checkIfSmallest,
  checkIfLargest,
  checkHowManyEven,
  checkIfAllEven,
  checkHowManyOdd,
  checkIfAllOdd,
  checkHowManyPerfectSquares,
  checkIfSameDifferenceDivision,
  checkHowManyPrime,
} from "./evalFunctions";

import {
  IS_EVEN_DIGIT,
  IS_ODD_DIGIT,
  IS_PRIME_NUMBER,
  IS_PRIME_DIGIT,
  IS_DIGIT_DIVISIBLE_BY_THREE,
  IS_DIGIT_DIVISIBLE_BY_FOUR,
  IS_DIGIT_DIVISIBLE_BY_FIVE,
  IS_DIGIT_DIVISIBLE_BY_SIX,
  IS_DIGIT_DIVISIBLE_BY_SEVEN,
  IS_DIGIT_DIVISIBLE_BY_EIGHT,
  IS_DIGIT_DIVISIBLE_BY_NINE,
  IS_NUMBER_DIVISIBLE_BY_THREE,
  IS_NUMBER_DIVISIBLE_BY_FOUR,
  IS_NUMBER_DIVISIBLE_BY_SIX,
  IS_NUMBER_DIVISIBLE_BY_SEVEN,
  IS_NUMBER_DIVISIBLE_BY_EIGHT,
  IS_NUMBER_DIVISIBLE_BY_NINE,
  IS_NUMBER_DIVISIBLE_ANOTHER_NUMBER,
  ARE_NUMBERS_THE_SAME,
  ARE_DIGITS_THE_SAME,
  IS_NUMBER_PERFECT_SQUARE,
  IS_DIGIT_PERFECT_SQUARE,
  DO_NUMBERS_SUM_TO_NUMBER,
  DO_DIGITS_SUM_TO_DIGIT,
  IS_DIGIT_SQUAREROOT_OF_NUMBER,
  DO_DIGITS_SUM_TO_NUMBER,
  NUMBER_AND_DIGIT_MULTIPLY_TO_NUMBER,
  DIGITS_MULTIPLY_TO_DIGIT,
  NUMBERS_MULTIPLY_TO_NUMBER,
  DIGITS_MULTIPLY_TO_NUMBER,
  IS_SMALLEST_DIGIT,
  IS_LARGEST_DIGIT,
  IS_SMALLEST_NUMBER,
  IS_LARGEST_NUMBER,
  HOW_MANY_EVEN_ODD_DIGITS,
  DO_ALL_DIGITS_SUM_TO_NUMBER,
  IS_DIGIT_PROPORTIONAL_TO_DIGIT,
  IS_NUMBER_PROPORTIONAL_TO_NUMBER,
  IS_NUMBER_PROPORTIONAL_TO_DIGIT,
  DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS,
  DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS,
  DIFFERENCE_BETWEEN_NUMBER_PAIR_AND_DIGIT_PAIR,
  DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS_DIVISION,
  DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS_DIVISION,
  NUMBER_DIGIT_REQS,
  DIGIT,
  NUMBER,
  DIGIT_AND_NUMBER,
} from "./constants";
const numberToTextConversion = (number) => {
  let formattedNumber;
  if (number < 10) {
    formattedNumber = `0${number}`;
  } else {
    formattedNumber = number.toString();
  }
  if (formattedNumber[1] === "1") {
    return `${formattedNumber}st`;
  } else if (formattedNumber[1] === "2") {
    return `${formattedNumber}nd`;
  } else if (formattedNumber[1] === "3") {
    return `${formattedNumber}rd`;
  } else {
    return `${formattedNumber}th`;
  }
};

const randomizeClues = (clues) => {
  const shuffledClues = [...clues]; // Create a copy of the original array

  // Perform Fisher-Yates shuffle
  for (let i = shuffledClues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledClues[i], shuffledClues[j]] = [shuffledClues[j], shuffledClues[i]];
  }

  return shuffledClues;
};
//Digit as passed in to numberToTextConversion refers to the place of the digit whereas when passed
//Into the evaluation function refers to the actual number. Need to correct this somehow
//Also categorize all of the clues and only allow 1 clue from each category in
//Before selecting clues to make sure they all get a chance, randomize them before running a loop of all possible permutations through
//Also accumulate all clues for all possible permutations first and randomize those before choosing which final one of each category to go with
//Additionally add weights in the selection process
//Check for division by 0 error
//Save the clues and just use an existing JSON for puzzles on live to avoid run time issueZ

export const getAllApplicableClues = (answer) => {
  const possibleClues = [];
  let DIGIT_ONE = "DIGIT #1";
  let DIGIT_TWO = "DIGIT #2";
  let DIGIT_THREE = "DIGIT #3";
  let DIGIT_FOUR = "DIGIT #4";
  let DIGIT_FIVE = "DIGIT #5";
  let DIGIT_SIX = "DIGIT #6";

  let NUMBER_ONE = "NUMBER #1";
  let NUMBER_TWO = "NUMBER #2";
  let NUMBER_THREE = "NUMBER #3";

  let digit1 = answer[0];
  let digit2 = answer[1];
  let digit3 = answer[2];
  let digit4 = answer[3];
  let digit5 = answer[4];
  let digit6 = answer[5];
  let number1 = parseInt(`${digit1}${digit2}`);
  let number2 = parseInt(`${digit3}${digit4}`);
  let number3 = parseInt(`${digit5}${digit6}`);
  let digits = [
    { digit: digit1, index: 0 },
    { digit: digit2, index: 1 },
    { digit: digit3, index: 2 },
    { digit: digit4, index: 3 },
    { digit: digit5, index: 4 },
    { digit: digit6, index: 5 },
  ];
  let numbers = [
    { number: number1, index: 0 },
    { number: number2, index: 1 },
    { number: number3, index: 2 },
  ];

  const clues = [
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is an even number`,
      used: false,
      type: IS_EVEN_DIGIT,
      evaluation: checkIfEven(digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is an odd number`,
      used: false,
      type: IS_ODD_DIGIT,
      evaluation: checkIfOdd(digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is a prime number`,
      used: false,
      type: IS_PRIME_DIGIT,
      evaluation: checkIfPrime(digit1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} and ${numberToTextConversion(DIGIT_TWO)} digits are both even numbers`,
      used: false,
      type: IS_EVEN_DIGIT,
      evaluation: checkIfEven(digit1, digit2),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit and ${numberToTextConversion(
        DIGIT_TWO
      )} digits are both odd numbers`,
      used: false,
      type: IS_ODD_DIGIT,
      evaluation: checkIfOdd(digit1, digit2),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} and ${numberToTextConversion(
        DIGIT_TWO
      )} digits are both prime numbers`,
      used: false,
      type: IS_PRIME_DIGIT,
      evaluation: checkIfPrime(digit1, digit2),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)}, ${numberToTextConversion(
        DIGIT_TWO
      )}, and ${numberToTextConversion(
        DIGIT_THREE
      )} digits are all even numbers`,
      used: false,
      type: IS_EVEN_DIGIT,
      evaluation: checkIfEven(digit1, digit2, digit3),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)}, ${numberToTextConversion(
        DIGIT_TWO
      )}, ${numberToTextConversion(DIGIT_THREE)} digits are all odd numbers`,
      used: false,
      type: IS_ODD_DIGIT,
      evaluation: checkIfOdd(digit1, digit2, digit3),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 3`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_THREE,
      evaluation: checkIfDivisibleBy(3, digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 4`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_FOUR,
      evaluation: checkIfDivisibleBy(4, digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 5`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_FIVE,
      evaluation: checkIfDivisibleBy(5, digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 6`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_SIX,
      evaluation: checkIfDivisibleBy(6, digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 7`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_SEVEN,
      evaluation: checkIfDivisibleBy(7, digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 8`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_EIGHT,
      evaluation: checkIfDivisibleBy(8, digit1),
    },
    {
      clue: `The ${numberToTextConversion(DIGIT_ONE)} digit is divisible by 9`,
      used: false,
      type: IS_DIGIT_DIVISIBLE_BY_NINE,
      evaluation: checkIfDivisibleBy(9, digit1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by the ${numberToTextConversion(
        NUMBER_TWO
      )} number`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_ANOTHER_NUMBER,
      evaluation: checkIfDivisibleBy(number2, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit is double the ${numberToTextConversion(DIGIT_TWO)} digit`,
      used: false,
      type: IS_DIGIT_PROPORTIONAL_TO_DIGIT,
      evaluation: checkIfProportionalBy(2, digit2, digit1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit is triple the ${numberToTextConversion(DIGIT_TWO)} digit`,
      used: false,
      type: IS_DIGIT_PROPORTIONAL_TO_DIGIT,
      evaluation: checkIfProportionalBy(3, digit2, digit1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is double the ${numberToTextConversion(NUMBER_TWO)} number`,
      used: false,
      type: IS_NUMBER_PROPORTIONAL_TO_NUMBER,
      evaluation: checkIfProportionalBy(2, number2, number1),
    },

    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is triple the ${numberToTextConversion(NUMBER_TWO)} number`,
      used: false,
      type: IS_NUMBER_PROPORTIONAL_TO_NUMBER,
      evaluation: checkIfProportionalBy(3, number2, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is one quarter of the ${numberToTextConversion(
        NUMBER_TWO
      )} number`,
      used: false,
      type: IS_NUMBER_PROPORTIONAL_TO_NUMBER,
      evaluation: checkIfProportionalBy(4, number1, number2),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number + the ${numberToTextConversion(
        NUMBER_TWO
      )} number = the ${numberToTextConversion(NUMBER_THREE)} number`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, number3),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by 3`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_THREE,
      evaluation: checkIfDivisibleBy(3, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by 4`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_FOUR,
      evaluation: checkIfDivisibleBy(4, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by 6`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_SIX,
      evaluation: checkIfDivisibleBy(6, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by 7`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_SEVEN,
      evaluation: checkIfDivisibleBy(7, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by 8`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_EIGHT,
      evaluation: checkIfDivisibleBy(8, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is divisible by 9`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_NINE,
      evaluation: checkIfDivisibleBy(9, number1),
    },
    {
      clue: `Both the ${numberToTextConversion(
        NUMBER_ONE
      )} number and ${numberToTextConversion(
        NUMBER_TWO
      )} number are divisible by 3`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_THREE,
      evaluation: checkIfDivisibleBy(3, number1, number2),
    },
    {
      clue: `Both the ${numberToTextConversion(
        NUMBER_ONE
      )} number and ${numberToTextConversion(
        NUMBER_TWO
      )} number are divisible by 4`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_FOUR,
      evaluation: checkIfDivisibleBy(4, number1, number2),
    },
    {
      clue: `Both the ${numberToTextConversion(
        NUMBER_ONE
      )} number and ${numberToTextConversion(
        NUMBER_TWO
      )} number are divisible by 6`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_SIX,
      evaluation: checkIfDivisibleBy(6, number1, number2),
    },
    {
      clue: `Both the ${numberToTextConversion(
        NUMBER_ONE
      )} number and ${numberToTextConversion(
        NUMBER_TWO
      )} number are divisible by 7`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_SEVEN,
      evaluation: checkIfDivisibleBy(7, number1, number2),
    },
    {
      clue: `Both the ${numberToTextConversion(
        NUMBER_ONE
      )} number and ${numberToTextConversion(
        NUMBER_TWO
      )} number are divisible by 8`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_EIGHT,
      evaluation: checkIfDivisibleBy(8, number1, number2),
    },
    {
      clue: `Both the ${numberToTextConversion(
        NUMBER_ONE
      )} number and ${numberToTextConversion(
        NUMBER_TWO
      )} number are divisible by 9`,
      used: false,
      type: IS_NUMBER_DIVISIBLE_BY_NINE,
      evaluation: checkIfDivisibleBy(9, number1, number2),
    },
    {
      clue: `The ${numberToTextConversion(NUMBER_ONE)} number is prime`,
      used: false,
      type: IS_PRIME_NUMBER,
      evaluation: checkIfPrime(number1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit and the ${numberToTextConversion(
        DIGIT_TWO
      )} digit are the same digit`,
      used: false,
      type: ARE_DIGITS_THE_SAME,
      evaluation: checkIfTheSame(digit1, digit2),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit, the ${numberToTextConversion(
        DIGIT_TWO
      )} digit, and the ${numberToTextConversion(
        DIGIT_THREE
      )} digit are all the same digit`,
      used: false,
      type: ARE_DIGITS_THE_SAME,
      evaluation: checkIfTheSame(digit1, digit2, digit3),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number are the same number`,
      used: false,
      type: ARE_NUMBERS_THE_SAME,
      evaluation: checkIfTheSame(number1, number2),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit is the square root of the ${numberToTextConversion(
        NUMBER_ONE
      )} number`,
      used: false,
      type: IS_DIGIT_SQUAREROOT_OF_NUMBER,
      evaluation: checkIfSquareRootOf(digit1, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit + the ${numberToTextConversion(
        DIGIT_TWO
      )} digit = the ${numberToTextConversion(DIGIT_THREE)} digit`,
      used: false,
      type: DO_DIGITS_SUM_TO_DIGIT,
      evaluation: checkIfNumbersSum(digit1, digit2, digit3),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit + the ${numberToTextConversion(
        DIGIT_TWO
      )} digit = the ${numberToTextConversion(NUMBER_ONE)} number`,
      used: false,
      type: DO_DIGITS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(digit1, digit2, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number multiplied by the ${numberToTextConversion(
        NUMBER_TWO
      )} number = the ${numberToTextConversion(NUMBER_THREE)} number`,
      used: false,
      type: NUMBERS_MULTIPLY_TO_NUMBER,
      evaluation: checkIfProportionalBy(number1, number2, number3),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number multiplied by the ${numberToTextConversion(
        DIGIT_ONE
      )} digit = the ${numberToTextConversion(NUMBER_TWO)} number`,
      used: false,
      type: NUMBER_AND_DIGIT_MULTIPLY_TO_NUMBER,
      evaluation: checkIfProportionalBy(number1, digit1, number2),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit multiplied by the ${numberToTextConversion(
        DIGIT_TWO
      )} digit = the ${numberToTextConversion(DIGIT_THREE)} digit`,
      used: false,
      type: DIGITS_MULTIPLY_TO_DIGIT,
      evaluation: checkIfProportionalBy(digit1, digit2, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit multiplied by the ${numberToTextConversion(
        DIGIT_TWO
      )} digit = the ${numberToTextConversion(NUMBER_ONE)} number`,
      used: false,
      type: DIGITS_MULTIPLY_TO_NUMBER,
      evaluation: checkIfProportionalBy(digit1, digit2, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit is the smallest of the 6 digits`,
      used: false,
      type: IS_SMALLEST_DIGIT,
      evaluation: checkIfSmallest(
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6
      ),
    },
    {
      clue: `The ${numberToTextConversion(
        DIGIT_ONE
      )} digit is the largest of the 6 digits`,
      used: false,
      type: IS_LARGEST_DIGIT,
      evaluation: checkIfLargest(
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6
      ),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is the smallest of the 3 numbers`,
      used: false,
      type: IS_SMALLEST_NUMBER,
      evaluation: checkIfSmallest(number1, number2, number3),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is the largest of the 3 numbers`,
      used: false,
      type: IS_LARGEST_NUMBER,
      evaluation: checkIfLargest(number1, number2, number3),
    },
    {
      clue: `Only 1 of the 3 numbers is prime`,
      used: false,
      type: IS_PRIME_NUMBER,
      evaluation: checkHowManyPrime(1, [number1, number2, number3]),
    },
    {
      clue: `Only 1 of the 6 digits is an even number`,
      used: false,
      type: HOW_MANY_EVEN_ODD_DIGITS,
      evaluation: checkHowManyOdd(1, [
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6,
      ]),
    },
    {
      clue: `Only 1 of the 6 digits is an odd number`,
      used: false,
      type: HOW_MANY_EVEN_ODD_DIGITS,
      evaluation: checkHowManyEven(1, [
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6,
      ]),
    },
    {
      clue: `All of the digits are even numbers`,
      used: false,
      type: HOW_MANY_EVEN_ODD_DIGITS,
      evaluation: checkIfAllEven(
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6
      ),
    },
    {
      clue: `All of the digits are odd numbers`,
      used: false,
      type: HOW_MANY_EVEN_ODD_DIGITS,
      evaluation: checkIfAllOdd(digit1, digit2, digit3, digit4, digit5, digit6),
    },
    {
      clue: `Half of the digits are even numbers while the other half are odd numbers`,
      used: false,
      type: HOW_MANY_EVEN_ODD_DIGITS,
      evaluation: checkHowManyOdd(3, [
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6,
      ]),
    },
    {
      clue: `The sum of the 6 digits is equal to the ${numberToTextConversion(
        NUMBER_ONE
      )} number`,
      used: false,
      type: DO_ALL_DIGITS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(
        digit1 + digit2 + digit3,
        digit4 + digit5 + digit6,
        number1
      ),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is double the value of the ${numberToTextConversion(
        DIGIT_ONE
      )} digit`,
      used: false,
      type: IS_NUMBER_PROPORTIONAL_TO_DIGIT,
      evaluation: checkIfProportionalBy(2, digit1, number1),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is triple the value of the ${numberToTextConversion(
        DIGIT_ONE
      )} digit`,
      used: false,
      type: IS_NUMBER_PROPORTIONAL_TO_DIGIT,
      evaluation: checkIfProportionalBy(3, digit1, number1),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number is the same as the difference between the ${numberToTextConversion(
        NUMBER_TWO
      )} number and the ${numberToTextConversion(
        NUMBER_THREE
      )} number (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS,
      evaluation: checkIfSameDifference(number1, number2, number3),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        DIGIT_ONE
      )} digit and the ${numberToTextConversion(
        DIGIT_TWO
      )} digit is the same as the difference between the ${numberToTextConversion(
        DIGIT_THREE
      )} digit and the ${numberToTextConversion(
        DIGIT_FOUR
      )} digit (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS,
      evaluation: checkIfSameDifference(digit1, digit2, digit3, digit4),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        DIGIT_ONE
      )} digit and the ${numberToTextConversion(
        DIGIT_TWO
      )} digit is the same as the difference between the ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_NUMBER_PAIR_AND_DIGIT_PAIR,
      evaluation: checkIfSameDifference(digit1, digit2, number1, number2),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number is twice the difference between the ${numberToTextConversion(
        DIGIT_ONE
      )} digit and the ${numberToTextConversion(
        DIGIT_TWO
      )} digit (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_NUMBER_PAIR_AND_DIGIT_PAIR,
      evaluation: checkIfDifferenceByFactor(
        2,
        digit1,
        digit2,
        number1,
        number2
      ),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number is three times the difference between the ${numberToTextConversion(
        DIGIT_ONE
      )} digit and the ${numberToTextConversion(
        DIGIT_TWO
      )} digit (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_NUMBER_PAIR_AND_DIGIT_PAIR,
      evaluation: checkIfDifferenceByFactor(
        3,
        digit1,
        digit2,
        number1,
        number2
      ),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number is twice the difference between the ${numberToTextConversion(
        NUMBER_TWO
      )} number and the ${numberToTextConversion(
        NUMBER_THREE
      )} number (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS,
      evaluation: checkIfDifferenceByFactor(2, number3, number2, number1),
    },
    {
      clue: `The difference between the ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number is three times the difference between the ${numberToTextConversion(
        NUMBER_TWO
      )} number and the ${numberToTextConversion(
        NUMBER_THREE
      )} number (in absolute value)`,
      used: false,
      type: DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS,
      evaluation: checkIfDifferenceByFactor(3, number3, number2, number1),
    },
    {
      clue: `The result of the ${numberToTextConversion(
        DIGIT_ONE
      )} digit divided by the ${numberToTextConversion(
        DIGIT_TWO
      )} digit is the same as the result of the ${numberToTextConversion(
        DIGIT_THREE
      )} digit divided by the ${numberToTextConversion(DIGIT_FOUR)} digit`,
      used: false,
      type: DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS_DIVISION,
      evaluation: checkIfSameDifferenceDivision(digit1, digit2, digit3, digit4),
    },
    {
      clue: `The result of the ${numberToTextConversion(
        NUMBER_ONE
      )} number divided by the ${numberToTextConversion(
        NUMBER_TWO
      )} number is the same as the result of the ${numberToTextConversion(
        NUMBER_TWO
      )} number2 divided by the ${numberToTextConversion(NUMBER_THREE)} number`,
      used: false,
      type: DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS_DIVISION,
      evaluation: checkIfSameDifferenceDivision(number1, number2, number3),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number is a perfect square`,
      used: false,
      type: IS_NUMBER_PERFECT_SQUARE,
      evaluation: checkIfSameDifferenceDivision(digit1, digit2, digit3, digit4),
    },
    {
      clue: `All 3 numbers are perfect squares`,
      used: false,
      type: IS_NUMBER_PERFECT_SQUARE,
      evaluation: checkIfPerfectSquare(number1, number2, number3),
    },
    {
      clue: `2 of the 3 numbers are perfect squares`,
      used: false,
      type: IS_NUMBER_PERFECT_SQUARE,
      evaluation: checkHowManyPerfectSquares(2, [number1, number2, number3]),
    },
    {
      clue: `Only 1 of the digits is a perfect square`,
      used: false,
      type: IS_DIGIT_PERFECT_SQUARE,
      evaluation: checkHowManyPerfectSquares(1, [
        digit1,
        digit2,
        digit3,
        digit4,
        digit5,
        digit6,
      ]),
    },
  ];

  for (let clue_ind = 0; clue_ind < clues.length; clue_ind++) {
    let digits_array = [...digits];
    let clue_type = clues[clue_ind].type;
    let clue_text = clues[clue_ind].clue;
    if (NUMBER_DIGIT_REQS[clue_type] === DIGIT) {
      if (clue_text.includes(DIGIT_SIX)) {
        for (
          let digit1_ind = 0;
          digit1_ind < digits_array.length;
          digit1_ind++
        ) {
          let digit1 = digits_array[digit1_ind].digit;
          let remaining_digits1 = digits_array
            .slice(0, digit1_ind)
            .concat(digits_array.slice(digit1_ind + 1));
          for (
            let digit2_ind = 0;
            digit2_ind < remaining_digits1.length;
            digit2_ind++
          ) {
            let digit2 = remaining_digits1[digit2_ind].digit;
            let remaining_digits2 = remaining_digits1
              .slice(0, digit2_ind)
              .concat(remaining_digits1.slice(digit2_ind + 1));

            for (
              let digit3_ind = 0;
              digit3_ind < remaining_digits2.length;
              digit3_ind++
            ) {
              let digit3 = remaining_digits2[digit3_ind].digit;
              let remaining_digits3 = remaining_digits2
                .slice(0, digit3_ind)
                .concat(remaining_digits2.slice(digit3_ind + 1));

              for (
                let digit4_ind = 0;
                digit4_ind < remaining_digits3.length;
                digit4_ind++
              ) {
                let digit4 = remaining_digits3[digit4_ind].digit;
                let remaining_digits4 = remaining_digits3
                  .slice(0, digit4_ind)
                  .concat(remaining_digits3.slice(digit4_ind + 1));

                for (
                  let digit5_ind = 0;
                  digit5_ind < remaining_digits4.length;
                  digit5_ind++
                ) {
                  let digit5 = remaining_digits4[digit5_ind].digit;
                  let remaining_digits5 = remaining_digits4
                    .slice(0, digit5_ind)
                    .concat(remaining_digits4.slice(digit5_ind + 1));

                  for (
                    let digit6_ind = 0;
                    digit6_ind < remaining_digits5.length;
                    digit6_ind++
                  ) {
                    let digit6 = remaining_digits5[digit6_ind].digit;

                    if (clues[clue_ind].evaluation()) {
                      possibleClues.push({
                        clue: clues[clue_ind],
                        digits: {
                          digit1: digit1,
                          digit2: digit2,
                          digit3: digit3,
                          digit4: digit4,
                          digit5: digit5,
                          digit6: digit6,
                        },
                        numbers: {
                          number1: number1,
                          number2: number2,
                          number3: number3,
                        },
                        puzzle: answer,
                      });
                    }
                  }
                }
              }
            }
          }
        }
      } else if (clue_text.includes(DIGIT_FIVE)) {
        //finish code
      }
    } else if (NUMBER_DIGIT_REQS[clue_type] === NUMBER) {
    } else if (NUMBER_DIGIT_REQS[clue_type] === DIGIT_AND_NUMBER) {
    }
  }

  return possibleClues;
};