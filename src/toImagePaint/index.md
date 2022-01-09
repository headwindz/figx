---
nav:
  path: /utilities
---

# toImagePaint

Turn [Uint8Array][uint8array-link] into figma [ImagePaint][image-paint-link]

[uint8array-link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[image-paint-link]: https://www.figma.com/plugin-docs/api/Paint/#imagepaint

## Example

```tsx
import { toImagePaint } from 'figx';
const bytes = new Uint8Array([1, 2, 3]);
toImagePaint(bytes); // { imageHash: 'xxx', type: 'IMAGE'}
```

## API

```ts
const paint = toImagePaint(bytes, options);
```

### Params

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| bytes | Image data in Uint8Array | `Uint8Array` | - |
| options | Extra options | `Omit<ImagePaint, 'type' \| 'imageHash'` | `{ scaleMode: 'FILL' , scalingFactor: 0.5, opacity: 1 }` |

### Result

| Property | Description | Type         |
| -------- | ----------- | ------------ |
| paint    | Image paint | `ImagePaint` |
