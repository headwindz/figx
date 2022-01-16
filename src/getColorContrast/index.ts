import { IColor } from '../interface';
import Color from 'color';

export default function getColorContrast(colorA: IColor, colorB: IColor) {
  const _colorA = Color(colorA);
  const _colorB = Color(colorB);
  return _colorA.contrast(_colorB);
}
