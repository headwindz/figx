export default function isDeepEqual<T>(x: T, y: T): boolean {
  if (x === y) {
    return true;
  } else if (typeof x == 'object' && x != null && typeof y == 'object' && y != null) {
    if (Object.keys(x).length !== Object.keys(y).length) {
      return false;
    }

    for (let propName in x) {
      if (!(propName in y)) {
        return false;
      }
      if (!isDeepEqual(x[propName], y[propName])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
