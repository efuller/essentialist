function palindromeChecker(word: string): boolean {
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
})