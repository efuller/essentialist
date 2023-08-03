import { statsCalculator, StatsResult } from "./index";

describe('stats calculator', () => {
  it.each([
    [[2,4,21,-8,53,40], 'average', 18.666666666667],
    [[2,4,21,-8,53,40], 'count', 6],
    [[2,4,21,-8,53,40], 'max', 53],
    [[2,4,21,-8,53,40], 'min', -8],
    [[4,-3,-7,25], 'average', 4.75],
    [[4,-3,-7,25], 'count', 4],
    [[4,-3,-7,25], 'max', 25],
    [[4,-3,-7,25], 'min', -7],
  ])('given an array of %0, it can calculate the average, max, min, and element count', (given, stat, expected) => {
    const results = statsCalculator(given);
    expect(results[stat as keyof StatsResult]).toBe(expected);
  });
});