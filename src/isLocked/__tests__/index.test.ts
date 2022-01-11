import { createFigma } from 'figma-api-stub';
import isLocked from '../index';

describe('isLocked', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('should work for node itself', () => {
    const node = figma.createFrame();
    node.locked = true;
    expect(isLocked(node)).toBeTruthy();
  });

  it('should check for ancestors', () => {
    const node = figma.createFrame();
    const parent = figma.createFrame();
    const grandParent = figma.createFrame();
    grandParent.appendChild(parent);
    parent.appendChild(node);
    grandParent.locked = true;
    expect(isLocked(grandParent)).toBeTruthy();
  });

  it('should end at page node', () => {
    const node = figma.createFrame();
    const parent = figma.createFrame();
    const grandParent = figma.createPage();
    grandParent.appendChild(parent);
    parent.appendChild(node);
    expect(isLocked(node)).toBeFalsy();
  });
});
