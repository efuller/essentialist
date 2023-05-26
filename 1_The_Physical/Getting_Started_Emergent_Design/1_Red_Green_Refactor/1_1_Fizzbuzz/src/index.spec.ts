function fizzBuzzChecker(num: number) {
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

describe("fizzbuzz", () => {
    const errorMessage = 'Numbers between 1 and 100 only.';

    it('should know that fizzBuzzChecker exists', () => {
        expect(fizzBuzzChecker).toBeDefined();
    });

    it('should return a string', () => {
        const result = fizzBuzzChecker(25);

        expect(typeof result).toBe('string');
    });

    it('should throw an error when given 102', () => {
        expect(() => fizzBuzzChecker(102)).toThrowError(errorMessage);
    });

    it('should throw and error when -12 is passed in as an argument', () => {
        expect(() => fizzBuzzChecker(-12)).toThrowError(errorMessage);
    });

    it('should throw an error when given 0', () => {
        expect(() => fizzBuzzChecker(0)).toThrowError(errorMessage);
    });

    it('should throw an error when given 101', () => {
        expect(() => fizzBuzzChecker(101)).toThrowError(errorMessage);
    });

    it('should return Fizz when given 3', () => {
        expect(fizzBuzzChecker(3)).toBe('Fizz');
    });

    it('should return Fizz when given 9', () => {
        expect(fizzBuzzChecker(9)).toBe('Fizz');
    });

    it('should return Buzz when given 5', () => {
        expect(fizzBuzzChecker(5)).toBe('Buzz');
    });

    it('should return Buzz when given 10', () => {
        expect(fizzBuzzChecker(10)).toBe('Buzz');
    });

    it('should return FizzBuzz when given 15', () => {
        expect(fizzBuzzChecker(15)).toBe('FizzBuzz');
    });

    it('should return FizzBuzz when given 45', () => {
        expect(fizzBuzzChecker(45)).toBe('FizzBuzz');
    });

    it.each([
        [43, '43'],
        [26, '26'],
        [13, '13']
    ])('should return "%s" when given %s', (param, expected) => {
        expect(fizzBuzzChecker(param)).toBe(expected);
    })
});
