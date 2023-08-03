import { statsCalculator, StatsResult } from "./index";

describe('stats calculator', () => {
  it.each([
    {given: [2,4,21,-8,53,40], stat: 'average', expected: 18.666666666667},
    {given: [2,4,21,-8,53,40], stat: 'count', expected: 6},
    {given: [2,4,21,-8,53,40], stat: 'max', expected: 53},
    {given: [2,4,21,-8,53,40], stat: 'min', expected: -8},
    {given: [4,-3,-7,25], stat: 'average', expected: 4.75},
    {given: [4,-3,-7,25], stat: 'count', expected: 4},
    {given: [4,-3,-7,25], stat: 'max', expected: 25},
    {given: [4,-3,-7,25], stat: 'min', expected: -7},
  ])('given an array of $given, the $stat value is $expected', ($variable) => {
    const results = statsCalculator($variable.given);
    expect(results[$variable.stat as keyof StatsResult]).toBe($variable.expected);
  });
});