# Problem Description: Stats Calculator

Process a sequence of integer numbers to determine a set of statistics. Calculations should be
completed without using system Math library functions.

## FIND Doings and Knowings - Responsibilities

### Doings
- Process a sequence of numbers

### Knowings
- knows the minimum value
- knows the maximum value
- knows the number of elements in the sequence
- knows the average value
- do not use any Math library functions

### Examples
Given this array `[2,4,21,-8,53,40]` calculate the following stats:
- minimum value = -8
- maximum value = 53
- number of elements in the sequence = 6
- average value = 18.666666666667

Given this array `[4,-3,-7,25]` calculate the following stats:
- minimum value = -7
- maximum value = 25
- number of elements in the sequence = 4
- average value = 4.75

## Initial API Design
Input will just be an array of numbers and using a results object seems to make the most sense as a return type.

Something as simple as:
```typescript
const input = [2,4,21,-8,53,40];

const result = {
  count: 6,
  min: -8,
  max: 53,
  average: 18.666666666667
}

expect(result.count).toBe(6);
expect(result.min).toBe(-8);
expect(result.max).toBe(53);
expect(result.average).toBe(18.666666666667);
```