// figma node type. Reference: https://www.figma.com/plugin-docs/api/nodes/
export enum NodeTypeEnum {
  BOOLEAN_OPERATION = 'BOOLEAN_OPERATION',
  CODE_BLOCK = 'CODE_BLOCK',
  COMPONENT = 'COMPONENT',
  COMPONENT_SET = 'COMPONENT_SET',
  CONNECTOR = 'CONNECTOR',
  DOCUMENT = 'DOCUMENT',
  ELLIPSE = 'ELLIPSE',
  FRAME = 'FRAME',
  GROUP = 'GROUP',
  INSTANCE = 'INSTANCE',
  LINE = 'LINE',
  PAGE = 'PAGE',
  POLYGON = 'POLYGON',
  RECTANGLE = 'RECTANGLE',
  SHAPE_WITH_TEXT = 'SHAPE_WITH_TEXT',
  SLICE = 'SLICE',
  STAMP = 'STAMP',
  STAR = 'STAR',
  STICKY = 'STICKY',
  TEXT = 'TEXT',
  VECTOR = 'VECTOR',
  WIDGET = 'WIDGET',
}

export enum ColorFormat {
  STRING = 'string',
  ARRAY = 'array',
  OBJECT = 'object',
  UNIT_ARRAY = 'unitArray',
  UNIT_OBJECT = 'unitObject',
}

export enum ColorModel {
  HSL = 'hsl',
  RGB = 'rgb',
  HEX = 'hex',
}

export type IColor =
  | string
  | { r: number; g: number; b: number; alpha?: number }
  | { h: number; s: number; l: number };

export type IObject<T = any> = Record<string, T>;
