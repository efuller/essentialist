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

  it.each([
    'john',
    'jeff',
    'lucy',
    'Momx',
    'Never Odd or Even1',
  ])('when given %s should return false', (param: string) => {
    expect(palindromeChecker(param)).toBeFalsy();
  });
});