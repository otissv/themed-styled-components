export function svg({ colors }) {
  return {
    fill: colors.foreground,
    height: '16px',
    width: '16px',
    display: 'inline-block',
    small: {
      height: '13px',
      width: '13px'
    },

    hover: {
      fill: colors.foreground
    },
    primary: {
      hover: {
        fill: colors.primary
      }
    }
  };
}
