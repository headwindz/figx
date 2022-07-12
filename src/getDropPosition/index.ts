import { IPosition } from '../interface';

const RIGHT_PANEL_WIDTH = 240;
const TOP_BAR_HEIGHT = 40;

// Credit: https://github.com/jackiecorn/figma-plugin-drag-and-drop/blob/master/code.ts
export default function getDropPosition(
  dropPositionRelativeToPlugin: IPosition,
  offset: IPosition,
  windowWidth: number,
): IPosition {
  // bounds: the position and size of the visible area of the canvas.
  const { bounds, zoom } = figma.viewport;
  // There are two states of the Figma interface: With or without the UI (toolbar + left and right panes)
  const hasUI = Math.round(bounds.width * zoom) !== windowWidth;
  // Since the left pane is resizable, we need to get its width by subtracting the right pane and the canvas width from the window width.
  const leftPaneWidth = windowWidth - bounds.width * zoom - RIGHT_PANEL_WIDTH;

  // Getting the position of the cursor relative to the top-left corner of the canvas.
  const xFromCanvas = hasUI
    ? dropPositionRelativeToPlugin.x - leftPaneWidth
    : dropPositionRelativeToPlugin.x;
  const yFromCanvas = hasUI
    ? dropPositionRelativeToPlugin.y - TOP_BAR_HEIGHT
    : dropPositionRelativeToPlugin.y;

  // The canvas position of the drop point can be calculated using the following:
  const x = bounds.x + xFromCanvas / zoom - offset.x;
  const y = bounds.y + yFromCanvas / zoom - offset.y;

  return { x, y };
}
