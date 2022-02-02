export default function copyToClipboard(value: string) {
  if (window.copy) {
    window.copy(value);
    return true;
  } else {
    try {
      const area = document.createElement('textarea');
      document.body.appendChild(area);
      area.value = value;
      area.focus();
      area.select();
      const result = document.execCommand('copy');
      document.body.removeChild(area);
      if (!result) {
        throw new Error();
      }
      return true;
    } catch (e) {
      console.error(`Unable to copy the value: ${value}`);
      return false;
    }
  }
}
