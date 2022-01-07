export default function copyToClipboard(value: string) {
  const area = document.createElement('textarea');
  document.body.appendChild(area);
  area.value = value;
  area.select();
  document.execCommand('copy');
  document.body.removeChild(area);
}
