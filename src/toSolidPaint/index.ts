import Color from 'color';

function toSolidPaint(colorInString: string, opacity?: number): SolidPaint {
  const color = Color(colorInString);
  const { r, g, b, alpha = 1 } = color.rgb().unitObject();
  // https://www.figma.com/plugin-docs/api/Paint/#solidpaint
  return {
    type: 'SOLID',
    color: { r, g, b },
    opacity: opacity != null ? opacity : alpha,
  };
}

export default toSolidPaint;
