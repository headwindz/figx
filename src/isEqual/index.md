---
nav:
  path: /utilities
---

# isEqual

Check whether two `element`s (Can't be primitives or objects) are the equivalent

## Example

```tsx
import { isEqual } from 'figx';

const solidPaintA = {
  type: 'SOLID',
  color: {
    r: 1,
    g: 0,
    b: 0,
  },
};

const solidPaintB = {
  type: 'SOLID',
  color: {
    r: 1,
    g: 0,
    b: 1,
  },
};
isEqual(solidPaintA, solidPaintB); // => false
```

## API

```ts
const result = isEqual(elementA, elementB);
```

### Params

| Property | Description                | Type | Default |
| -------- | -------------------------- | ---- | ------- |
| elementA | The element to be compared | `T`  | -       |
| elementB | The element to be compared | `T`  | -       |

### Result

| Property | Description                             | Type      |
| -------- | --------------------------------------- | --------- |
| result   | Whether the two elements are equivalent | `boolean` |
