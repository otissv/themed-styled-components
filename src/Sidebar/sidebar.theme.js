export function sidebar({ animation, colors, spacing }) {
  return {
    background: colors.background,
    marginRight: '15px',
    width: '215px',
    paddingTop: spacing.small,

    button: {
      flex: 1,
      height: '40px',
      border: 'none',
      outline: 'none',
      transition: `background ${animation.easeMedium}`,
      cursor: 'pointer',
      background: colors.background,
      color: colors.foreground,

      active: {
        background: colors.tertiary
      },

      hover: {
        background: colors.secondary
      }
    },

    content: {
      overflowY: 'auto',
      height: 'calc(100vh - 155px)',
      paddingTop: spacing.small,
      paddingRight: spacing.small,
      paddingBottom: spacing.medium,
      paddingLeft: 0
    },

    buttons: {
      position: 'relative',
      zIndex: 1,
      display: 'flex'
    }
  };
}
