function palindromeChecker(word: string): boolean {
  if (word.split('').reverse().join('') !== word) {
    return false;
  }
  return true;
}

describe('palindrome checker', () => {
  it('should know that palindromeChecker exists', () => {
    expect(palindromeChecker).toBeDefined();
  });

  it('should know that mom is a palindrome', () => {
    expect(palindromeChecker('mom')).toBeTruthy();
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
})