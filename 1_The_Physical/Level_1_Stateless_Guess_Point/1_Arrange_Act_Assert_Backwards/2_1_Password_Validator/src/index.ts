export function passwordValidator(password: string) {
  return {
    isValid: false,
    errors: [ { type: 'NoMinimumCharacters', message: 'Password must contain at least 5 characters.' }]
  };
}