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
});
