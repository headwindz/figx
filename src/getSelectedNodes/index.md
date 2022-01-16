---
nav:
  path: /utilities
---

# getSelectedNodes

Get the selected nodes of the current page, filtered with the specified predicate.

## Example

```tsx
import { getSelectedNodes, isFrameNode } from 'figx';
const theFrameNode = figma.createFrame();
const theTextNode = figma.createText();
figma.currentPage.selection = [frame, text];
getSelectedNodes(isFrameNode); // => theFrameNode
```

## API

```ts
const nodes = getSelectedNodes(predicate);
```

### Params

| Property  | Description                                 | Type                   | Default      |
| --------- | ------------------------------------------- | ---------------------- | ------------ |
| predicate | Predicate used to filter out selected nodes | `SceneNode => boolean` | `() => true` |

### Result

| Property | Description                                                   | Type         |
| -------- | ------------------------------------------------------------- | ------------ |
| nodes    | Selected nodes on the page that matches the predicate, if any | `SceneNodes` |
