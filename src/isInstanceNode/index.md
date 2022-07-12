---
nav:
  path: /utilities
---

# isInstanceNode

Check whether a node is a instance node.

## Example

```tsx
import { isInstanceNode } from 'figx';
const componentNode = figma.createComponent();
const instanceNode = componentNode.createInstance();
isInstanceNode(instanceNode); // =>true
```

## API

```ts
const bool = instanceNode(node);
```

### Params

| Property | Description            | Type                | Default |
| -------- | ---------------------- | ------------------- | ------- |
| node     | The node to be checked | `Partial<BaseNode>` | -       |

### Result

| Property | Description                         | Type      |
| -------- | ----------------------------------- | --------- |
| bool     | Whether the node is a instance node | `boolean` |
