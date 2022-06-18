import reverseString from './index';

describe('Reverse String', () => {
  it('should be defined', () => {
    expect(reverseString).toBeDefined();
  });

  it('should return the reversed string', () => {
    expect(reverseString('practicing javascript')).toBe(
      'tpircsavaj gnicitcarp'
    );
  });

  it('should reverses the reversed string', () => {
    expect(reverseString('cba')).toBe('abc');
  });
});
