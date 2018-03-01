export function select({ animation, border, colors, depth, font, spacing }) {
  return {
    position: 'relative',
    width: 'auto',
    maxWidth: '100%',
    size: {
      large: {
        height: '55px',
        padding: '0 12px',
        fontSize: font.large
      },
      small: {
        height: '30px',
        padding: '0 8px',
        fontSize: font.default
      }
    },
    widths: {
      xlarge: '500px',
      large: '300px',
      medium: '200px',
      small: '130px',
      xsmall: '40px'
    },
    context: {
      danger: {
        border: `${border.thinSize} ${border.thinStyle} ${colors.danger}`
      },
      primary: {
        border: `${border.thinSize} ${border.thinStyle} ${colors.primary}`
      },
      success: {
        border: `${border.thinSize} ${border.thinStyle} ${colors.success}`
      },
      disabled: {}
    },

    options: {
      position: 'absolute',
      width: 'auto',
      maxHeight: '200px',
      border: border.thin,
      borderTop: 'none',
      width: '100%',
      background: colors.background,
      boxShadow: depth.d1,
      left: 0,
      textAlign: 'left',

      item: {
        height: '30px',
        width: '100%',
        textAlign: 'left',
        padding: `0 ${spacing.small}`,
        background: 'none',
        color: colors.foreground,
        textTransform: 'none',
        hover: {
          background: colors.secondary,
          color: colors.foreground
        }
      }
    },
    icon: {
      position: 'absolute',
      top: '1px',
      padding: spacing.xsmall,
      height: '25px',
      right: '1px',
      transition: `background ${animation.easeMedium}`,
      width: '27px',
      hover: {
        background: colors.secondary
      }
    }
  };
}
