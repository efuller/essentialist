# Problem Description: Military Time Validator
Write a function (or a stateless class) capable of validating whether a string time range is a valid military time range or not.

## Doings
- validate if a string time range is a valid range in military time

## Knowings
- it knows that the given input format is "01:12-14:32"
- it knows that a valid hour is between 00 and 23
- it knows that a valid minute is between 00 and 59
- it knows that 24:00 is also the same as 00:00 (both are valid and this is a nice to have)

## Examples
- [x] "01:12-14:32" (yes)
- [x] "01:12 - 14:32" (yes)
- [x] "01:12--14:32" (no)
- [x] "01-12-14:32" (no)
- [x] "01:12-14-32" (no)
- [x] "25:00-12:23" (no)
- [x] "14:60-12:23" (no)
- [x] "14:59-25:23" (no)
- [x] "14:59-20:60" (no)
- [x] "asdf:59-20:34" (no)
- [x] "14:asdf-20:34" (no)
- [x] "14:59-asdf:34" (no)
- [x] "14:59-20:asdf" (no)
- [x] "22:00 - 23:12" (yes)
- [x] "01:12 - 26:13" (no)
- [x] "01:45 - 23:59" (yes)
- [x] "26:45 - 27:32" (no)
- [x] "-11:34 - 12:23" (no)

## Initial API Design
- Like some others, I am going to avoid using Regex
- TPP is new to me, but I will do my best to follow it
- I will allow for inputs with and without spaces _see examples above_

## Sequence
- validate input
- validate hours and minutes for both start time and end time
- validate time range

```typescript
result = {
  errors: [],
  isValid: true,
}

expect(result.errors.length).toBe(0);
expect(result.isValid).toBe(true);
```
## Final Thoughts
It took me three takes to actually get here. There was certainly an uptick in complexity, but
a lot of that was due to me over thinking and over complicating things particularly around my return object. I will
also say that I didn't formally follow the TPP, but I did attempt to make ths smallest changes possible.
