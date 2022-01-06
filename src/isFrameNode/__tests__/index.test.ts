import { createFigma } from 'figma-api-stub';
import isFrameNode from '../index';

describe('isFrameNode', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for frame node', () => {
    expect(isFrameNode(figma.createFrame())).toBeTruthy();
  });

  it('should work for non-frame node', () => {
    expect(isFrameNode(figma.createText())).toBeFalsy();
  });
});
