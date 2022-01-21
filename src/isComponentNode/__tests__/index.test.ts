import { createFigma } from 'figma-api-stub';
import isComponentNode from '../index';

describe('isComponentNode', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for component node', () => {
    expect(isComponentNode(figma.createComponent())).toBeTruthy();
  });

  it('should work for non-component node', () => {
    expect(isComponentNode(figma.createFrame())).toBeFalsy();
  });
});
