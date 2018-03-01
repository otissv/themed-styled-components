export function nav({ animation, border, colors, font, spacing }) {
  return {
    background: colors.background,
    flex: 1,
    marginBottom: '30px',
    maxHeight: 'calc(100hv - 20px)',
    transition: `transform ${animation.easeMedium}`,
    zIndex: 9999,

    link: {
      background: colors.background,
      boxSizing: 'border-box',
      color: colors.foreground,
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: font.default,
      lineHeight: '41px',
      padding: `0 ${spacing.small}`,
      textDecoration: 'none',
      width: '100%',

      active: {
        background: colors.tertiary
      },

      hover: {
        background: colors.secondary
      }
    },

    list: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  };
}
