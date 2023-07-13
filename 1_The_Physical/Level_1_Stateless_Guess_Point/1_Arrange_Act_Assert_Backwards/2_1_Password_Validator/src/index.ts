export type ResultObject = {
  valid: boolean;
  errors: PasswordValidatorErrors[];
}

type PasswordValidatorErrors = { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }
| { type: 'NoDigit', message: 'Password should contain at least one digit.' }
| { type: 'NoUpperCase', message: 'Password should contain at least one upper case character.' }
| { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' }

export function passwordValidator(password: string): ResultObject {
  const errors: PasswordValidatorErrors[] = [];

  if (password.length < 5 ) {
    errors.push({
      type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.'
    });
  }

  if (password.length > 15 ) {
    errors.push({
      type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.'
    });
  }

  if(!/\d/g.test(password)) {
    errors.push({
      type: 'NoDigit', message: 'Password should contain at least one digit.'
    });
  }

  if(!/[A-Z]/g.test(password)) {
    errors.push({
      type: 'NoUpperCase', message: 'Password should contain at least one upper case character.'
    });
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors,
    }
  }

  return {
    valid: true,
    errors: []
  };
}