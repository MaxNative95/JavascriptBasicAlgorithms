// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

const factorializeNumber = (num : number) => {
  let factorials = [];
  if (num <= 0) return 'Need to be greater than zero';
  for (let i = num; i > 0; i--) {
    factorials.push(i);
  }
  let n = factorials.reverse().reduce((a, b) => a * b);
  return n;
};

factorializeNumber(5);