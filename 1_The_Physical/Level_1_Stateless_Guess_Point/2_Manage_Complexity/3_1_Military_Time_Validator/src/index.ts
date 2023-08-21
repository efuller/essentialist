type ErrorTypes = "Invalid time range format";

export type Result = {
  errors: ErrorTypes[],
  isValid: boolean;
}

export const validateMilitaryTime = (time: string): Result => {
  return {
    errors: [],
    isValid: true,
  }
}