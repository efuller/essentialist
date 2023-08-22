type ErrorTypes = "Invalid time range format"
  | "Invalid start hours or minutes"
  | "Invalid end hours or minutes"
  | "Hours should be between 0 and 23"
  | "Minutes should be between 0 and 59";

export type Result = {
  errors: ErrorTypes[],
  isValid: boolean;
}

const validateHours = (hour: number) => {
  if (hour < 0 || hour > 23 || Number.isNaN(hour)) {
    return false;
  }
  return true;
}

const validateMinutes = (minutes: number) => {
  if (minutes < 0 || minutes > 59 || Number.isNaN(minutes)) {
    return false;
  }
  return true;
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

  const validHoursAndMinutesFormat = startHours && startMinutes && endHours && endMinutes;

  if (!validHoursAndMinutesFormat) {
    return {
      errors: ['Invalid start hours or minutes'],
      isValid: false
    }
  }

  const validHours = validateHours(Number(startHours)) && validateHours(Number(endHours));
  const validMinutes = validateMinutes(Number(startMinutes)) && validateMinutes(Number(endMinutes));

  if (!validHours) {
    return {
      errors: ['Hours should be between 0 and 23'],
      isValid: false
    }
  }

  if (!validMinutes) {
    return {
      errors: ['Minutes should be between 0 and 59'],
      isValid: false
    }
  }

  return {
    errors: [],
    isValid: true,
  }
}