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
  checkIfAllNumbersSumToSomeNumber,
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
  DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
  MAX_GUESS_AMOUNT,
  CLUE_CATEGORY_GROUPS,
  MISCELLANEOUS,
} from "./constants";

const numberToTextConversion = (number) => {
  let formattedNumber;
  formattedNumber = number.toString();

  if (formattedNumber === "1") {
    return `${formattedNumber}st`;
  } else if (formattedNumber === "2") {
    return `${formattedNumber}nd`;
  } else if (formattedNumber === "3") {
    return `${formattedNumber}rd`;
  } else {
    return `${formattedNumber}th`;
  }
};

const generateClues = (
  DIGIT_ONE = 1,
  DIGIT_TWO = 2,
  DIGIT_THREE = 3,
  DIGIT_FOUR = 4,
  DIGIT_FIVE = 5,
  DIGIT_SIX = 6,
  NUMBER_ONE = 1,
  NUMBER_TWO = 2,
  NUMBER_THREE = 3,
  digit1 = 0,
  digit2 = 0,
  digit3 = 0,
  digit4 = 0,
  digit5 = 0,
  digit6 = 0,
  number1 = 0,
  number2 = 0,
  number3 = 0
) => {
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
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 25`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 25),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 30`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 30),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 40`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 40),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 50`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 50),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 60`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 60),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 70`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 70),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 80`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 80),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 90`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 90),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(NUMBER_TWO)} number sum to 75`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 75),
    },
    {
      clue: `The ${numberToTextConversion(
        NUMBER_ONE
      )} number and the ${numberToTextConversion(
        NUMBER_TWO
      )} number sum to 100`,
      used: false,
      type: DO_NUMBERS_SUM_TO_NUMBER,
      evaluation: checkIfNumbersSum(number1, number2, 100),
    },
    {
      clue: `All three numbers sum to 25`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        25
      ),
    },
    {
      clue: `All three numbers sum to 30`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        30
      ),
    },
    {
      clue: `All three numbers sum to 40`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        40
      ),
    },
    {
      clue: `All three numbers sum to 50`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        50
      ),
    },
    {
      clue: `All three numbers sum to 60`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        60
      ),
    },
    {
      clue: `All three numbers sum to 70`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        70
      ),
    },
    {
      clue: `All three numbers sum to 75`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        75
      ),
    },
    {
      clue: `All three numbers sum to 80`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        80
      ),
    },
    {
      clue: `All three numbers sum to 90`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        90
      ),
    },
    {
      clue: `All three numbers sum to 100`,
      used: false,
      type: DO_ALL_NUMBERS_SUM_TO_SOME_NUMBER,
      evaluation: checkIfAllNumbersSumToSomeNumber(
        number1,
        number2,
        number3,
        100
      ),
    },
  ];

  return clues;
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
  let DIGIT_ONE = 1;
  let DIGIT_TWO = 2;
  let DIGIT_THREE = 3;
  let DIGIT_FOUR = 4;
  let DIGIT_FIVE = 5;
  let DIGIT_SIX = 6;
  let NUMBER_ONE = 1;
  let NUMBER_TWO = 2;
  let NUMBER_THREE = 3;
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
    { digit: digit1, index: 1 },
    { digit: digit2, index: 2 },
    { digit: digit3, index: 3 },
    { digit: digit4, index: 4 },
    { digit: digit5, index: 5 },
    { digit: digit6, index: 6 },
  ];
  let numbers = [
    { number: number1, index: 1 },
    { number: number2, index: 2 },
    { number: number3, index: 3 },
  ];

  let remaining_digits = [...digits];
  let remaining_numbers = [...numbers];
  for (let num1 of remaining_numbers) {
    number1 = num1.number;
    NUMBER_ONE = num1.index;
    let remaining_numbers_1 = remaining_numbers.slice();
    remaining_numbers_1.splice(NUMBER_ONE - 1, 1);
    for (let num2 of remaining_numbers_1) {
      number2 = num2.number;
      NUMBER_TWO = num2.index;
      let remaining_numbers_2 = remaining_numbers_1.slice();
      remaining_numbers_2.splice(NUMBER_TWO - 1, 1);
      for (let num3 of remaining_numbers_2) {
        number3 = num3.number;
        NUMBER_THREE = num3.index;
        for (let dig1 of remaining_digits) {
          digit1 = dig1.digit;
          DIGIT_ONE = dig1.index;
          let remaining_digits_1 = remaining_digits.slice();
          remaining_digits_1.splice(DIGIT_ONE - 1, 1);
          for (let dig2 of remaining_digits_1) {
            digit2 = dig2.digit;
            DIGIT_TWO = dig2.index;
            let remaining_digits_2 = remaining_digits_1.slice();
            remaining_digits_2.splice(DIGIT_ONE - 1, 1);
            for (let dig3 of remaining_digits_2) {
              digit3 = dig3.digit;
              DIGIT_THREE = dig3.index;
              let remaining_digits_3 = remaining_digits_2.slice();
              remaining_digits_3.splice(DIGIT_TWO - 1, 1);
              for (let dig4 of remaining_digits_3) {
                digit4 = dig4.digit;
                DIGIT_FOUR = dig4.index;
                let remaining_digits_4 = remaining_digits_3.slice();
                remaining_digits_4.splice(DIGIT_THREE - 1, 1);
                for (let dig5 of remaining_digits_4) {
                  digit5 = dig5.digit;
                  DIGIT_FIVE = dig5.index;
                  let remaining_digits_5 = remaining_digits_4.slice();
                  remaining_digits_5.splice(DIGIT_FOUR - 1, 1);
                  for (let dig6 of remaining_digits_5) {
                    digit6 = dig6.digit;
                    DIGIT_SIX = dig6.index;

                    console.log(
                      "dig1",
                      digit1,
                      "dig2",
                      digit2,
                      "dig3",
                      digit3,
                      "dig4",
                      digit4,
                      "dig5",
                      digit5,
                      "dig6",
                      digit6
                    );
                    let clues = generateClues(
                      DIGIT_ONE,
                      DIGIT_TWO,
                      DIGIT_THREE,
                      DIGIT_FOUR,
                      DIGIT_FIVE,
                      DIGIT_SIX,
                      NUMBER_ONE,
                      NUMBER_TWO,
                      NUMBER_THREE,
                      digit1,
                      digit2,
                      digit3,
                      digit4,
                      digit5,
                      digit6,
                      number1,
                      number2,
                      number3
                    );
                    for (let clue of clues) {
                      if (clue.evaluation) {
                        possibleClues.push({
                          clueObj: clue,
                          digit1: digit1,
                          digit2: digit2,
                          digit3: digit3,
                          digit4: digit4,
                          digit5: digit5,
                          digit6: digit6,
                          number1: number1,
                          number2: number2,
                          number3: number3,
                        });
                      }
                      remaining_digits = [...digits];
                      remaining_numbers = [...numbers];
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return possibleClues;
};

const shuffleClues = (possibleClues) => {
  for (let i = possibleClues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [possibleClues[i], possibleClues[j]] = [possibleClues[j], possibleClues[i]];
  }
};

export const selectRandomClues = (
  possibleClues,
  numOfClues = MAX_GUESS_AMOUNT
) => {
  const selectedClues = [];
  const selectedTypes = [];
  const selectedGroupTypes = { ...CLUE_CATEGORY_GROUPS };

  shuffleClues(possibleClues);

  for (const clue of possibleClues) {
    const clueType = clue.clueObj.type;
    console.log(clueType);
    console.log(selectedGroupTypes[clueType.group]);
    if (
      !selectedTypes.includes(clueType.description) &&
      clueType.group !== MISCELLANEOUS
        ? selectedGroupTypes[clueType.group].count < 2
        : true
    ) {
      selectedClues.push(clue.clueObj.clue);
      selectedTypes.push(clueType.description);
      selectedGroupTypes[clueType.group].count += 1;
      if (selectedClues.length === numOfClues) {
        break;
      }
    }
  }

  return selectedClues;
};
