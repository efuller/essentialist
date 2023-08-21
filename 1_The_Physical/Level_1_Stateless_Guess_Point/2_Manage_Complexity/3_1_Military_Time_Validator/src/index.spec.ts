import { validateMilitaryTime } from "./index";

describe('military time validator', () => {
  describe('validate input is properly formatted', () => {
    it.each([
      { given: "01:12-14:32", expected: true },
    ])('it knows that $given is a valid input', (param) => {
      const result = validateMilitaryTime(param.given);
      expect(result.isValid).toBe(param.expected);
    });
  });

  describe('invalidate input that is not properly formatted', () => {
    it.each([
      { given: "01:12--14:32", expected: false },
      { given: "01-12-14:32", expected: false },
    ])('it knows that $given is not a valid input', (param) => {
      const result = validateMilitaryTime(param.given);
      expect(result.isValid).toBe(param.expected);
      expect(result.errors.length).toBe(1);
    });
  });
});
