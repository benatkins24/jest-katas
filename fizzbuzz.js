export const fizzBuzz = (num1) => {
    if (num1 % 3 === 0 && num1 % 5 === 0) {
    return "fizzbuzz";
  } else if (num1 % 3 === 0) {
    return "fizz";
  } else if (num1 % 5 === 0) {
    return "buzz";
  } else {
    return num1.toString();
  }
};
