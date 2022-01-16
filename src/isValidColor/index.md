---
nav:
  path: /utilities
---

# isValidColor

Check whether the passed in `color` parameter can be parsed into a valid color.

## Example

```tsx
import { isValidColor } from 'figx';
isValidColor('rgb(a,0,0)'); // => false
isValidColor('rgb(2,0,0)'); // => true
isValidColor('#aabbcw'); // => false
isValidColor('#abc'); // => true
```

## API

```ts
const result = isValidColor(color);
```

### Params

| Property | Description             | Type   | Default |
| -------- | ----------------------- | ------ | ------- |
| color    | The color to be checked | IColor | -       |

### Result

| Property | Description                                        | Type      |
| -------- | -------------------------------------------------- | --------- |
| result   | Whether the color can be parsed into a valid color | `boolean` |
