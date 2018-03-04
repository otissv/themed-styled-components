export function textarea({ font, border, colors, spacing }) {
  return {
    background: colors.background,
    border: border.thin,
    borderRadius: 0,
    boxSizing: 'border-box',
    color: colors.foreground,
    font: 'inherit',
    letterSpacing: font.letterSpacing,
    margin: 0,
    maxWidth: '100%',
    outline: 'none',
    padding: `${spacing.small} ${spacing.small} 0 ${spacing.small};`,
    touchAction: 'manipulation',
    verticalAlign: 'top',
    webkitAppearance: 'none',
    width: '100%',
    hover: {
      background: colors.background,
      color: colors.foreground
    },
    active: {
      background: colors.background,
      color: colors.foreground
    },
    focus: {
      background: colors.background,
      color: colors.foreground
    }
  };
}
