import isGradientPaint from '../index';

describe('GradientPaint', () => {
  it('should work for undefined', () => {
    expect(isGradientPaint(null)).toBeFalsy();
  });
  it('should work for gradient paint', () => {
    expect(
      isGradientPaint({
        type: 'GRADIENT_LINEAR',
        gradientTransform: [
          [0, 0, 0],
          [1, 1, 1],
        ],
        gradientStops: [],
      }),
    ).toBeTruthy();
  });
});
