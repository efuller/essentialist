import { statsCalculator } from "./index";

describe('stats calculator', () => {
  it('knows that given an array of 6 numbers the count should be 6', () => {
    const input = [2,4,21,-8,53,40]
    const results = statsCalculator(input);

    expect(results.average).toBe(18.666666666667);
    expect(results.count).toBe(6);
    expect(results.max).toBe(53);
    expect(results.min).toBe(-8);
  });

  it('knows that given an array of 4 numbers that the count should be 4', () => {
    const input = [4,-3,-7,25];
    const results = statsCalculator(input);
    expect(results.count).toBe(4);
  });
});