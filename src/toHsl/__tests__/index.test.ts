import toHsl from '../index';
import { ColorFormat } from '../../interface';

const hex = '#FF0000';
const rgb = { r: 255, g: 0, b: 0 };

describe('toHsl', () => {
  it('should work for string', () => {
    expect(toHsl(hex, ColorFormat.STRING)).toEqual('hsl(0, 100%, 50%)');
    expect(toHsl(rgb, ColorFormat.STRING)).toEqual('hsl(0, 100%, 50%)');
  });

  it('should work for rgb array', () => {
    expect(toHsl(hex, ColorFormat.ARRAY)).toEqual([0, 100, 50]);
    expect(toHsl(rgb, ColorFormat.ARRAY)).toEqual([0, 100, 50]);
  });

  it('should work for rgb object', () => {
    expect(toHsl(hex, ColorFormat.OBJECT)).toEqual({
      h: 0,
      s: 100,
      l: 50,
    });
    expect(toHsl(rgb, ColorFormat.OBJECT)).toEqual({
      h: 0,
      s: 100,
      l: 50,
    });
  });
});
