import { statsCalculator } from "./index";

describe('stats calculator', () => {
  it('given an array of [2,4,21,-8,53,40], it can calculate the average, max, min, and element count', () => {
    const input = [2,4,21,-8,53,40];
    const results = statsCalculator(input);

    expect(results.average).toBe(18.666666666667);
    expect(results.count).toBe(6);
    expect(results.max).toBe(53);
    expect(results.min).toBe(-8);
  });

  it('given an array of [4,-3,-7,25], it can calculate the average, max, min, and element count', () => {
    const input = [4,-3,-7,25];
    const results = statsCalculator(input);

    expect(results.average).toBe(4.75)
    expect(results.count).toBe(4);
    expect(results.max).toBe(25);
    expect(results.min).toBe(-7);
  });
});