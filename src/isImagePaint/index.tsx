export default function isImagePaint(paint: Paint | null | undefined): boolean {
  return paint?.type === 'IMAGE';
}
