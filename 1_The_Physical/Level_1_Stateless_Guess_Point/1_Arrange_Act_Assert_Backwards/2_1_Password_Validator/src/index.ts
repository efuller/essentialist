export function passwordValidator(password: string) {
  if (password.length < 5 ) {
    return {
      isValid: false,
      errors: [ { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }]
    };
  }

  return {
    isValid: false,
    errors: [ { type: 'ExceedsCharacterLimit', message: 'Password cannot exceed 15 characters.' }]
  };
}