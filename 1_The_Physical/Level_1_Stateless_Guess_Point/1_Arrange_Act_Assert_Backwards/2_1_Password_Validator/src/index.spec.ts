import { passwordValidator } from "./index";

describe('password validator', () => {
  it('should know that `test` does not contain 5 characters, has no digit, and no uppercase character', () => {
    const expected =
      {
        isValid: false,
        errors: [
          { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' },
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
          { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }
        ]
      };

    const result = passwordValidator('test');

    expect(result.isValid).toBeFalsy();
    expect(result).toMatchObject(expected);
  });

  it('should know that `thePhysical1234567` exceeds the 15 character limit', () => {
    const expected =
      {
        isValid: false,
        errors: [
          { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' },
        ]
      }

    const result = passwordValidator('thePhysical1234567');

    expect(result.isValid).toBeFalsy();
    expect(result).toMatchObject(expected);
  });

  it('should know that `maxwellTheBe` does not contain a digit', () => {
    const expected =
      {
        isValid: false,
        errors: [
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
        ]
      }

    const result = passwordValidator('maxwellTheBe');

    expect(result.isValid).toBeFalsy();
    expect(result).toMatchObject(expected);
  });

  it('should know that `maxwell1_c` does not contain an uppercase character', () => {
    const expected =
      {
        isValid: false,
        errors: [
          { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' },
        ]
      }

    const result = passwordValidator('maxwell1_c');

    expect(result.isValid).toBeFalsy();
    expect(result).toMatchObject(expected);
  });

  it('should know that `Maxwell1_c1l` is a valid password', () => {
    const expected =
      {
        isValid: true,
        errors: []
      }

    const result = passwordValidator('Maxwell1_c1l');

    expect(result.isValid).toBeTruthy();
    expect(result).toMatchObject(expected);
  });

  it('should know that `Johnny1m` is a valid password', () => {
    const expected =
      {
        isValid: true,
        errors: []
      }

    const result = passwordValidator('Johnny1m');

    expect(result.isValid).toBeTruthy();
    expect(result).toMatchObject(expected);
  });
});
