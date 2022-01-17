---
nav:
  path: /utilities
---

# isSamePaint

Check whether two [`Paint`](https://www.figma.com/plugin-docs/api/Paint/)s are the same

## Example

```tsx
import { isSamePaint } from 'figx';

const solidPaintA = {
  type: 'SOLID',
  opacity: 1,
  visible: true,
  blendMode: 'DARKEN',
  color: {
    r: 1,
    g: 0,
    b: 0,
  },
};

const solidPaintB = {
  type: 'SOLID',
  opacity: 1,
  visible: true,
  blendMode: 'DARKEN',
  color: {
    r: 1,
    g: 0,
    b: 1,
  },
};
isSamePaint(solidPaintA, solidPaintB); // => false
```

## API

```ts
const result = isSamePaint(paintA, paintB);
```

### Params

| Property | Description              | Type    | Default |
| -------- | ------------------------ | ------- | ------- |
| paintA   | The paint to be compared | `Paint` | -       |
| paintB   | The paint to be compared | `Paint` | -       |

### Result

| Property | Description                     | Type      |
| -------- | ------------------------------- | --------- |
| result   | Whether the two paints are same | `boolean` |
