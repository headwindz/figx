import { createFigma } from 'figma-api-stub';
import isPageNode from '../index';

describe('isPageNode', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for page node', () => {
    expect(isPageNode(figma.createPage())).toBeTruthy();
  });

  it('should work for non-page node', () => {
    expect(isPageNode(figma.createFrame())).toBeFalsy();
  });
});
