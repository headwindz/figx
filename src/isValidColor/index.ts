import { IColor } from '../interface';
import Color from 'color';

export default function isValidColor(color: IColor) {
  try {
    let _color = Color(color);
    return _color != null;
  } catch (e) {
    return false;
  }
}
