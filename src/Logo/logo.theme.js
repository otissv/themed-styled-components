export function logo({ border, colors, spacing }) {
  return {
    borderBottom: border.thinPrimary,
    padding: `0 ${spacing.small}`,
    width: '100%',
    img: {
      color: colors.foreground,
      display: 'block',
      fontSize: '18px',
      height: '33px',
      textDecoration: 'none'
    }
  };
}
