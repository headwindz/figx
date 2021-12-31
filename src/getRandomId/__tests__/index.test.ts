import getRandomId from '../index';

describe('getRandomId', () => {
  it('should work with default length', () => {
    const id = getRandomId();
    expect(id.length).toEqual(5);
  });

  it('should work with specified length', () => {
    const id = getRandomId(10);
    expect(id.length).toEqual(10);
  });
});
