---
nav:
  path: /utilities
---

# toHSL

Turn color into hsl format.

## Example

```tsx
import { toHsl, ColorFormat } from 'figx';
toHsl('#FF0000'); // => 'hsl(0, 100%, 50%)'
toHsl('rgb(0,0,255)', ColorFormat.ARRAY; // [0, 100, 50]
toHsl({r: 0, g: 0, b: 255}, ColorFormat.OBJECT); // { h: 0, s: 100, l: 50 }
```

## API

```ts
const result = toHsl(color, colorFormat);
```

### Params

| Property    | Description                 | Type          | Default            |
| ----------- | --------------------------- | ------------- | ------------------ |
| color       | The color to be transformed | IColor        | -                  |
| colorFormat | Color format                | `ColorFormat` | ColorFormat.STRING |

### Result

| Property | Description | Type |
| --- | --- | --- |
| result | hsl value of the color | `string` \| `array` \| `object` depending on the `colorFormat` argument |
