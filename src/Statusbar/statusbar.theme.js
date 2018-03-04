export function statusbar({ border, colors, font }) {
  return {
    background: colors.background,
    error: '#f00',
    fontColor: colors.foreground,
    fontSize: font.xsmall,
    height: '20px',
    letterSpacing: font.letterSpacing,
    width: '100%'
  };
}
