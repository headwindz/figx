export default function getPluginData(node: BaseNode, key: string): string | void {
  if (!node || node.removed || !node.getPluginData) {
    return;
  }
  return node.getPluginData(key);
}
