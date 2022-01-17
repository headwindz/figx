import isSamePaint from '../index';

const solidPaint: SolidPaint = {
  type: 'SOLID',
  opacity: 1,
  visible: true,
  blendMode: 'DARKEN',
  color: {
    r: 1,
    g: 0,
    b: 0,
  },
};

const gradientPaint: GradientPaint = {
  type: 'GRADIENT_LINEAR',
  opacity: 1,
  visible: true,
  blendMode: 'DARKEN',
  gradientTransform: [
    [1, 2, 3],
    [2, 3, 4],
  ],
  gradientStops: [
    {
      position: 1,
      color: {
        r: 1,
        g: 0,
        b: 0,
        a: 1,
      },
    },
  ],
};

describe('isSamePaint', () => {
  it('should work for solid paint', () => {
    expect(isSamePaint({ ...solidPaint }, { ...solidPaint })).toBeTruthy();
    expect(
      isSamePaint({ ...solidPaint }, { ...solidPaint, color: { r: 0, g: 0, b: 0 } }),
    ).toBeFalsy();
  });

  it('should work for gradient paint', () => {
    expect(
      isSamePaint({ ...gradientPaint }, JSON.parse(JSON.stringify(gradientPaint))),
    ).toBeTruthy();
    expect(
      isSamePaint(
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
