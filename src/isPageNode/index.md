---
nav:
  path: /utilities
---

# isPageNode

Check whether a node is a page node.

## Example

```tsx
import { isPageNode } from 'figx';
const page = figma.createPage();
isPageNode(page); // =>true
```

## API

```ts
const bool = isPageNode(node);
```

### Params

| Property | Description            | Type              | Default |
| -------- | ---------------------- | ----------------- | ------- |
| node     | The node to be checked | Partial<BaseNode> | -       |

### Result

| Property | Description                     | Type      |
| -------- | ------------------------------- | --------- |
| bool     | Whether the node is a page node | `boolean` |
