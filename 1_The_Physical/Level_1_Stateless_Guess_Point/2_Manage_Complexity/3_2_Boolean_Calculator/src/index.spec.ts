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

  it('given "NOT FALSE" should return false', () => {
    const result = booleanCalculator("NOT FALSE");

    expect(result).toBe(true);
  });

  it('given "TRUE AND FALSE" should return false', () => {
    const result = booleanCalculator("TRUE AND FALSE");

    expect(result).toBe(false);
  });

  it('given "TRUE AND TRUE" should return false', () => {
    const result = booleanCalculator("TRUE AND TRUE");

    expect(result).toBe(true);
  });

  it('given "TRUE AND FALSE AND TRUE" should return false', () => {
    const result = booleanCalculator("TRUE AND FALSE AND TRUE");

    expect(result).toBe(false);
  });

  it('given "TRUE OR FALSE" should return true', () => {
    const result = booleanCalculator("TRUE OR FALSE");

    expect(result).toBe(true);
  });

  it('given "FALSE OR FALSE" should return true', () => {
    const result = booleanCalculator("FALSE OR FALSE");

    expect(result).toBe(false);
  });

  it('given "TRUE OR TRUE OR TRUE AND FALSE" should return true', () => {
    const result = booleanCalculator("TRUE OR TRUE OR TRUE AND FALSE");

    expect(result).toBe(true);
  });

  it('given "TRUE OR FALSE AND NOT FALSE" should return true', () => {
    const result = booleanCalculator("TRUE OR FALSE AND NOT FALSE");

    expect(result).toBe(true);
  });

  it('given "(TRUE OR TRUE OR TRUE) AND FALSE" should return true', () => {
    const result = booleanCalculator("(TRUE OR TRUE OR TRUE) AND FALSE");

    expect(result).toBe(false);
  });

  it('given "NOT (TRUE AND TRUE)" should return true', () => {
    const result = booleanCalculator("NOT (TRUE AND TRUE)");

    expect(result).toBe(false);
  });
});
