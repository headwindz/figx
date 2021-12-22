import getColorMethodName from '../_internal/getColorMethodName';
import { ColorFormat } from '../interface';
import Color from 'color';

function hexToRgb(hex: string, format: ColorFormat = ColorFormat.STRING) {
  const methodName = getColorMethodName(format);
  const color = Color(hex).rgb();
  return color[methodName]();
}

export default hexToRgb;
