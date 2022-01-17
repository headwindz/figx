---
nav:
  path: /utilities
---

# clone

Clone an element with properties in prototype hoisted, useful for cloning [figma nodes](https://www.figma.com/plugin-docs/api/nodes/). Accepts an optional parameter `ignorePredicate` to filter out unwanted properties.

## Example

```tsx
import { clone } from 'figx';

const object = { count: 1, sum: 2 };
const deepObject = {
  ...object,
  children: [{ a: 1 }],
};

clone(object); // => { count: 1, sum: 2 }
clone(deepObject); // => { count: 1, sum: 2, children: [{ a: 1}] }

// don't copy children
const pred = (propName) => propName === 'children';
clone(deepObject, pred); // => { count: 1, sum: 2 }
```

## API

```ts
const result = clone<T>(element: T, predicate: (propName: string, element: T) => boolean);
```

### Params

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| element | The element to be cloned | T | - |
| predicate | Logic to ignore properties from being copied | (propName: string, element: T) => boolean) | - |

### Result

| Property | Description    | Type |
| -------- | -------------- | ---- |
| result   | Cloned element | `T`  |
