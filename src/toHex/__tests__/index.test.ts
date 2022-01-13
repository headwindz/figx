import toHex from '../index';

describe('toHex', () => {
  it('should work for rgb object', () => {
    expect(toHex({ r: 255, g: 0, b: 0 })).toEqual('#FF0000');
  });
  it('should work for rgb string', () => {
    expect(toHex('rgb(255, 0, 0)')).toEqual('#FF0000');
  });
  it('should work for hsl', () => {
    expect(toHex('hsl(0, 100%, 50%)')).toEqual('#FF0000');
  });
});
