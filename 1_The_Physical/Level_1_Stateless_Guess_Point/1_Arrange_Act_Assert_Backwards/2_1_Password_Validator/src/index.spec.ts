import { passwordValidator } from "./index";

describe('password validator', () => {
  it('should know that `test` does not contain 5 characters, has no digit, and no uppercase character', () => {
    const result = passwordValidator('test');

    expect(result.isValid).toBeFalsy();
    ['NoMinimumCharacters', 'NoDigit', 'NoUpperCase',]
      .forEach((errorType) => expect(result.hasError(errorType)).toBeTruthy());
  });

  it('should know that `thePhysical1234567` exceeds the 15 character limit', () => {
    const result = passwordValidator('thePhysical1234567');

    expect(result.isValid).toBeFalsy();
    expect(result.hasError('ExceedsCharacterLimit')).toBeTruthy();
  });

  it('should know that `maxwellTheBe` does not contain a digit', () => {
    const result = passwordValidator('maxwellTheBe');

    expect(result.isValid).toBeFalsy();
    expect(result.hasError('NoDigit')).toBeTruthy();
  });

  it('should know that `maxwell1_c` does not contain an uppercase character', () => {
    const result = passwordValidator('maxwell1_c');

    expect(result.isValid).toBeFalsy();
    expect(result.hasError('NoUpperCase')).toBeTruthy();
  });

  it('should know that `Maxwell1_c1l` is a valid password', () => {
    const result = passwordValidator('Maxwell1_c1l');

    expect(result.isValid).toBeTruthy();
    expect(result.errors.length).toBe(0);
  });

  it('should know that `Johnny1m` is a valid password', () => {
    const result = passwordValidator('Johnny1m');

    expect(result.isValid).toBeTruthy();
    expect(result.errors.length).toBe(0);
  });
});
