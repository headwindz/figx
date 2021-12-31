---
nav:
  path: /utilities
---

# toRgb

Turn color into rgb format.

## Example

```tsx
import { toRgb, ColorFormat } from 'figx';
toRgb('#FF0000'); // => 'rgb(255, 0, 0)';
toRgb({ r: 255, g: 0, b: 0 }, ColorFormat.ARRAY); // => [255, 0, 0]
toRgb('hsl(0, 100%, 50%)', ColorFormat.Object); // => { r: 255, g: 0, b: 0 }
```

## API

```ts
const result = toRgb(color, colorFormat);
```

### Params

| Property    | Description                 | Type        | Default            |
| ----------- | --------------------------- | ----------- | ------------------ |
| color       | The color to be transformed | IColor      | -                  |
| colorFormat | Color format                | ColorFormat | ColorFormat.STRING |

### Result

| Property | Description | Type |
| --- | --- | --- |
| result | rgb value of the color | `string` \| `array` \| `object` depending on the `colorFormat` argument |
