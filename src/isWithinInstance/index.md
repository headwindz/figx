---
nav:
  path: /utilities
---

# isWithinInstance

Check whether a node is within an [instance node](https://www.figma.com/plugin-docs/api/InstanceNode/).

## Example

```tsx
import { isWithinInstance } from 'figx';
const frameNode = figma.createFrame();
isWithinInstance(frameNode); // => false
```

## API

```ts
const bool = isWithinInstance(node);
```

### Params

| Property | Description            | Type        | Default |
| -------- | ---------------------- | ----------- | ------- |
| node     | The node to be checked | `SceneNode` | -       |

### Result

| Property | Description                                  | Type      |
| -------- | -------------------------------------------- | --------- |
| bool     | Whether the node is part of an instance node | `boolean` |
