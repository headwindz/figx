import isPageNode from '../isPageNode';

export default function isMatched(propName: keyof SceneNode, matchedResult: boolean) {
  return (node: SceneNode) => {
    do {
      if (node[propName] === matchedResult) {
        return matchedResult;
      }
      node = node.parent as SceneNode;
    } while (node !== null && !isPageNode(node));
    return !matchedResult;
  };
}
