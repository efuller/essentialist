import { passwordValidator } from "./index";

describe('password validator', () => {

  it('should know that `test` does not contain at least 5 characters', () => {
    const result = passwordValidator('test');

    expect(result).toMatchObject({
      isValid: false,
      errors: [ { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }]
    });
  });

  it('should know that `thePhysical1234567` is not valid because it contains more than 15 characters', () => {
    const result = passwordValidator('thePhysical1234567');

    expect(result).toMatchObject({
      isValid: false,
      errors: [ { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' }]
    });
  });
})


