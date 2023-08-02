export function statsCalculator(input: number[]) {
  const getCount = () => {
    return input.length;
  }

  return { count: getCount() };
}