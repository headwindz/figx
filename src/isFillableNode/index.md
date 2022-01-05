---
nav:
  path: /utilities
---

# isFrameNode

Check whether a node is a frame node.

## Example

```tsx
import { isFrameNode } from 'figx';
const frameNode = figma.createFrame();
isFrameNode(frameNode); // =>true
```

## API

```ts
const bool = isFrameNode(node);
```

### Params

| Property | Description            | Type                | Default |
| -------- | ---------------------- | ------------------- | ------- |
| node     | The node to be checked | `Partial<BaseNode>` | -       |

### Result

| Property | Description                      | Type      |
| -------- | -------------------------------- | --------- |
| bool     | Whether the node is a frame node | `boolean` |
