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

  if (!startHours || !startMinutes) {
    return {
      errors: ['Invalid start hours or minutes'],
      isValid: false
    }
  }

  if (!endHours || !endMinutes) {
    return {
      errors: ['Invalid end hours or minutes'],
      isValid: false
    }
  }

  if (!validateHours(Number(startHours)) || !validateHours(Number(endHours))) {
    return {
      errors: ['Hours should be between 0 and 23'],
      isValid: false
    }
  }

  if (!validateMinutes(Number(startMinutes)) || !validateMinutes(Number(endMinutes))) {
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