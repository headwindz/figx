---
nav:
  path: /utilities
---

# isFrameNode

Check whether a node is a ellipse node.

## Example

```tsx
import { isEllipseNode } from 'figx';
const node = figma.createEllipse();
isEllipseNode(node); // =>true
```

## API

```ts
const bool = isEllipseNode(node);
```

### Params

| Property | Description            | Type                | Default |
| -------- | ---------------------- | ------------------- | ------- |
| node     | The node to be checked | `Partial<BaseNode>` | -       |

### Result

| Property | Description                        | Type      |
| -------- | ---------------------------------- | --------- |
| bool     | Whether the node is a ellipse node | `boolean` |
