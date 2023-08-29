export const booleanCalculator = (text: string) => {
  if (text === "TRUE") {
    return true;
  }

  if (text === "NOT FALSE") {
    return true;
  }

  if (text.includes(' AND ')) {
    let result = true;
    const value = text.split(' AND ');
    value.forEach((v) => {
      result = v === 'TRUE';
    })
    return result;
  }
  return false;
}
