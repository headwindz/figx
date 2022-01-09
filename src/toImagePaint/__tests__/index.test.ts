import toImagePaint from '../index';
import { createFigma } from 'figma-api-stub';

describe('toImagePaint', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
    // @ts-ignore
    global.figma = figma;
  });
  //   // TODO: should add createImage to figma-api-stub
  // it('should work for paint', () => {
  //   const bytes = new Uint8Array([1,2,3]);
  //   const imgPaint = toImagePaint(bytes);
  //   expect(imgPaint).toEqual({
  //     imageHash: 'xxxxx',
  //     type: 'IMAGE',
  //     scaleMode: 'FILL',
  //     scalingFactor: 0.5,
  //     opacity: 1,
  //   })
  // });
  // it('should work for paint with options', () => {
  //   // TODO: should add createImage to figma-api-stub
  //   const bytes = new Uint8Array([1,2,3]);
  //   const imgPaint = toImagePaint(bytes, { scaleMode: 'FIT'});
  //   expect(imgPaint).toEqual({
  //     imageHash: 'xxxxx',
  //     type: 'IMAGE',
  //     scaleMode: 'FIT',
  //     scalingFactor: 0.5,
  //     opacity: 1,
  //   })
  // });
});
