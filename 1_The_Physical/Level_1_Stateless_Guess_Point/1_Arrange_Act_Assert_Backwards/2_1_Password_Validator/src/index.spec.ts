import { passwordValidator, ResultObject } from "./index";

describe('password validator', () => {

  it('should know that `test` does not contain at least 5 characters', () => {
    const result = passwordValidator('test');

    expect(result).toEqual<ResultObject>({
      isValid: false,
      errors: [
        { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' },
        { type: 'NoDigit', message: 'Password should contain at least one digit.' },
        { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }
      ]
    });
  });

  it('should know that `thePhysical1234567` is not valid because it contains more than 15 characters', () => {
    const result = passwordValidator('thePhysical1234567');

    expect(result).toEqual<ResultObject>({
      isValid: false,
      errors: [ { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' }]
    });
  });

  it('should know that `maxwellTheBe` is not valid because it does not contain a digit', () => {
    const result = passwordValidator('maxwellTheBe');

    expect(result).toEqual<ResultObject>({
      isValid: false,
      errors: [ { type: 'NoDigit', message: 'Password should contain at least one digit.' }]
    });
  });

  it('should know that `Maxwell1_c1` is valid', () => {
    const result = passwordValidator('Maxwell1_c1');

    expect(result).toEqual<ResultObject>({
      isValid: true,
      errors: []
    });
  });

  it('should know that `maxwell1_c` is not valid because it contains no uppercase letters', () => {
    const result = passwordValidator('maxwell1_c');

    expect(result).toEqual<ResultObject>({
      isValid: false,
      errors: [ { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }]
    });
  });
})
