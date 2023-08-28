import { booleanCalculator } from "./index";

describe('boolean calculator', () => {
  it('should know that given "TRUE" should return true', () => {
    const result = booleanCalculator("TRUE");

    expect(result).toBe(true);
  });
});
