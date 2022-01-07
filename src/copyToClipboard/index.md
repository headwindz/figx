---
nav:
  path: /utilities
---

# copyToClipboard

Copy text to clipboard with `document.execCommand`

## Example

```tsx | preview
import { copyToClipboard } from 'figx';
import { Input, Button, Message, Space } from '@arco-design/web-react';
import React, { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState('');
  const onClick = () => {
    copyToClipboard(textValue);
    Message.info(`Successfully copied text: ${textValue}`);
  };
  return (
    <Space>
      <Input value={textValue} onChange={setTextValue} style={{ width: 200 }} />
      <Button type="primary" onClick={onClick}>
        Copy to Clipboard
      </Button>
    </Space>
  );
}

export default () => <App />;
```

## API

```ts
copyToClipboard(text);
```

### Params

| Property | Description                        | Type     | Default |
| -------- | ---------------------------------- | -------- | ------- |
| text     | The text to be copied to clipboard | `string` | -       |

### Result

`void`
