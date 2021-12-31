import { NodeTypeEnum } from '../interface';

export default function isOfType(nodeType: NodeTypeEnum) {
  return (node: Partial<BaseNode>) => {
    return node.type === nodeType;
  };
}
