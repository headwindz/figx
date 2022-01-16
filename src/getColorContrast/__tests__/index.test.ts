import getColorContrast from '../index';

describe('getColorContrast', () => {
  it('should work for same color', () => {
    expect(getColorContrast({ r: 255, g: 0, b: 0 }, 'rgb(255,0,0)')).toEqual(1);
  });

  it('should work for different color', () => {
    expect(getColorContrast({ r: 255, g: 0, b: 0 }, 'rgb(0,255,200)')).toEqual(3.0727391766908636);
  });
});
