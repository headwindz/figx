import copyToClipboard from '../index';

describe('copyToClipboard', () => {
  it('should copy to clipboard', () => {
    document.execCommand = jest.fn();
    copyToClipboard('Copied');
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
