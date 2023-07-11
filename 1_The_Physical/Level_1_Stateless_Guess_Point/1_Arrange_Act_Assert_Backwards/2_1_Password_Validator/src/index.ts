export function passwordValidator(password: string) {
  if (password.length < 5 ) {
    return {
      isValid: false,
      errors: [ { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }]
    };
  }

  if(!/\d/g.test(password)) {
    return {
      isValid: false,
      errors: [ { type: 'NoDigit', message: 'Password should contain at least one digit.' }]
    };
  }

  return {
    isValid: false,
    errors: [ { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' }]
  };
}