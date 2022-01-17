type Predicate<T> = (propName: string, element: T) => boolean;

export default function clone<T>(element: T, ignorePredicate: Predicate<T> = () => false): T {
  const type = typeof element;
  if (
    element == null ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'symbol'
  ) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map((ele) => clone(ele)) as unknown as T;
  }
  const result: { [keyProp: string]: any } = {};
  for (let key in element) {
    if (!ignorePredicate(key, element)) {
      result[key] = clone(element[key]);
    }
  }
  return result as T;
}
