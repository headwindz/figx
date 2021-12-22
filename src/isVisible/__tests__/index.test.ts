import { createFigma } from 'figma-api-stub';
import isVisible from '../index';

describe('isVisible', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for node itself', () => {
    const node = figma.createFrame();
    expect(isVisible(node)).toBeTruthy();
    node.visible = false;
    expect(isVisible(node)).toBeFalsy();
  });

  it('should check for ancestors', () => {
    const node = figma.createFrame();
    const parent = figma.createFrame();
    const grandParent = figma.createFrame();
    grandParent.appendChild(parent);
    parent.appendChild(node);
    grandParent.visible = false;
    expect(isVisible(grandParent)).toBeFalsy();
  });

  it('should end at page node', () => {
    const node = figma.createFrame();
    const parent = figma.createFrame();
    const grandParent = figma.createPage();
    grandParent.appendChild(parent);
    parent.appendChild(node);
    expect(isVisible(node)).toBeTruthy();
  });
});
