import { createFigma } from 'figma-api-stub';
import setPluginData from '../index';

describe('setPluginData', () => {
  let figma: PluginAPI;
  const storageKey = 'data';
  const storageValue = JSON.stringify({ count: 1 });
  beforeAll(() => {
    figma = createFigma({});
  });
  it('Should be able to set plugin data', () => {
    const frame = figma.createFrame();
    setPluginData(frame, storageKey, storageValue);
    expect(frame.getPluginData(storageKey)).toEqual(storageValue);
  });
});
