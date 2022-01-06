---
nav:
  path: /utilities
---

# getPluginData

## Example

```tsx
import { getPluginData } from 'figx';
const frame = figma.createFrame();
frame.setPluginData('count', '1');
getPluginData(frame, 'count'); // '1'
```

## API

```ts
const value = getPluginData(node, key);
```

### Params

| Property | Description                       | Type                | Default |
| -------- | --------------------------------- | ------------------- | ------- |
| node     | The node to hold the storage data | `Partial<BaseNode>` | -       |
| key      | Storage key                       | `string`            | -       |

### Result

| Property | Description  | Type     |
| -------- | ------------ | -------- |
| value    | Storage data | `string` |
