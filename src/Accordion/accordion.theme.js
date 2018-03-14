export function accordion({ border, colors, font, spacing, widths }) {
  return {
    flex: 1,
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    content: {
      padding: 0
    },

    button: {
      background: 'inherit',
      border: 'none',
      color: colors.foreground,
      cursor: 'pointer',
      display: 'block',
      fontSize: font.large,
      lineHeight: 2,
      outline: 'none',
      overflow: 'hidden',
      padding: 0,
      textAlign: 'left',
      textDecoration: 'none',
      width: '100%',

      '&:hover': {
        color: colors.secondary
      },

      icon: {
        float: 'right',
        '&:hover': {
          color: colors.secondary
        }
      }
    },

    item: {
      cursor: 'pointer',
      lineHeight: 1.4,
      margin: 0,
      overflow: 'hidden',
      padding: 0
    }
  }
}
