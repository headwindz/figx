import toRgb from '../index';
import { ColorFormat } from '../../interface';

const hex = '#FF0000';
const hsl = 'hsl(0, 100%, 50%)';
const rgba = { r: 255, g: 0, b: 0, alpha: 0.3 };

describe('toRgb', () => {
  it('should work for rgb string', () => {
    expect(toRgb(hex, ColorFormat.STRING)).toEqual('rgb(255, 0, 0)');
    expect(toRgb(rgba, ColorFormat.STRING)).toEqual('rgba(255, 0, 0, 0.3)');
    expect(toRgb(hsl, ColorFormat.STRING)).toEqual('rgb(255, 0, 0)');
  });

  it('should work for rgb array', () => {
    expect(toRgb(hex, ColorFormat.ARRAY)).toEqual([255, 0, 0]);
    expect(toRgb(rgba, ColorFormat.ARRAY)).toEqual([255, 0, 0, 0.3]);
    expect(toRgb(hsl, ColorFormat.ARRAY)).toEqual([255, 0, 0]);
  });

  it('should work for rgb object', () => {
    expect(toRgb(hex, ColorFormat.OBJECT)).toEqual({
      r: 255,
      g: 0,
      b: 0,
    });
    expect(toRgb(rgba, ColorFormat.OBJECT)).toEqual({
      r: 255,
      g: 0,
      b: 0,
      alpha: 0.3,
    });
    expect(toRgb(hsl, ColorFormat.OBJECT)).toEqual({
      r: 255,
      g: 0,
      b: 0,
    });
  });
});
