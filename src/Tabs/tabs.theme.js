export function tabs({ animation, colors, font, scrollbar, spacing }) {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'stretch',

    item: {},

    list: {
      overflowX: 'auto',
      overflowY: 'hidden',
      whiteSpace: 'nowrap'
    },

    panel: {
      display: 'flex',
      flex: 1
    }
  }
}
