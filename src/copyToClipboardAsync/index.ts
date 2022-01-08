export default function copyToClipboardAsync(value: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(value);
  }
  return Promise.reject(`Clipboard API is NOT supported in the browser`);
}
