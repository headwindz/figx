import { ColorFormat } from '../interface';

const MAP: {
  [format: string]: 'string' | 'array' | 'object';
} = {
  [ColorFormat.STRING]: 'string',
  [ColorFormat.ARRAY]: 'array',
  [ColorFormat.Object]: 'object',
};

export default function getColorMethod(colorFormat: ColorFormat) {
  const methodName = MAP[colorFormat];
  return methodName;
}
