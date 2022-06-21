/**
 * The function must return all odd numbers in the array.
 *
 * @param [numbers]
 * @returns [numbers]
 */
export function findOdds(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 !== 0);
}

export function findOddsWithFor(numbers: number[]): number[] {
  const odds: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}

export function findOddsWithForEach(numbers: number[]): number[] {
  const odds: number[] = [];
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  });
  return odds;
}
