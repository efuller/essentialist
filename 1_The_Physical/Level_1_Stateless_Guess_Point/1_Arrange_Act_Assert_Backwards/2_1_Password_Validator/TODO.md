# Problem Description: Password validator

Write a function (or a class) for validating passwords. Passwords must meet the following criteria:

- Between 5 and 15 characters long 
- Contains at least one digit 
- Contains at least one upper case letter 
- Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

## Doings
- Validate password
- Returns a result object

## Knowings
- Password between 5 and 15 characters is valid
- Password less than 5 characters is not valid
- Password greater than 15 characters is not valid
- Password that contains at least one digit is valid
- Password that does not have at least one digit is not valid
- Password that contains at least one upper case letter is valid
- Password that does not contain at least one upper case letter is not valid

## Examples
- [x] `maxwell1_c` returns a falsey response because of a lack of uppercase characters
- [x] `maxwellTheBe` returns a falsey response because of a lack of digits
- [x] `thePhysical1234567` returns a falsey response because of exceeding the 15 character length
- [x] `test` - returns falsy because of not meeting the required number of characters
- [x] `Maxwell1_c1` returns truthy as all requirements are met
- [x] `Johnny1m` returns truthy as all requirements are met

## Initial API Design
```typescript
const resultObject = passwordValidator('test');

resultObject = {
  isValid: false,
  errors: [
    { type: 'PasswordLength', message: 'The password is not at least 5 characters long' },
    { type: 'NoDigit', message: 'Must contain at least one digit' },
    { type: 'NoUpperCase', message: 'Must contain at least one upper case letter' }
  ]
}
```
---

## Revisiting API Design
While the current implementation is in a working state I've come to a few conclusions
- As a developer, I am not happy the API provided by the `resultObject`. I would not enjoy using it. For example, it would be great to have some helper functions for getting/setting, and checking for errors.
- The tests I have written are too _noisy_ and also brittle -- meaning could break easily, and too specific

## Potential New API Design
```typescript
const resultObject = passwordValidator('test');

resultObject.hasErrors() // true/false
resultObject.getErrors() // returns array of errors
resultObject.isValid() // true/false
resultObject.setError(error) // pushed new error on to errors array
resultObject.hasErrorType(type) // check to see if there is an error of a specific type
```
This API might change as I work through the changes, but if I'm thinking about who this will be used by (developer), then
I think this API would be a bit more pleasant to work with and write tests for or with.

My approach will be to use a straight object literal, but this is a step towards eventually building
out my own `Result` class.