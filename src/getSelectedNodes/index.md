---
nav:
  path: /utilities
---

# getSelectedNodes

Get the selected nodes of the current page, filtered with specified predicate.

## Example

```tsx
import { getSelectedNodes, isFrameNode } from 'figx';
const theFrameNode = figma.createFrame();
const theTextNode = figma.createText();
figma.currentPage.selection = [frame, text];
getSelectionNodes(isFrameNode); // => theFrameNode
```

## API

```ts
const nodes = getSelectedNodes(predicate);
```

### Params

| Property  | Description                             | Type                   | Default      |
| --------- | --------------------------------------- | ---------------------- | ------------ |
| predicate | Predicator to filter out selected nodes | `SceneNode => boolean` | `() => true` |

### Result

| Property | Description                                                   | Type         |
| -------- | ------------------------------------------------------------- | ------------ |
| nodes    | Selected nodes on the page that matches the predicate, if any | `SceneNodes` |
