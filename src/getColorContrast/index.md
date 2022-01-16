---
nav:
  path: /utilities
---

# getColorContrast

Get the [WCAG contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) between two colors.

## Example

```tsx
import { getColorContrast } from 'figx';

getColorContrast({ r: 255, g: 0, b: 0 }, 'rgb(255,0,0)'); // 1
getColorContrast({ r: 255, g: 0, b: 0 }, 'rgb(0,255,200)')); // 3.0727391766908636
```

## API

```ts
const result = getColorContrast(colorA, colorB);
```

### Params

| Property | Description              | Type   | Default |
| -------- | ------------------------ | ------ | ------- |
| colorA   | The color to be compared | IColor | -       |
| colorB   | The color to be compared | IColor | -       |

### Result

| Property | Description    | Type     |
| -------- | -------------- | -------- |
| result   | Contrast ratio | `number` |
