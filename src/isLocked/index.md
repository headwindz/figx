---
nav:
  path: /utilities
---

# isLocked

Check whether a node is locked. A node is locked if itself or any of its direct ancestor is locked.

## Example

```tsx
import { isLocked } from 'figx';
const frameNode = figma.createFrame();
isLocked(frameNode); // => false
frameNode.locked = true;
isLocked(figma.root); // => true
```

## API

```ts
const bool = isLocked(node);
```

### Params

| Property | Description            | Type        | Default |
| -------- | ---------------------- | ----------- | ------- |
| node     | The node to be checked | `SceneNode` | -       |

### Result

| Property | Description                | Type      |
| -------- | -------------------------- | --------- |
| bool     | Whether the node is locked | `boolean` |
