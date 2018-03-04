export function scrollbar({ colors, spacing }) {
  return {
    width: spacing.small,
    height: spacing.small,
    small: {
      width: spacing.xsmall,
      height: spacing.xsmall
    },
    backgroundColor: colors.background,
    corner: {
      backgroundColor: colors.background
    },
    thumb: {
      backgroundColor: colors.tertiary,
      outline: 'none',
      hover: {
        backgroundColor: colors.tertiary
      }
    }
  };
}
