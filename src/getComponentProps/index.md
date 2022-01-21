---
nav:
  path: /utilities
---

# getComponentProps

Get the variants properties of the component node. Only works for component nodes under [ComponentSetNode](https://www.figma.com/plugin-docs/api/ComponentSetNode)

## Example

```tsx
import { getComponentProps } from 'figx';
const componentNode = figma.createComponent();
componentNode.name = 'type=primary, size=medium, disabled=True';
figma.combineAsVariants([componentNode], figma.currentPage);
getComponentProps(componentNode); // { type: 'primary', size: 'medium', disabled: 'True' }
```

## API

```ts
const result = getComponentProps(node);
```

### Params

| Property | Description                           | Type            | Default |
| -------- | ------------------------------------- | --------------- | ------- |
| node     | Component node to get properties from | `ComponentNode` |         |

### Result

| Property | Description         | Type              |
| -------- | ------------------- | ----------------- |
| result   | Variants properties | `IObject<string>` |
