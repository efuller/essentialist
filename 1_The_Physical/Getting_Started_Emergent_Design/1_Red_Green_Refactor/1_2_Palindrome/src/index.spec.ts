function palindromeChecker(word: string): boolean {
  const wordWithNoSpaces = word.replace(/\s+/g, '');

  if (wordWithNoSpaces.split('').reverse().join('').toLowerCase() !== wordWithNoSpaces.toLowerCase()) {
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

  it('should know that Mom is a palindrome', () => {
    expect(palindromeChecker('Mom')).toBeTruthy();
  });

  it('should know that Was It A Rat I Saw is a palindrome', () => {
    expect(palindromeChecker('Was It A Rat I Saw')).toBeTruthy();
  });

  it('should know that MoM is a palindrome', () => {
    expect(palindromeChecker('MoM')).toBeTruthy();
  });

  it('should know that Momx is not a palindrome', () => {
    expect(palindromeChecker('Momx')).toBeFalsy();
  });

  it('should know that xMomx is a palindrome', () => {
    expect(palindromeChecker('xMomx')).toBeTruthy();
  });

  it('should know that Never Odd or Even returns true', () => {
    expect(palindromeChecker('Never Odd or Even')).toBeTruthy();
  });
})