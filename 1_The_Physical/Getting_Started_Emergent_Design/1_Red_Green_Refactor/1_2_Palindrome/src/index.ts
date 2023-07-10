export function palindromeChecker(word: string): boolean {
  const wordWithNoSpacesAndLowerCase = word.replace(/\s+/g, '').toLowerCase();

  return wordWithNoSpacesAndLowerCase
    .split('')
    .reverse()
    .join('') === wordWithNoSpacesAndLowerCase
}

