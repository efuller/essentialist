type ErrorTypes = "Invalid time range format";

export type Result = {
  errors: ErrorTypes[],
  isValid: boolean;
}

export const validateMilitaryTime = (time: string): Result => {
  const [startTime, endtime] = time.split('-');

  if (!startTime || !endtime) {
    return {
      errors: ['Invalid time range format'],
      isValid: false
    }
  }

  return {
    errors: [],
    isValid: true,
  }
}