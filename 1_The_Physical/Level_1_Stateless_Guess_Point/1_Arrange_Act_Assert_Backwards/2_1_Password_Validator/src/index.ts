export type ResultObject = {
  valid: boolean;
  errors: PasswordValidatorErrors[];
}

type PasswordValidatorErrors = { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }
| { type: 'NoDigit', message: 'Password should contain at least one digit.' }
| { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }
| { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' }

export function passwordValidator(password: string): ResultObject {
  const response: ResultObject = {
    valid: false,
    errors: [],
  }

  if (password.length < 5 ) {
    response.errors.push({
      type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.'
    });
  }

  if (password.length > 15 ) {
    response.errors.push({
      type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.'
    });
  }

  if(!/\d/g.test(password)) {
    response.errors.push({
      type: 'NoDigit', message: 'Password should contain at least one digit.'
    });
  }

  if(!/[A-Z]/g.test(password)) {
    response.errors.push({
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