export function accordion({ border, colors, font, spacing }) {
  return {
    flex: 1,
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    content: {
      color: colors.foreground,
      cursor: 'pointer',
      float: 'right',
      fontSize: font.large,
      fontWeight: 'bold',
      height: '20px',
      letterSpacing: '3px',
      lineHeight: 0.5,
      marginTop: spacing.small,
      outline: 'none',
      padding: `0 ${spacing.xsmall}`,

      hover: {
        background: colors.foreground,
        border: border.thin,
        color: colors.background
      }
    },

    button: {
      background: 'inherit',
      border: 'none',
      color: colors.foreground,
      letterSpacing: '1px',
      lineHeight: 2,
      outline: 'none',
      paddingTop: spacing.small,
      paddingLeft: spacing.small,
      paddingBottom: spacing.xsmall,
      paddingRight: spacing.small,
      position: 'relative',
      textAlign: 'left',
      width: '100%',
      cursor: 'pointer',

      indicator: {
        display: 'inline-block',
        fontSize: font.large,
        width: '14px'
      }
    },

    item: {
      cursor: 'pointer',
      cursor: 'pointer',
      fontSize: font.small,
      lineHeight: 1.4,
      margin: 0,
      overflow: 'hidden',
      padding: 0
    }
  };
}
