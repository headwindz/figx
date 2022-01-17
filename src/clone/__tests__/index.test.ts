import clone from '../index';

const object = { count: 1, sum: 2 };
const deepObject = {
  ...object,
  children: [object, object],
};

describe('clone', () => {
  it('should work for normal object', () => {
    expect(clone(object)).toEqual(object);
    expect(clone(deepObject)).toEqual(deepObject);
  });
  it('should work for properties on prototype chain', () => {
    const _object = {
      ...deepObject,
      __proto__: {
        a: 1,
      },
    };
    expect(clone(_object)).toEqual({
      ...deepObject,
      a: 1,
    });
  });
  it('should work for ignorePredicate', () => {
    const _object = {
      ...deepObject,
    };
    // don't copy children
    const pred = (propName: string) => propName === 'children';
    expect(clone(_object, pred)).toEqual({ ...object });
  });
});
