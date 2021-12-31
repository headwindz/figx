import toRgb from '../index';
import { ColorFormat } from '../../interface';

const hex = '#FF0000';
const hsl = 'hsl(0, 100%, 50%)';

describe('toRgb', () => {
  it('should work for rgb string', () => {
    expect(toRgb(hex, ColorFormat.STRING)).toEqual('rgb(255, 0, 0)');
    expect(toRgb(hsl, ColorFormat.STRING)).toEqual('rgb(255, 0, 0)');
  });

  it('should work for rgb array', () => {
    expect(toRgb(hex, ColorFormat.ARRAY)).toEqual([255, 0, 0]);
    expect(toRgb(hsl, ColorFormat.ARRAY)).toEqual([255, 0, 0]);
  });

  it('should work for rgb object', () => {
    expect(toRgb(hex, ColorFormat.Object)).toEqual({
      r: 255,
      g: 0,
      b: 0,
    });
    expect(toRgb(hsl, ColorFormat.Object)).toEqual({
      r: 255,
      g: 0,
      b: 0,
    });
  });
});
