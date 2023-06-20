import { palindromeChecker } from "./index";

describe('palindrome checker', () => {
  it('should know that palindromeChecker exists', () => {
    expect(palindromeChecker).toBeDefined();
  });

  it.each([
    'mom',
    'Mom',
    'Was It A Rat I Saw',
    'MoM',
    'xMomx',
    'Never Odd or Even',
    '1Never Odd or Even1'
  ])('when given %s should return true', (param: string) => {
    expect(palindromeChecker(param)).toBeTruthy();
  });

  it('should know that john is not a palindrome', () => {
    expect(palindromeChecker('john')).toBeFalsy();
  });

  it('should know that jeff is not a palindrome', () => {
    expect(palindromeChecker('jeff')).toBeFalsy();
  });

  it('should know that lucy is not a palindrome', () => {
    expect(palindromeChecker('lucy')).toBeFalsy();
  });

  it('should know that Momx is not a palindrome', () => {
    expect(palindromeChecker('Momx')).toBeFalsy();
  });

  it('should know that Never Odd or Even1 is not a palindrome', () => {
    expect(palindromeChecker('Never Odd or Even1')).toBeFalsy();
  });
});