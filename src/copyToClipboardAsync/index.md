---
nav:
  path: /utilities
---

# copyToClipboardAsync

Copy text to clipboard with [`Clipboard.writeText`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)

## Example

```tsx | preview
import { copyToClipboardAsync } from 'figx';
import { Input, Button, Message, Space } from '@arco-design/web-react';
import React, { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState('');
  const onClick = async () => {
    await copyToClipboardAsync(textValue);
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
const promise = copyToClipboardAsync(text);
```

### Params

| Property | Description                        | Type     | Default |
| -------- | ---------------------------------- | -------- | ------- |
| text     | The text to be copied to clipboard | `string` | -       |

### Result

| Property | Description | Type |
| --- | --- | --- |
| promise | The promise is resolved once the text has been copied to clipboard successfully. The promise is rejected if no permission to write to the clipboard or `Clipboard` API is not supported | `Promise<void>` |
