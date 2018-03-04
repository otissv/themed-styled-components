export function text({ animation, border, colors, font, spacing }) {
  return {
    bold: 'bold',
    fontSize: font.default,
    small: {
      fontSize: font.xsmall,
      lineHeight: '16px'
    },
    large: {
      fontSize: font.large,
      lineHeight: '24px'
    }
    // align
    // Vertical
    // Wrap
  };
}
