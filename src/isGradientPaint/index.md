---
nav:
  path: /utilities
---

# isImagePaint

Check whether a `paint` is `GradientPaint`.

## Example

```tsx
import { GradientPaint } from 'figx';
const node = figma.createFrame();
GradientPaint(node.fills[0]); // => false
```

````

## API

```ts
const bool = GradientPaint(node);
````

### Params

| Property | Description | Type    | Default |
| -------- | ----------- | ------- | ------- |
| paint    | the paint   | `Paint` | -       |

### Result

| Property | Description                          | Type      |
| -------- | ------------------------------------ | --------- |
| bool     | Whether the paint is `GradientPaint` | `boolean` |
