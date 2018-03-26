export function floatLabel({ animation, border, colors, font, widths }) {
  return {
    position: 'relative',
    minHeight: '43px',
    lineHeight: `${40 + parseInt(font.small, 10)}px`,
    transition: animation.easeMedium(),

    label: {
      position: 'absolute',
      top: '3px',
      left: 0,
      height: 'inherit',
      padding: '0 3px;',
      transition: animation.easeSlow(),

      floating: {
        lineHeight: 1,
        fontSize: font.small,
        pointerEvents: 'none'
      },

      active: {
        color: colors.active
      }
    },

    text: {
      height: 'auto',
      padding: '3px',

      '&:active': {
        borderTop: border.transparent,
        borderLeft: border.transparent,
        borderRight: border.transparent
      },
      '&:focus': {
        borderTop: border.transparent,
        borderLeft: border.transparent,
        borderRight: border.transparent
      },
      '&:hover': {
        borderTop: border.transparent,
        borderLeft: border.transparent,
        borderRight: border.transparent
      }
    },

    select: {
      paddingTop: font.small
    },

    textarea: {
      paddingTop: `${18 + 3}px`, // font size + textarea padding top
      backgroundColor: colors.background,
      '&:active': {
        backgroundColor: colors.background
      },
      '&:focus': {
        backgroundColor: colors.background
      },
      '&:hover': {
        backgroundColor: colors.background
      }
    }
  }
}
