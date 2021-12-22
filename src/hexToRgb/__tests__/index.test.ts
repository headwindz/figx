import hexToRgb from '../index';
import { ColorFormat } from '../../interface';

const hex = '#008080';

describe('hexToRgb', () => {
  it('should work for rgb string', () => {
    expect(hexToRgb(hex, ColorFormat.STRING)).toEqual('rgb(0, 128, 128)');
  });

  it('should work for rgb array', () => {
    expect(hexToRgb(hex, ColorFormat.ARRAY)).toEqual([0, 128, 128]);
  });

  it('should work for rgb object', () => {
    expect(hexToRgb(hex, ColorFormat.Object)).toEqual({
      r: 0,
      g: 128,
      b: 128,
    });
  });
});
