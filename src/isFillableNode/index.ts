export default function isFillableNode(node: BaseNode): boolean {
  return 'fills' in node;
}
