import { NodeTypeEnum } from '../interface';

export default function isOfType(nodeType: NodeTypeEnum) {
  return (node: BaseNode) => {
    return node.type === nodeType;
  };
}
