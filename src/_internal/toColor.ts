import { IColor, ColorModel, ColorFormat } from '../interface';
import Color from 'color';

export default function toColor(colorModel: ColorModel) {
  return (color: IColor, format: ColorFormat = ColorFormat.STRING) => {
    const methodName = format;
    const theColor = Color(color)[colorModel]() as Color;
    return theColor[methodName]();
  };
}
