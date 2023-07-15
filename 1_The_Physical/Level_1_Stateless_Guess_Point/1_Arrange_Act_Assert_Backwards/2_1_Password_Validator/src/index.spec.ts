import { passwordValidator } from "./index";

describe('password validator', () => {
  it('should know that `test` does not contain 5 characters, has no digit, and no uppercase character', () => {
    const expected =
      {
        valid: false,
        errors: [
          { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' },
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
          { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }
        ]
      };

    const result = passwordValidator('test');

    expect(result).toEqual(expected);
  });

  it('should know that `thePhysical1234567` exceeds the 15 character limit', () => {
    const expected =
      {
        valid: false,
        errors: [
          { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' },
        ]
      }

    const result = passwordValidator('thePhysical1234567');

    expect(result).toEqual(expected);
  });

  it('should know that `maxwellTheBe` does not contain a digit', () => {
    const expected =
      {
        valid: false,
        errors: [
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
        ]
      }

    const result = passwordValidator('maxwellTheBe');

    expect(result).toEqual(expected);
  });

  it.each([
    [
      'maxwell1_c',
      {
        valid: false,
        errors: [
          { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' },
        ]
      }
    ]
  ])('should know that %s is not a valid password', (password, expected ) => {
    const result = passwordValidator(password);

    expect(result).toEqual(expected);
  });

  it.each([
    [
      'Maxwell1_c1l',
      {
        valid: true,
        errors: []
      }
    ],
    [
      'Johnny1m',
      {
        valid: true,
        errors: []
      }
    ]
  ])('should know that %s is a valid password', (password, expected) => {
    const result = passwordValidator(password);

    expect(result).toEqual(expected);
  });
});
