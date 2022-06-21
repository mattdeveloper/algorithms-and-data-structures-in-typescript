import { findOdds } from '.';

let method: (numbers: number[]) => number[];

describe('Find odds', () => {
  beforeEach(() => {
    method = findOdds;
  });

  it('should be defined', () => {
    expect(method).toBeDefined();
  });

  it('should return only the odds numbers', () => {
    expect(method([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 3, 5, 7, 9]);
  });
});
