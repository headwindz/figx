import { createFigma } from 'figma-api-stub';
import isWithinInstance from '../index';

describe('isWithinInstance', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });

  it('should end at page node', () => {
    const node = figma.createFrame();
    const parent = figma.createFrame();
    const grandParent = figma.createPage();
    grandParent.appendChild(parent);
    parent.appendChild(node);
    expect(isWithinInstance(node)).toBeFalsy();
  });
});
