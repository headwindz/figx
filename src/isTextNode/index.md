---
nav:
  path: /utilities
---

# isTextNode

Check whether a node is a text node.

## Example

```tsx
import { isTextNode } from 'figx';
const textNode = figma.createText();
isTextNode(textNode); // =>true
```

## API

```ts
const bool = isTextNode(node);
```

### Params

| Property | Description            | Type              | Default |
| -------- | ---------------------- | ----------------- | ------- |
| node     | The node to be checked | Partial<BaseNode> | -       |

### Result

| Property | Description                     | Type      |
| -------- | ------------------------------- | --------- |
| bool     | Whether the node is a text node | `boolean` |
