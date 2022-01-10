import toImagePaint from '../index';
import { createFigma } from 'figma-api-stub';

const hash = 'xxxxx';
describe('toImagePaint', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
    // @ts-ignore
    global.figma = figma;
    figma.createImage = function (bytes) {
      const _hash = hash;
      return {
        hash: _hash,
        getBytesAsync: function () {
          return Promise.resolve(bytes);
        },
      };
    };
  });
  it('should work for paint', () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const imgPaint = toImagePaint(bytes);
    expect(imgPaint).toEqual({
      imageHash: hash,
      type: 'IMAGE',
      scaleMode: 'FILL',
      scalingFactor: 0.5,
      opacity: 1,
    });
  });
  it('should work for paint with options', () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const imgPaint = toImagePaint(bytes, { scaleMode: 'FIT' });
    expect(imgPaint).toEqual({
      imageHash: hash,
      type: 'IMAGE',
      scaleMode: 'FIT',
      scalingFactor: 0.5,
      opacity: 1,
    });
  });
});
