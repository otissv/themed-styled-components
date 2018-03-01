export function modal({ animation, border, colors, font, spacing }) {
  return {
    display: 'block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    background: 'rgba(0, 0, 0, 0.8)',
    overflow: 'scroll',

    dialog: {
      background: colors.background,
      margin: '50px auto',
      marginFull: spacing.small,
      maxWidth: '600px',
      maxWidthFull: 'auto',
      border: border.thin,
      transition: `opacity 0.3s linear, transform ${animation.easeInOutXslow}`,
      opacity: 0.3,
      transform: 'translateY(-300px)',
      overflow: 'auto',
      height: 'auto',
      heightFull: '98vh',

      opened: {
        opacity: 1,
        transform: 'translateY(0)'
      },

      header: {
        padding: `6px ${spacing.small}`,
        borderBottom: border.thinPrimary
      },

      title: {
        fontWeight: 'normal',
        fontSize: font.large,
        margin: 0,
        display: 'inline'
      },

      body: {
        padding: spacing.medium,
        overflow: 'auto'
      }
    }
  };
}
