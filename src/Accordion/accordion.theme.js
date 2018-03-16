export function accordion({
  animation,
  border,
  colors,
  font,
  spacing,
  widths
}) {
  return {
    flex: 1,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    transition: animation.easeMedium(),

    content: {
      display: 'none',
      overflow: 'hidden',
      padding: 0,
      transition: animation.easeMedium()
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
      transition: animation.easeMedium(),
      width: '100%',

      '&:hover': {
        color: colors.secondary
      },

      icon: {
        float: 'right',
        transition: animation.easeMedium(),

        '&:hover': {
          color: colors.secondary
        }
      }
    },

    item: {
      cursor: 'pointer',
      display: 'list-item',
      lineHeight: 1.4,
      margin: 0,
      overflow: 'hidden',
      padding: 0,
      textAlign: '-webkit-match-parent',
      transition: animation.easeMedium()
    }
  }
}
