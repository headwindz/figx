export default function getPluginData(key: string, node: BaseNode): string | void {
  if (!node || node.removed || !node.getPluginData) {
    return;
  }
  return node.getPluginData(key);
}
