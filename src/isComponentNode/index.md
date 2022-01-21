---
nav:
  path: /utilities
---

# isComponentNode

Check whether a node is a component node.

## Example

```tsx
import { isComponentNode } from 'figx';
const componentNode = figma.createComponent();
isComponentNode(componentNode); // =>true
```

## API

```ts
const bool = isComponentNode(node);
```

### Params

| Property | Description            | Type                | Default |
| -------- | ---------------------- | ------------------- | ------- |
| node     | The node to be checked | `Partial<BaseNode>` | -       |

### Result

| Property | Description                          | Type      |
| -------- | ------------------------------------ | --------- |
| bool     | Whether the node is a component node | `boolean` |
