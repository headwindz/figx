---
nav:
  path: /utilities
---

# hexToRgb

Turn color in hex format into rgb format.

## Example

```tsx
import { hexToRgb, ColorFormat } from 'figx';
hexToRgb(hex); //'rgb(0, 128, 128)';
hexToRgb(hex, ColorFormat.ARRAY; // [0, 128, 128]
hexToRgb(hex, ColorFormat.Object); // { r: 0, g: 128, b: 128 }
```

## API

```ts
const rgbValue = hexToRgb(hexValue, colorFormat);
```

### Params

| Property    | Description            | Type        | Default            |
| ----------- | ---------------------- | ----------- | ------------------ |
| hexValue    | Hex value of the color | string      | -                  |
| colorFormat | color format           | ColorFormat | ColorFormat.STRING |

### Result

| Property | Description | Type |
| --- | --- | --- |
| rgbValue | Rgb value of the color | `string` \| `array` \| `object` depending on the `colorFormat` argument |
