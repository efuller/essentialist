export function fizzBuzzChecker(num: number) {
  if (num > 100 || num < 1) {
    throw new Error('Numbers between 1 and 100 only.');
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  return String(num);
};
