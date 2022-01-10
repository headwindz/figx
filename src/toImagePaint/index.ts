const DEFAULT_OPTIONS = {
  scaleMode: 'FILL' as ImagePaint['scaleMode'],
  scalingFactor: 0.5,
  opacity: 1,
};

function toImagePaint(
  bytes: Uint8Array,
  options: Omit<ImagePaint, 'type' | 'imageHash'> = DEFAULT_OPTIONS,
): ImagePaint {
  const image = figma.createImage(bytes);
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    imageHash: image.hash,
    type: 'IMAGE',
  };
}

export default toImagePaint;
