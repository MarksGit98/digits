export const checkIfEven = (
  number1,
  number2 = null,
  number3 = null,
  number4 = null,
  number5 = null,
  number6 = null
) => {
  const allEven =
    number1 % 2 === 0 &&
    (number2 ? number2 % 2 === 0 : true) &&
    (number3 ? number3 % 2 === 0 : true) &&
    (number4 ? number4 % 2 === 0 : true) &&
    (number5 ? number5 % 2 === 0 : true) &&
    (number6 ? number6 % 2 === 0 : true);
  return allEven;
};

export const checkIfOdd = (
  number1,
  number2 = null,
  number3 = null,
  number4 = null,
  number5 = null,
  number6 = null
) => {
  const allOdd =
    number1 % 2 !== 0 &&
    (number2 ? number2 % 2 !== 0 : true) &&
    (number3 ? number3 % 2 !== 0 : true) &&
    (number4 ? number4 % 2 !== 0 : true) &&
    (number5 ? number5 % 2 !== 0 : true) &&
    (number6 ? number6 % 2 !== 0 : true);
  return allOdd;
};

export const checkIfPrime = (number1, number2 = null) => {
  if (number1 < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number1); i++) {
    if (number1 % i === 0) {
      return false;
    }
  }

  if (number2) {
    if (number2 < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number2); i++) {
      if (number2 % i === 0) {
        return false;
      }
    }
  }
  return true;
};

export const checkIfDivisibleBy = (divisor, number1, number2 = null) => {
  return number1 % divisor === 0 && (number2 ? number2 % divisor === 0 : true);
};

export const checkIfSquareRootOf = (number1, number2) => {
  return Math.sqrt(number2) === number1;
};

export const checkIfTheSame = (number1, number2, number3 = null) => {
  if (number3) {
    return number1 === number2 && number2 === number3;
  }
  return number1 === number2;
};

export const checkIfNumbersSum = (number1, number2, number3) => {
  return number1 + number2 === number3;
};

export const checkIfPerfectSquare = (
  number1,
  number2 = null,
  number3 = null
) => {
  return (
    Math.sqrt(number1) % 1 === 0 &&
    (number2 ? Math.sqrt(number2) % 1 === 0 : true) &&
    (number3 ? Math.sqrt(number3) % 1 === 0 : true)
  );
};

export const checkHowManyPerfectSquares = (total, numbers) => {
  let perfectSquareCount = 0;
  for (let num of numbers) {
    if (checkIfPerfectSquare(num)) {
      perfectSquareCount += 1;
    }
  }
  return perfectSquareCount === total;
};

export const checkIfSameDifference = (
  number1,
  number2,
  number3,
  number4 = null
) => {
  if (number4) {
    return Math.abs(number1 - number2) === Math.abs(number3 - number4);
  }
  return Math.abs(number1 - number2) === Math.abs(number2 - number3);
};

export const checkIfProportionalBy = (factor, number1, number2) => {
  return number1 * factor === number2;
};

export const checkIfSameDifferenceDivision = (
  number1,
  number2,
  number3,
  number4 = null
) => {
  if (number4) {
    return number1 / number2 === number3 / number4;
  }
  return number1 / number2 === number2 / number3;
};
export const checkIfDifferenceByFactor = (
  factor,
  number1,
  number2,
  number3,
  number4 = null
) => {
  if (number4) {
    return factor * Math.abs(number1 - number2) === Math.abs(number3 - number4);
  }
  return factor * Math.abs(number1 - number2) === Math.abs(number2 - number3);
};

export const checkIfSmallest = (
  number1,
  number2,
  number3,
  number4 = null,
  number5 = null,
  number6 = null
) => {
  if (number4 && number5 && number6) {
    return (
      number1 < number2 &&
      number1 < number3 &&
      number1 < number4 &&
      number1 < number5 &&
      number1 < number6
    );
  }
  return number1 < number2 && number1 < number3;
};

export const checkIfLargest = (
  number1,
  number2,
  number3,
  number4 = null,
  number5 = null,
  number6 = null
) => {
  if (number4 && number5 && number6) {
    return (
      number1 > number2 &&
      number1 > number3 &&
      number1 > number4 &&
      number1 > number5 &&
      number1 > number6
    );
  }
  return number1 > number2 && number1 > number3;
};

export const checkIfAnyPrime = (number1, number2, number3) => {
  return (
    checkIfPrime(number1) || checkIfPrime(number2) || checkIfPrime(number3)
  );
};

export const checkHowManyPrime = (total, numbers) => {
  let primeCount = 0;
  for (let num of numbers) {
    if (checkIfPrime(num)) {
      primeCount += 1;
    }
  }
  return primeCount === total;
};

export const checkHowManyEven = (total, numbers) => {
  let evenCount = 0;
  for (let num of numbers) {
    if (checkIfEven(num)) {
      evenCount += 1;
    }
  }
  return evenCount === total;
};

export const checkIfAllEven = (
  number1,
  number2,
  number3,
  number4,
  number5,
  number6
) => {
  return (
    checkIfEven(number1) &&
    checkIfEven(number2) &&
    checkIfEven(number3) &&
    checkIfEven(number4) &&
    checkIfEven(number5) &&
    checkIfEven(number6)
  );
};

export const checkHowManyOdd = (total, numbers) => {
  let oddCount = 0;
  for (let num of numbers) {
    if (checkIfOdd(num)) {
      oddCount += 1;
    }
  }
  return oddCount === total;
};

export const checkIfAllOdd = (
  number1,
  number2,
  number3,
  number4,
  number5,
  number6
) => {
  return (
    checkIfOdd(number1) &&
    checkIfOdd(number2) &&
    checkIfOdd(number3) &&
    checkIfOdd(number4) &&
    checkIfOdd(number5) &&
    checkIfOdd(number6)
  );
};

export const checkIfAllNumbersSumToSomeNumber = (
  number1,
  number2,
  number3,
  someNumber
) => {
  return number1 + number2 + number3 === someNumber;
};
