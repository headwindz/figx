import { IColor } from '../interface';
import toHex from '../toHex';

export default function isSameColor(colorA: IColor, colorB: IColor) {
  const colorAInHex = toHex(colorA);
  const colorBInHex = toHex(colorB);
  return colorAInHex === colorBInHex;
}
