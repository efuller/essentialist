type ErrorTypes = "Invalid time range format";

export type Result = {
  errors: ErrorTypes[],
  isValid: boolean;
}

export const validateMilitaryTime = (time: string): Result => {
  const [startTime, endTime] = time.split('-');

  if (!startTime || !endTime) {
    return {
      errors: ['Invalid time range format'],
      isValid: false
    }
  }

  const [startHours, startMinutes] = startTime.split(':');
  const [endHours, endMinutes] = endTime.split(':');

  if (!startHours || !startMinutes) {
    return {
      errors: ['Invalid time range format'],
      isValid: false
    }
  }

  if (!endHours || !endMinutes) {
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