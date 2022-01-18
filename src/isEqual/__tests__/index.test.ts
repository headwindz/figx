import isEqual from '../index';
import { IObject } from '../../interface';

const solidPaint: IObject = {
  type: 'SOLID',
  color: {
    r: 1,
    g: 0,
    b: 0,
  },
};

const gradientPaint: IObject = {
  type: 'GRADIENT_LINEAR',
  gradientTransform: [
    [1, 2, 3],
    [2, 3, 4],
  ],
};

describe('isEqual', () => {
  it('should work for primitives', () => {
    expect(isEqual(1, 1)).toBeTruthy();
    expect(isEqual('a', 'b')).toBeFalsy();
  });

  it('should work for objects', () => {
    expect(isEqual({ ...solidPaint }, { ...solidPaint })).toBeTruthy();
    expect(isEqual({ ...solidPaint }, { ...solidPaint, color: { r: 0, g: 0, b: 0 } })).toBeFalsy();
  });

  it('should work for nested arrays', () => {
    expect(isEqual({ ...gradientPaint }, JSON.parse(JSON.stringify(gradientPaint)))).toBeTruthy();
    expect(
      isEqual(
        { ...gradientPaint },
        {
          ...gradientPaint,
          gradientTransform: [
            [1, 2, 3],
            [2, 3, 5],
          ],
        },
      ),
    ).toBeFalsy();
  });
});
