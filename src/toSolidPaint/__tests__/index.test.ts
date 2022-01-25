import toSolidPaint from '../index';

const hex = '#008080';
const rgb = 'rgb(0, 128, 128, 0.1)';

describe('toSolidPaint', () => {
  it('should work for hex string', () => {
    expect(toSolidPaint(hex)).toEqual({
      type: 'SOLID',
      color: {
        r: 0,
        g: 128 / 255,
        b: 128 / 255,
      },
      opacity: 1,
    });
  });

  it('should work for rgb string', () => {
    expect(toSolidPaint(rgb)).toEqual({
      type: 'SOLID',
      color: {
        r: 0,
        g: 128 / 255,
        b: 128 / 255,
      },
      opacity: 0.1,
    });
  });

  it('should work for opacity', () => {
    expect(toSolidPaint(rgb, 0.2)).toEqual({
      type: 'SOLID',
      color: {
        r: 0,
        g: 128 / 255,
        b: 128 / 255,
      },
      opacity: 0.2,
    });
  });
});
