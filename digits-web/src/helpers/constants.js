export const MAX_GUESS_AMOUNT = 6;

export const DIGIT = "digit";
export const NUMBER = "number";
export const DIGIT_AND_NUMBER = "digit and number";

export const IS_ODD_DIGIT = "is odd digit";
export const IS_EVEN_DIGIT = "is even digit";
export const IS_PRIME_NUMBER = "is prime number";
export const IS_PRIME_DIGIT = "is prime digit";
export const IS_DIGIT_DIVISIBLE_BY_THREE = "is digit divisible by 3";
export const IS_DIGIT_DIVISIBLE_BY_FOUR = "is digit divisble by 4";
export const IS_DIGIT_DIVISIBLE_BY_FIVE = "is digit divisble by 5";
export const IS_DIGIT_DIVISIBLE_BY_SIX = "is digit divisble by 6";
export const IS_DIGIT_DIVISIBLE_BY_SEVEN = "is digit divisble by 7";
export const IS_DIGIT_DIVISIBLE_BY_EIGHT = "is digit divisble by 8";
export const IS_DIGIT_DIVISIBLE_BY_NINE = "is digit divisble by 9";
export const IS_NUMBER_DIVISIBLE_BY_THREE = "is number divisible by 3";
export const IS_NUMBER_DIVISIBLE_BY_FOUR = "is number divisble by 4";
export const IS_NUMBER_DIVISIBLE_BY_SIX = "is number divisble by 6";
export const IS_NUMBER_DIVISIBLE_BY_SEVEN = "is number divisble by 7";
export const IS_NUMBER_DIVISIBLE_BY_EIGHT = "is number divisble by 8";
export const IS_NUMBER_DIVISIBLE_BY_NINE = "is number divisble by 9";
export const IS_NUMBER_DIVISIBLE_ANOTHER_NUMBER =
  " is number divisible by another number";
export const IS_NUMBER_PROPORTIONAL_TO_DIGIT =
  "is number proportional to digit";
export const IS_DIGIT_PROPORTIONAL_TO_DIGIT = "is digit proportional to digit";
export const IS_NUMBER_PROPORTIONAL_TO_NUMBER =
  "is number proportional to number";
export const ARE_NUMBERS_THE_SAME = "are numbers the same";
export const ARE_DIGITS_THE_SAME = "are digits the same";
export const DIGITS_DIFFERENCE = "digits difference";
export const NUMBERS_DIFFERENCE = "is same difference numbers";
export const IS_NUMBER_PERFECT_SQUARE = "is number perfect square";
export const IS_DIGIT_PERFECT_SQUARE = "is digit perfect square";
export const DO_NUMBERS_SUM_TO_NUMBER = "do numbers sum";
export const DO_DIGITS_SUM_TO_DIGIT = "do digits sum to digit";
export const DO_DIGITS_SUM_TO_NUMBER = "do digits sum to number";
export const IS_DIGIT_SQUAREROOT_OF_NUMBER = "is digit squareroot of number";
export const DIGITS_MULTIPLY_TO_DIGIT = "digits multiply to digit";
export const NUMBERS_MULTIPLY_TO_NUMBER = "numbers multiply to number";
export const NUMBER_AND_DIGIT_MULTIPLY_TO_NUMBER =
  "number and digit multiply to number";
export const DIGITS_MULTIPLY_TO_NUMBER = "digits multiply to number";
export const IS_SMALLEST_DIGIT = "is smallest digit";
export const IS_LARGEST_DIGIT = "is largest digit";
export const IS_SMALLEST_NUMBER = "is smallest number";
export const IS_LARGEST_NUMBER = "is largest number";
export const HOW_MANY_EVEN_ODD_DIGITS = "how many even/odd digits";
export const DO_ALL_DIGITS_SUM_TO_NUMBER = "do all digits sum to number";
export const DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS =
  "difference between two number pairs";
export const DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS =
  "difference between two digit pairs";
export const DIFFERENCE_BETWEEN_NUMBER_PAIR_AND_DIGIT_PAIR =
  "difference between number pair and digit pair";
export const DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS_DIVISION =
  "difference between two digit pairs division";
export const DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS_DIVISION =
  "difference between two number pairs";

export const NUMBER_DIGIT_REQS = {
  [IS_ODD_DIGIT]: DIGIT,
  [IS_EVEN_DIGIT]: DIGIT,
  [IS_PRIME_NUMBER]: NUMBER,
  [IS_PRIME_DIGIT]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_THREE]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_FOUR]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_FIVE]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_SIX]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_SEVEN]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_EIGHT]: DIGIT,
  [IS_DIGIT_DIVISIBLE_BY_NINE]: DIGIT,
  [IS_NUMBER_DIVISIBLE_BY_THREE]: NUMBER,
  [IS_NUMBER_DIVISIBLE_BY_FOUR]: NUMBER,
  [IS_NUMBER_DIVISIBLE_BY_SIX]: NUMBER,
  [IS_NUMBER_DIVISIBLE_BY_SEVEN]: NUMBER,
  [IS_NUMBER_DIVISIBLE_BY_EIGHT]: NUMBER,
  [IS_NUMBER_DIVISIBLE_BY_NINE]: NUMBER,
  [IS_NUMBER_DIVISIBLE_ANOTHER_NUMBER]: NUMBER,
  [IS_NUMBER_PROPORTIONAL_TO_DIGIT]: DIGIT_AND_NUMBER,
  [IS_DIGIT_PROPORTIONAL_TO_DIGIT]: DIGIT,
  [IS_NUMBER_PROPORTIONAL_TO_NUMBER]: NUMBER,
  [ARE_NUMBERS_THE_SAME]: NUMBER,
  [ARE_DIGITS_THE_SAME]: DIGIT,
  [IS_NUMBER_PERFECT_SQUARE]: NUMBER,
  [IS_DIGIT_PERFECT_SQUARE]: DIGIT,
  [DO_NUMBERS_SUM_TO_NUMBER]: NUMBER,
  [DO_DIGITS_SUM_TO_DIGIT]: DIGIT,
  [DO_DIGITS_SUM_TO_NUMBER]: DIGIT_AND_NUMBER,
  [IS_DIGIT_SQUAREROOT_OF_NUMBER]: DIGIT_AND_NUMBER,
  [NUMBERS_MULTIPLY_TO_NUMBER]: NUMBER,
  [NUMBER_AND_DIGIT_MULTIPLY_TO_NUMBER]: DIGIT_AND_NUMBER,
  [DIGITS_MULTIPLY_TO_NUMBER]: DIGIT_AND_NUMBER,
  [DIGITS_MULTIPLY_TO_DIGIT]: DIGIT,
  [IS_SMALLEST_DIGIT]: DIGIT,
  [IS_LARGEST_DIGIT]: DIGIT,
  [IS_SMALLEST_NUMBER]: NUMBER,
  [IS_LARGEST_NUMBER]: NUMBER,
  [HOW_MANY_EVEN_ODD_DIGITS]: DIGIT,
  [DO_ALL_DIGITS_SUM_TO_NUMBER]: DIGIT_AND_NUMBER,
  [DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS]: NUMBER,
  [DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS]: DIGIT,
  [DIFFERENCE_BETWEEN_NUMBER_PAIR_AND_DIGIT_PAIR]: DIGIT_AND_NUMBER,
  [DIFFERENCE_BETWEEN_TWO_DIGIT_PAIRS_DIVISION]: DIGIT,
  [DIFFERENCE_BETWEEN_TWO_NUMBER_PAIRS_DIVISION]: NUMBER,
};
