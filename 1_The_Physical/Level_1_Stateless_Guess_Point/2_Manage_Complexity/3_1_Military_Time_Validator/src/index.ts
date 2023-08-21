type ErrorTypes = "Invalid time range format";

export type Result = {
  errors: ErrorTypes[],
  isValid: boolean;
}

const validateHours = (hour: number) => {
  if (hour < 0 || hour > 23) {
    return false;
  }
  return true;
}

const validateMinutes = (minutes: number) => {
  if (minutes < 0 || minutes > 59) {
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

  if (!validateHours(Number(startHours))) {
    return {
      errors: ['Invalid time range format'],
      isValid: false
    }
  }

  if (!validateMinutes(Number(startMinutes))) {
    return {
      errors: ['Invalid time range format'],
      isValid: false
    }
  }

  if (!validateHours(Number(endHours))) {
    return {
      errors: ['Invalid time range format'],
      isValid: false
    }
  }

  if (!validateMinutes(Number(endMinutes))) {
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