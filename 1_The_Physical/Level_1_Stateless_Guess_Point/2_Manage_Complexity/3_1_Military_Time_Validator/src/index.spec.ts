import { validateMilitaryTime } from "./index";

describe('military time validator', () => {
  describe('validate input is properly formatted', () => {
    it.each([
      { given: "01:12-14:32", expected: true },
      { given: "01:12 - 14:32", expected: true },
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
      { given: "asdf:59-20:34", expected: false },
      { given: "14:asdf-20:34", expected: false },
      { given: "14:59-asdf:34", expected: false },
      { given: "14:59-20:asdf", expected: false },
    ])('it knows that $given is not a valid input', (param) => {
      const result = validateMilitaryTime(param.given);
      expect(result.isValid).toBe(param.expected);
      expect(result.errors.length).toBe(1);
    });
  });

  describe('validate military time', () => {
    it.each([
      { given: "22:00 - 23:12", expected: true, errorLength: 0 },
      { given: "01:12 - 26:13", expected: false, errorLength: 1 },
      { given: "01:45 - 23:59", expected: true, errorLength: 0 },
      { given: "26:45 - 27:32", expected: false, errorLength: 1 },
      { given: "-11:34 - 12:23", expected: false, errorLength: 1 },
    ])('it knows that $given is not a valid input', (param) => {
      const result = validateMilitaryTime(param.given);
      expect(result.isValid).toBe(param.expected);
      expect(result.errors.length).toBe(param.errorLength);
    });
  });
});
