import isSameColor from '../index';

describe('isSameColor', () => {
  it('should work for same model', () => {
    expect(isSameColor('rgb(255,0,0)', { r: 255, g: 0, b: 0 })).toBeTruthy();
    expect(isSameColor('rgb(255,0,0)', { r: 255, g: 0, b: 1 })).toBeFalsy();
  });

  it('should work for different models', () => {
    expect(isSameColor('rgb(255,0,0)', '#ff0000')).toBeTruthy();
    expect(isSameColor('rgb(255,0,0)', '#ff0001')).toBeFalsy();
  });
});
