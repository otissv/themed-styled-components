export function iconButton({ animation, border, colors, font }) {
  return {
    background: 'none',
    border: 'none',
    color: colors.foreground,
    cursor: 'pointer',
    height: '40px',
    lineHeight: 0,
    margin: '4px 1px',
    outline: 'none',
    textAlign: 'center',
    transition: `background ${animation.easeMedium}`,
    width: '41px',

    hover: {
      border: border.thinSecondary,
      background: colors.hoverBackground,
      color: colors.foreground
    },

    focus: {
      border: border.thinSecondary,
      background: colors.focusBackground,
      color: colors.foreground
    },

    active: {
      border: border.thinSecondary,
      background: colors.activeBackground,
      color: colors.foreground
    },

    primary: {
      color: colors.primary,
      border: border.thinPrimary,

      hover: {
        border: border.thinPrimary,
        background: colors.hoverBackground,
        color: colors.foreground
      },

      active: {
        border: border.thinPrimary,
        background: colors.activeBackground,
        color: colors.foreground
      },

      border: border.thinPrimary,
      background: colors.focusBackground,
      color: colors.foreground
    }
  }
}
