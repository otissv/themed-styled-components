export function select({ animation, border, colors, depth, font, spacing }) {
  return {
    input: {
      cursor: 'pointer'
    },

    option: {
      cursor: 'pointer',
      height: '40px',
      lineHeight: '40px',
      padding: '0 3px',

      '&:hover': {
        backgroundColor: colors.secondary
      },

      active: {
        backgroundColor: colors.active
      }
    },

    options: {
      border: border.thinSecondary,
      maxHeight: '160px'
    },

    autocomplete: { cursor: 'text' },

    multiselect: {}

    // position: 'relative',
    // width: 'auto',
    // maxWidth: '100%',
    // size: {
    //   large: {
    //     height: '55px',
    //     padding: '0 12px',
    //     fontSize: font.large
    //   },
    //   small: {
    //     height: '30px',
    //     padding: '0 8px',
    //     fontSize: font.default
    //   }
    // },
    // widths: {
    //   xlarge: '500px',
    //   large: '300px',
    //   medium: '200px',
    //   small: '130px',
    //   xsmall: '40px'
    // },
    // context: {
    //   error: {
    //     border: `${border.thinSize} ${border.style} ${colors.error}`
    //   },
    //   primary: {
    //     border: `${border.thinSize} ${border.style} ${colors.primary}`
    //   },
    //   success: {
    //     border: `${border.thinSize} ${border.style} ${colors.success}`
    //   },
    //   disabled: {}
    // },
    // options: {
    //   position: 'absolute',
    //   width: 'auto',
    //   maxHeight: '200px',
    //   border: border.thin,
    //   borderTop: 'none',
    //   width: '100%',
    //   background: colors.background,
    //   boxShadow: depth.d1,
    //   left: 0,
    //   textAlign: 'left',
    //   item: {
    //     height: '30px',
    //     width: '100%',
    //     textAlign: 'left',
    //     padding: `0 ${spacing.small}`,
    //     background: 'none',
    //     color: colors.foreground,
    //     textTransform: 'none',
    //     hover: {
    //       background: colors.secondary,
    //       color: colors.foreground
    //     }
    //   }
    // },
    // icon: {
    //   position: 'absolute',
    //   top: '1px',
    //   padding: spacing.xsmall,
    //   height: '25px',
    //   right: '1px',
    //   transition: `background ${animation.easeMedium}`,
    //   width: '27px',
    //   hover: {
    //     background: colors.secondary
    //   }
    // }
  }
}
