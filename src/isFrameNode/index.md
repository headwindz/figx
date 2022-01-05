---
nav:
  path: /utilities
---

# isFillableNode

Check whether a node is fillable (i.e. can be filled with `Paint`).

## Example

```tsx
import { isFillableNode } from 'figx';
const frameNode = figma.createFrame();
isFillableNode(frameNode); // => true
isFillableNode(figma.root); // => false
```

## API

```ts
const bool = isFillableNode(node);
```

### Params

| Property | Description            | Type                | Default |
| -------- | ---------------------- | ------------------- | ------- |
| node     | The node to be checked | `Partial<BaseNode>` | -       |

### Result

| Property | Description                  | Type      |
| -------- | ---------------------------- | --------- |
| bool     | Whether the node is fillable | `boolean` |
