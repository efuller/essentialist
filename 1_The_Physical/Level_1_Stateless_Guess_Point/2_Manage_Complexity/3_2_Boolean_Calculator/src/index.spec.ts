import { booleanCalculator } from "./index";

describe('boolean calculator', () => {
  it('should know that given "TRUE" should return true', () => {
    const result = booleanCalculator("TRUE");

    expect(result).toBe(true);
  });

  it('should know that given "FALSE", it should return false', () => {
    const result = booleanCalculator("FALSE");

    expect(result).toBe(false);
  });

  it('given "NOT TRUE" should return false', () => {
    const result = booleanCalculator("NOT TRUE");

    expect(result).toBe(false);
  });
});
