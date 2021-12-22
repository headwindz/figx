import isPageNode from '../isPageNode';

export default function isVisible(node: SceneNode) {
  do {
    if (node.visible === false) {
      return false;
    }
    node = node.parent as SceneNode;
  } while (node !== null && !isPageNode(node));
  return true;
}
