export default function isGradientPaint(paint: Paint | null | undefined): boolean {
  return ['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'].some(
    (type) => paint?.type === type,
  );
}
