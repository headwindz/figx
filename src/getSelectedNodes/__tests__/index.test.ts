import { createFigma } from 'figma-api-stub';
import getSelectionNodes from '../index';
import isFrameNode from '../../isFrameNode';

describe('getSelectionNodes', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
    // @ts-ignore
    global.figma = figma;
  });
  it('Should be able to get selected nodes', () => {
    const frame = figma.createFrame();
    figma.currentPage.selection = [frame];
    const nodes = getSelectionNodes();
    expect(nodes[0].id).toEqual(frame.id);
  });

  it('Should be able to get selected nodes with predicate', () => {
    const frame = figma.createFrame();
    const text = figma.createText();
    figma.currentPage.selection = [frame, text];
    const nodes = getSelectionNodes(isFrameNode);
    expect(nodes.length).toEqual(1);
    expect(nodes[0].id).toEqual(frame.id);
  });
});
