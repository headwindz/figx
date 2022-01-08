---
nav:
  path: /utilities
---

# solidPaintToWebRgb

Turn solid paint into web rgb

## Example

```tsx | preview
import { solidPaintToWebRgb, ColorFormat } from 'figx';
import React from 'react';
import { Descriptions } from '@arco-design/web-react';

export default () => {
  const paint: SolidPaint = {
    type: 'SOLID',
    color: {
      r: 0.5285416841506958,
      g: 0.5314041376113892,
      b: 0.737500011920929,
    },
    opacity: 1,
  };

  const data = [
    {
      label: 'Paint',
      value: <pre>{JSON.stringify(paint, null, 2)}</pre>,
    },
    {
      label: 'RGB in string',
      value: <pre>{solidPaintToWebRgb(paint)}</pre>,
    },
    {
      label: 'RGB in object',
      value: <pre>{JSON.stringify(solidPaintToWebRgb(paint, ColorFormat.OBJECT), null, 2)}</pre>,
    },
    {
      label: 'RGB in array',
      value: <pre>{`[${solidPaintToWebRgb(paint, ColorFormat.ARRAY).join(',')}]`}</pre>,
    },
  ];

  return <Descriptions column={1} border data={data} />;
};
```

## API

```ts
const result = solidPaintToWebRgb(paint, colorFormat);
```

### Params

| Property    | Description  | Type          | Default            |
| ----------- | ------------ | ------------- | ------------------ |
| paint       | Solid paint  | `SolidPaint`  | -                  |
| colorFormat | Color format | `ColorFormat` | ColorFormat.STRING |

### Result

| Property | Description | Type |
| --- | --- | --- |
| result | rgb value of the color | `string` \| `array` \| `object` depending on the `colorFormat` argument |
