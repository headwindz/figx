---
nav:
  path: /utilities
---

# getRandomId

Generate a random id with specified length.

## Example

```tsx
import { getRandomId } from 'figx';
getRandomId(15); // => 'randomString123'
```

## API

```ts
const str = getRandomId(length);
```

### Params

| Property | Description                       | Type   | Default |
| -------- | --------------------------------- | ------ | ------- |
| length   | Length of the generated id string | Number | 5       |

### Result

| Property | Description | Type     |
| -------- | ----------- | -------- |
| str      | Random id   | `string` |
