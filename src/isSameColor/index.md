---
nav:
  path: /utilities
---

# isSameColor

Check whether two colors are the same

## Example

```tsx
import { isSameColor } from 'figx';
isSameColor('rgb(255,0,0)', '#ff0000'); // true
isSameColor('rgb(255,0,0)', '#ff0001'); // false
```

## API

```ts
const result = isSameColor(colorA, colorB);
```

### Params

| Property | Description              | Type   | Default |
| -------- | ------------------------ | ------ | ------- |
| colorA   | The color to be compared | IColor | -       |
| colorB   | The color to be compared | IColor | -       |

### Result

| Property | Description                                | Type      |
| -------- | ------------------------------------------ | --------- |
| result   | Whether the two colors have the same value | `boolean` |
