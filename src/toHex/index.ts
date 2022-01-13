import { IColor } from '../interface';
import Color from 'color';

export default function toHex(color: IColor) {
  const theColor = Color(color);
  return theColor.hex();
}
