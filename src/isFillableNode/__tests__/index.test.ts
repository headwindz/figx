import { createFigma } from 'figma-api-stub';
import isFillableNode from '../index';

describe('isFrameNode', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
  });
  it('frame node should be fillable', () => {
    expect(isFillableNode(figma.createFrame())).toBeTruthy();
  });

  it('text node should be fillable', () => {
    expect(isFillableNode(figma.createText())).toBeTruthy();
  });

  it('document node should be NOT fillable', () => {
    expect(isFillableNode(figma.root)).toBeFalsy();
  });

  it('page node should be NOT fillable', () => {
    expect(isFillableNode(figma.createPage())).toBeFalsy();
  });

  it('instance node should be NOT fillable', () => {
    const component = figma.createComponent();
    const instance = component.createInstance();
    expect(isFillableNode(instance)).toBeFalsy();
  });
});
