import { passwordValidator, ResultObject } from "./index";

describe('password validator', () => {
  it.each([
    [
      'test',
      {
        isValid: false,
        errors: [
          { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' },
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
          { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }
        ]
      }
    ],
    [
      'thePhysical1234567',
      {
        isValid: false,
        errors: [
          { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' },
        ]
      }
    ],
    [
      'maxwellTheBe',
      {
        isValid: false,
        errors: [
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
        ]
      }
    ],
    [
      'maxwell1_c',
      {
        isValid: false,
        errors: [
          { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' },
        ]
      }
    ]
  ])('should know that %s is not a valid password with a result object of: %o', (password, expected ) => {
    const result = passwordValidator(password);

    expect(result).toEqual(expected);
  });

  it('should know that `Maxwell1_c1` is valid', () => {
    const result = passwordValidator('Maxwell1_c1');

    expect(result).toEqual<ResultObject>({
      isValid: true,
      errors: []
    });
  });
});
