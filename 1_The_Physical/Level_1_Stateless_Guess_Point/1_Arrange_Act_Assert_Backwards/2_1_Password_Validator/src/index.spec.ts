import { passwordValidator } from "./index";

describe('password validator', () => {
  it.each([
    [
      'test',
      {
        valid: false,
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
        valid: false,
        errors: [
          { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' },
        ]
      }
    ],
    [
      'maxwellTheBe',
      {
        valid: false,
        errors: [
          { type: 'NoDigit', message: 'Password should contain at least one digit.' },
        ]
      }
    ],
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
