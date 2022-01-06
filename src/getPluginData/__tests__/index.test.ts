import { createFigma } from 'figma-api-stub';
import getPluginData from '../index';

describe('getPluginData', () => {
  let figma: PluginAPI;
  const storageKey = 'data';
  const storageValue = JSON.stringify({ count: 1 });
  beforeAll(() => {
    figma = createFigma({});
  });
  it('Should be able to get plugin data', () => {
    const frame = figma.createFrame();
    frame.setPluginData(storageKey, storageValue);
    expect(getPluginData(storageKey, frame)).toEqual(storageValue);
  });

  it('Removed node should NOT be able to get plugin data', () => {
    const frame = figma.createFrame();
    frame.setPluginData(storageKey, storageValue);
    frame.remove();
    expect(getPluginData(storageKey, frame)).toBeUndefined();
  });
});
