import { createFigma } from 'figma-api-stub';
import isTextNode from '../index';

describe('isTextNode', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for text node', () => {
    expect(isTextNode(figma.createText())).toBeTruthy();
  });

  it('should work for non-text node', () => {
    expect(isTextNode(figma.createFrame())).toBeFalsy();
  });
});
