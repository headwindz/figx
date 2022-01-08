import solidPaintToWebRgb from '../index';
import { ColorFormat } from '../../interface';

describe('solidPaintToWebRgb', () => {
  const paint: SolidPaint = {
    type: 'SOLID',
    color: {
      r: 0.5285416841506958,
      g: 0.5314041376113892,
      b: 0.737500011920929,
    },
    opacity: 1,
  };
  it('should work for rgb string', () => {
    expect(solidPaintToWebRgb(paint, ColorFormat.STRING)).toEqual('rgb(135, 136, 188)');
  });

  it('should work for rgb array', () => {
    expect(solidPaintToWebRgb(paint, ColorFormat.ARRAY)).toEqual([135, 136, 188]);
  });

  it('should work for rgb object', () => {
    expect(solidPaintToWebRgb(paint, ColorFormat.OBJECT)).toEqual({
      r: 135,
      g: 136,
      b: 188,
    });
  });
});
