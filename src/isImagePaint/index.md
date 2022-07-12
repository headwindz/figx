---
nav:
  path: /utilities
---

# isImagePaint

Check whether a `paint` is `ImagePaint`.

## Example

```tsx
import { isImagePaint } from 'figx';
const node = figma.createFrame();
isImagePaint(node.fills[0]); // => false
```

````

## API

```ts
const bool = isImagePaint(node);
````

### Params

| Property | Description | Type    | Default |
| -------- | ----------- | ------- | ------- |
| paint    | the paint   | `Paint` | -       |

### Result

| Property | Description                       | Type      |
| -------- | --------------------------------- | --------- |
| bool     | Whether the paint is `ImagePaint` | `boolean` |
