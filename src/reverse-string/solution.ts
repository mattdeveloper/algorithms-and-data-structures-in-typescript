/**
 * It has to take a string and return a string with the characters in reverse order.
 *
 * @param string
 * @returns string
 */
export function reverseString(string: string): string {
  return string.split('').reverse().join('');
}

export function reverseWithoutArrayReverse(string: string): string {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
