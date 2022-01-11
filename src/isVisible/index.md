---
nav:
  path: /utilities
---

# isVisible

Check whether a node is visible. A node is invisible if itself or any of its direct ancestor is invisible.

## Example

```tsx
import { isVisible } from 'figx';
const textNode = figma.createText();
isVisible(textNode); // => true
```

## API

```ts
const bool = isVisible(node);
```

### Params

| Property | Description            | Type        | Default |
| -------- | ---------------------- | ----------- | ------- |
| node     | The node to be checked | `SceneNode` | -       |

### Result

| Property | Description                 | Type      |
| -------- | --------------------------- | --------- |
| bool     | Whether the node is visible | `boolean` |
