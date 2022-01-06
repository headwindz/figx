---
nav:
  path: /utilities
---

# setPluginData

Lets you store custom information on any node or style, private to your plugin. Wraps around [setPluginData](https://www.figma.com/plugin-docs/api/properties/nodes-setplugindata/) with safe check.

## Example

```tsx
import { setPluginData, getPluginData } from 'figx';
const frame = figma.createFrame();
setPluginData(frame, 'count', '1');
getPluginData(frame, 'count'); // '1'
```

## API

```ts
setPluginData(node, key, value);
```

### Params

| Property | Description                       | Type                | Default |
| -------- | --------------------------------- | ------------------- | ------- |
| node     | The node to hold the storage data | `Partial<BaseNode>` | -       |
| key      | Storage key                       | `string`            | -       |
| value    | Storage value                     | `string`            | -       |

### Result

`void`
