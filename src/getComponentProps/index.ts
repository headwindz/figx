import { IObject, NodeTypeEnum } from '../interface';

type ReturnType = IObject<string>;

export default function getComponentProps(node: ComponentNode): ReturnType {
  if (node.type !== NodeTypeEnum.COMPONENT || node.parent?.type !== NodeTypeEnum.COMPONENT_SET) {
    return {};
  }
  const { name } = node;
  const variants = name.split(',');
  return variants.reduce((temp, variant) => {
    if (!variant.includes('=')) {
      return temp;
    }
    const [key, value] = variant.split('=');
    return {
      ...temp,
      [key.trim()]: value.trim(),
    };
  }, {});
}
