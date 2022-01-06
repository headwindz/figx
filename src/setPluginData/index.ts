export default function setPluginData(node: BaseNode, key: string, value: string): void {
  if (!node || node.removed || !node.setPluginData) {
    return;
  }
  node.setPluginData(key, value);
}
