import { createFigma } from 'figma-api-stub';
import getComponentProps from '../index';

describe('getSelectionNodes', () => {
  let figma: PluginAPI;
  beforeAll(() => {
    figma = createFigma({});
    // @ts-ignore
    global.figma = figma;
  });
  it('Should work for component node not under componentSetNode', () => {
    const componentNode = figma.createComponent();
    componentNode.name = 'type=primary, size=medium, disabled=True';
    expect(getComponentProps(componentNode)).toEqual({});
  });
  // it('Should be able to get props', () => {
  //   const componentNode = figma.createComponent();
  //   componentNode.name = 'type=primary, size=medium, disabled=True';
  //   figma.combineAsVariants([componentNode], figma.currentPage);
  //   expect(getComponentProps(componentNode)).toEqual({
  //     type: 'primary',
  //     size: 'medium',
  //     disabled: 'True'
  //   });
  // });
});
