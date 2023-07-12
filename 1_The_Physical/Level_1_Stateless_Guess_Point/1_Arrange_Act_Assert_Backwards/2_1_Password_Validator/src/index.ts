export function passwordValidator(password: string) {
  const errors = [];

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

  if (errors.length > 0) {
    return {
      isValid: false,
      errors,
    }
  }

  return {
    isValid: true,
    errors: []
  };
}