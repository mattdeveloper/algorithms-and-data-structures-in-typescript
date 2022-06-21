import { reverseString } from '.';

// import {
//   reverseString as solutionReverseString,
//   reverseWithoutArrayReverse as solutionReverseWithoutArrayReverse,
// } from './solution';

let method: (string: string) => string;

describe('Reverse String', () => {
  beforeEach(() => {
    method = reverseString;
  });

  it('should be defined', () => {
    expect(method).toBeDefined();
  });

  it('should return the reversed string', () => {
    expect(method('practicing javascript')).toBe('tpircsavaj gnicitcarp');
  });

  it('should reverses the reversed string', () => {
    expect(method('cba')).toBe('abc');
  });
});
