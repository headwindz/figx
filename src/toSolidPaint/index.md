---
nav:
  path: /utilities
---

# toSolidPaint

Turn color into figma solid paint

## Example

```tsx
import { toSolidPaint } from 'figx';
// { type: 'SOLID',  color: { r: 0, g: 128 / 255, b: 128 / 255 }, opacity: 1 }
toSolidPaint('008080');
// { type: 'SOLID',  color: { r: 0, g: 128 / 255, b: 128 / 255 }, opacity: 0.1 }
toSolidPaint('rgb(0, 128, 128, 0.1)');
```

## API

```ts
const paint = toSolidPaint(color);
```

### Params

| Property | Description     | Type   | Default |
| -------- | --------------- | ------ | ------- |
| color    | color in string | string | -       |

### Result

| Property | Description | Type         |
| -------- | ----------- | ------------ |
| paint    | Solid paint | `SolidPaint` |
