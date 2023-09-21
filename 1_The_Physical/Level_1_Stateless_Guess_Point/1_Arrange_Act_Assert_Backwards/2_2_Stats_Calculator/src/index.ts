export type StatsResult = {
 average: number,
 count: number,
 max: number,
 min: number,
}

export function statsCalculator(input: number[]): StatsResult {
  const findAverage = () => {
    const average = input.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / input.length;

    return Number(average.toFixed(12));
  }

  const findMax = () => {
    let max = input[0];
    for (let i = 0; i < input.length; i++) {
      if (input[i] > max) {
        max = input[i];
      }
    }
    return max;
  }
  const findMin = () => {
    let min = input[0];
    for (let i = 0; i < input.length; i++) {
      if (input[i] < min) {
        min = input[i];
      }
    }
    return min;
  }

  const getCount = () => {
    return input.length;
  }

  return {
    average: findAverage(),
    count: getCount(),
    max: findMax(),
    min: findMin()
  };
}