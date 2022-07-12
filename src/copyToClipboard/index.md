---
nav:
  path: /utilities
---

# copyToClipboard

Copy text to clipboard with `document.execCommand`

> Note: `document.execCommand('copy')` doesn't work in figma browser due to `copy` command is disabled. `window.copy` is put in as a workaround for this issue. However, it's only supported in chrome.

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
const isCopied = copyToClipboard(text);
```

### Params

| Property | Description                        | Type     | Default |
| -------- | ---------------------------------- | -------- | ------- |
| text     | The text to be copied to clipboard | `string` | -       |

### Result

| Property | Description                             | Type      | Default |
| -------- | --------------------------------------- | --------- | ------- |
| isCopied | Whether the text is copied to clipboard | `boolean` | -       |
