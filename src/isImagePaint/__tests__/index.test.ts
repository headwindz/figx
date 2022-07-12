import isImagePaint from '../index';

describe('isImagePaint', () => {
  it('should work for undefined', () => {
    expect(isImagePaint(null)).toBeFalsy();
  });
  it('should work for image paint', () => {
    expect(
      isImagePaint({
        imageHash: 'helloworld',
        type: 'IMAGE',
        scaleMode: 'FILL',
        scalingFactor: 0.5,
        opacity: 1,
      }),
    ).toBeTruthy();
  });
});
