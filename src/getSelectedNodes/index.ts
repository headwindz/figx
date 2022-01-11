type Predicate = (node: SceneNode) => boolean;

export default function getSelectionNodes(predicate: Predicate = () => true): SceneNode[] {
  const allSelectedNodes = figma.currentPage.selection;
  if (allSelectedNodes.length === 0) {
    return [];
  }
  return allSelectedNodes.filter(predicate);
}
