---
nav:
  path: /utilities
---

# getDropPosition

Get the canvas position of the drop point

## Example

```tsx
import { getDropPosition } from 'figx';
getDropPosition({ x: 100, y: 10 }, { 20, 10 }, 400);
```

## API

```ts
const result = getDropPosition(dropPositionRelativeToPlugin, offset, windowWidth);
```

### Params

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| dropPositionRelativeToPlugin | Drop position relative to the plugin, available as `clientX` and `clientY` of the `DragEnd` event | `Position` | - |
| offset | Offset of the drag point, available as `offsetX` and `offsetY` of the `DragStart` event | `Position` | - |
| windowWidth | Window width, available as `window.outerWidth` in plugin UI | `number` | - |

### Result

| Property | Description                | Type       |
| -------- | -------------------------- | ---------- |
| result   | Position of the drop point | `Position` |
