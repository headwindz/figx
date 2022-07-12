import { createFigma } from 'figma-api-stub';
import isInstanceNode from '../index';

describe('isInstanceNode', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for instance node', () => {
    const componentNode = figma.createComponent();
    const instanceNode = componentNode.createInstance();
    expect(isInstanceNode(instanceNode)).toBeTruthy();
  });

  it('should work for non-component node', () => {
    expect(isInstanceNode(figma.createFrame())).toBeFalsy();
  });
});
