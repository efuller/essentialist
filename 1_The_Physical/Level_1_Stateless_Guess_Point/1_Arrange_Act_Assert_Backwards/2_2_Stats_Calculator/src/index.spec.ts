import { statsCalculator } from "./index";

describe('stats calculator', () => {
  it('knows that given an array of 6 numbers the count should be 6', () => {
    const input = [2,4,21,-8,53,40]

    const results = statsCalculator(input);

    expect(results.count).toBe(6);
  });
});