export function tabs({ animation, colors, font, scrollbar, spacing }) {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    item: {
      background: 'none',
      border: 'none',
      height: '13px',
      outline: 'none',
      padding: `0 ${spacing.medium} 0 ${spacing.xsmall}`,
      position: 'absolute',
      transform: 'translate(-23px, 13px)',
      width: '13px',
      right: '-19px',
      svg: {
        fill: colors.foreground,
        height: '16px',
        width: '16px',
        display: ' inline-block'
      }
    },

    link: {
      padding: `${spacing.small} ${spacing.large} ${spacing.xsmall} ${spacing.medium}`,
      display: 'inline-block',
      textDecoration: 'none',
      fontSize: font.default,
      letterSpacing: '1px',
      cursor: 'pointer',
      transition: `color ${animation.easeMedium}`,
      color: colors.foreground,
      height: '41px',
      transition: `background ${animation.easeMedium}`,
      background: colors.background,

      active: {
        background: colors.tertiary
      },

      hover: {
        background: colors.secondary
      }
    },

    list: {
      container: {
        height: '41px',
        position: 'relative'
      },
      listStyle: 'none',
      padding: 0,
      margin: 0,
      overflowX: 'auto',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
      position: 'absolute',
      right: 0,
      left: 0,
      scrollbar: {
        width: scrollbar.small.width,
        height: scrollbar.small.height
      }
    },

    panel: {
      display: 'flex',
      flex: 1
    }
  };
}
