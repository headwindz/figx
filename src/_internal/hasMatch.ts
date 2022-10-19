import isPageNode from '../isPageNode';

type Pred = (node: SceneNode) => boolean;

function hasMatch(pred: Pred, matchedResult: boolean) {
  return (node: SceneNode) => {
    do {
      if (pred(node)) {
        return matchedResult;
      }
      node = node.parent as SceneNode;
    } while (node != null && !isPageNode(node));
    return !matchedResult;
  };
}

export default hasMatch;
