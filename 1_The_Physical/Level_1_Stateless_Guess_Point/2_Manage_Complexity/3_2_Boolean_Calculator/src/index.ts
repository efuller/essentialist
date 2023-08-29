export const booleanCalculator = (text: string) => {
  if (text === "TRUE") {
    return true;
  }

  if (text === "NOT FALSE") {
    return true;
  }
  return false;
}
