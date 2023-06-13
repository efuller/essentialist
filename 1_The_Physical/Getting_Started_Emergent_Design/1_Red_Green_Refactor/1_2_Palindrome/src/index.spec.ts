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
})