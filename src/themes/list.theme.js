export function list({ animation, border, colors, font, spacing }) {
  return {
    flex: 1,
    margin: 0,
    padding: `${spacing.small} 0`,
    listStyleType: 'none',

    item: {
      listStyleType: 'none'
    },

    link: {
      background: colors.background,
      color: colors.foreground,
      display: 'inline-block',
      fontSize: font.default,
      letterSpacing: font.letterSpacing,
      padding: spacing.small,
      textDecoration: 'none',
      transition: `color ${animation.easeInMedium}`,
      width: '100%',
      active: {
        background: colors.tertiary
      },
      hover: {
        background: colors.secondary
      }
    }
  };
}
