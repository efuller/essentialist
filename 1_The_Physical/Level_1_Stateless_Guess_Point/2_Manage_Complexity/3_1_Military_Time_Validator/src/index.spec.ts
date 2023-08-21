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
      { given: "01:12-14-32", expected: false },
    ])('it knows that $given is not a valid input', (param) => {
      const result = validateMilitaryTime(param.given);
      expect(result.isValid).toBe(param.expected);
      expect(result.errors.length).toBe(1);
    });
  });

  describe('validate hours and minutes', () => {
    it.each([
      { given: "25:00-12:23", expected: false },
      { given: "14:60-12:23", expected: false },
      { given: "14:59-25:23", expected: false },
      { given: "14:59-20:60", expected: false },
    ])('it knows that $given is not a valid input', (param) => {
      const result = validateMilitaryTime(param.given);
      expect(result.isValid).toBe(param.expected);
      expect(result.errors.length).toBe(1);
    });
  })
});
