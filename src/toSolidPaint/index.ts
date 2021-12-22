import Color from 'color';

function toSolidPaint(colorInString: string): SolidPaint {
  const color = Color(colorInString);
  const { r, g, b, alpha = 1 } = color.rgb().object();
  // https://www.figma.com/plugin-docs/api/Paint/#solidpaint
  return {
    type: 'SOLID',
    color: { r: r / 255, g: g / 255, b: b / 255 },
    opacity: alpha,
  };
}

export default toSolidPaint;
