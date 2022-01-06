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
getPluginData('count', frame); // '1'
```

## API

```ts
const value = getPluginData(key, node);
```

### Params

| Property | Description                       | Type                | Default |
| -------- | --------------------------------- | ------------------- | ------- |
| key      | Storage key                       | `string`            | -       |
| node     | The node to hold the storage data | `Partial<BaseNode>` | -       |

### Result

| Property | Description  | Type     |
| -------- | ------------ | -------- |
| value    | Storage data | `string` |
