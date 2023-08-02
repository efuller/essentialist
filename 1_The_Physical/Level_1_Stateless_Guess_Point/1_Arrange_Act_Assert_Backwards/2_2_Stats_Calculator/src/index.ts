export function statsCalculator(input: number[]) {
  const findMin = () => {
    let min = input[0];
    for(let i = 0; i < input.length; i++) {
      if (input[i] < min) {
        min = input[i];
      }
    }
    return min;
  }

  const getCount = () => {
    return input.length;
  }

  return { count: getCount(), min: findMin() };
}