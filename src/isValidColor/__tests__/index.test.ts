import isValidColor from '../index';

describe('isValidColor', () => {
  it('should work for rgb', () => {
    expect(isValidColor('rgb(a,0,0)')).toBeFalsy();
    expect(isValidColor('rgb(1,0)')).toBeFalsy();
    expect(isValidColor('rgb(2,0,0)')).toBeTruthy();
    // rgb should round to max - 255
    expect(isValidColor('rgb(266,0,0)')).toBeTruthy();
  });

  it('should work for hex', () => {
    expect(isValidColor('#ab')).toBeFalsy();
    expect(isValidColor('#aabbcw')).toBeFalsy();
    expect(isValidColor('#abc')).toBeTruthy();
    expect(isValidColor('#aabbcc')).toBeTruthy();
  });
});
