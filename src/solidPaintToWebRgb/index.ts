import { IColor, ColorFormat } from '../interface';
import toRgb from '../toRgb';

function solidPaintToWebRgb(paint: SolidPaint, format: ColorFormat = ColorFormat.STRING) {
  const { color, opacity } = paint;
  const { r, g, b } = color;
  const webColor: IColor = {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    alpha: opacity,
  };
  return toRgb(webColor, format);
}

export default solidPaintToWebRgb;
