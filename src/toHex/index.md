---
nav:
  path: /utilities
---

# toHex

Turn color into hex format.

## Example

```tsx
import { toHex } from 'figx';

toHex({ r: 255, g: 0, b: 0 }); // '#FF0000'
toHex('rgb(255, 0, 0)'); // '#FF0000'
toHex('hsl(0, 100%, 50%)'); // '#FF0000'
```

## API

```ts
const result = toHex(color);
```

### Params

| Property | Description                 | Type   | Default |
| -------- | --------------------------- | ------ | ------- |
| color    | The color to be transformed | IColor | -       |

### Result

| Property | Description            | Type     |
| -------- | ---------------------- | -------- |
| result   | Hex value of the color | `string` |
