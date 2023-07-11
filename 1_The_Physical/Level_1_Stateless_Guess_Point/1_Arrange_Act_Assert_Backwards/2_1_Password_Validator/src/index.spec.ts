import { passwordValidator } from "./index";

describe('password validator', () => {

  it('should know that `test` does not contain at least 5 characters', () => {
    const result = passwordValidator('test');

    expect(result).toMatchObject({
      isValid: false,
      errors: [ { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }]
    })
  })
})


