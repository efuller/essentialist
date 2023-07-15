import { PasswordValidator } from "jest-cucumber/dist/examples/typescript/src/password-validator";

export type ResultObject = {
  errors: PasswordValidatorErrors[];
  setError: (error: PasswordValidatorErrors) => void
  valid: boolean;
}

type PasswordErrorTypes = 'NoMinimumCharacters'
| 'NoDigit'
| 'NoUpperCase'
| 'ExceedsCharacterLimit'

type PasswordValidatorErrors = { type: PasswordErrorTypes, message: string }

export function passwordValidator(password: string): ResultObject {
  const response: ResultObject = {
    errors: [],
    setError(error: PasswordValidatorErrors) {
      this.errors.push(error);
    },
    valid: false,
  }

  if (password.length < 5 ) {
    response.setError({
      type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.'
    });
  }

  if (password.length > 15 ) {
    response.setError({
      type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.'
    });
  }

  if(!/\d/g.test(password)) {
    response.setError({
      type: 'NoDigit', message: 'Password should contain at least one digit.'
    });
  }

  if(!/[A-Z]/g.test(password)) {
    response.setError({
      type: 'NoUpperCase', message: 'Password should contain at least one upper case character.'
    });
  }

  if (response.errors.length > 0) {
    return response;
  }

  return {
    ...response,
    valid: true,
  };
}