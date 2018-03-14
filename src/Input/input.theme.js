export function input({ animation, border, colors, font, widths }) {
  return {
    '-webkitAppearance': 'none',
    background: colors.background,
    border: border.thinTransparent,
    borderBottom: border.thinSecondary,
    borderRadius: 0,
    color: colors.foreground,
    display: 'inline-block',
    fontSize: font.default,
    height: '40px',
    letterSpacing: font.letterSpacing,
    maxWidth: '100%',
    outline: 'none',
    overflow: 'visible',
    padding: '0 3px',
    transition: animation.easeInOutMedium(),
    verticalAlign: 'middle',
    width: '100%',

    '&:active': {
      border: border.thinSecondary
    },
    '&:focus': {
      border: border.thinSecondary
    },
    '&:hover': {
      border: border.thinSecondary
    },

    /* =====================================
    * Context 
    * =================================== */
    accent: {
      borderBottom: border.thinAccent,
      color: colors.accent,
      '&:hover': {
        border: `${border.thinSize} ${border.style} ${colors.accent}`
      },
      '&:focus': {
        border: `${border.thinSize} ${border.style} ${colors.accent}`
      },
      '&:active': {
        border: `${border.thinSize} ${border.style} ${colors.accent}`
      }
    },
    blank: {
      color: colors.foreground,
      border: border.thinTransparent,
      '&:hover': {
        border: border.thinDashedSecondary
      },
      '&:focus': {
        border: border.thinDashedSecondary
      },
      '&:active': {
        border: border.thinDashedSecondary
      }
    },
    danger: {
      borderBottom: border.thinDanger,
      color: colors.danger,
      '&:active': {
        border: `${border.thinSize} ${border.style} ${colors.danger}`
      },
      '&:focus': {
        border: `${border.thinSize} ${border.style} ${colors.danger}`
      },
      '&:hover': {
        border: `${border.thinSize} ${border.style} ${colors.danger}`
      }
    },
    primary: {
      borderBottom: border.thinPrimary,
      color: colors.primary,
      '&:active': {
        border: `${border.thinSize} ${border.style} ${colors.primary}`
      },
      '&:focus': {
        border: `${border.thinSize} ${border.style} ${colors.primary}`
      },
      '&:hover': {
        border: `${border.thinSize} ${border.style} ${colors.primary}`
      }
    },
    success: {
      borderBottom: border.thinSuccess,
      color: colors.success,
      '&:active': {
        border: `${border.thinSize} ${border.style} ${colors.success}`
      },
      '&:focus': {
        border: `${border.thinSize} ${border.style} ${colors.success}`
      },
      '&:hover': {
        border: `${border.thinSize} ${border.style} ${colors.success}`
      }
    },
    warning: {
      borderBottom: border.thinWarning,
      color: colors.warning
    },

    /* =====================================
    * disabled 
    * =================================== */

    disabled: {
      color: colors.muted,
      background: colors.secondary,
      borderBottom: border.thinSecondary,
      '&:active': {
        borderBottom: border.thinSecondary
      },
      '&:focus': {
        border: border.thinTransparent,
        borderBottom: border.thinSecondary
      },
      '&:hover': {
        border: border.thinTransparent,
        borderBottom: border.thinSecondary
      }
    },

    /* =====================================
    * icon 
    * =================================== */

    iconContainer: {
      '-webkit-backface-visibility': 'hidden',
      display: 'inline-block',
      maxWidth: '100%',
      position: 'relative',
      verticalAlign: 'middle'
    },

    icon: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      alignItems: 'center',
      display: 'inline-flex',
      height: '40px',
      justifyContent: 'center',
      pointerEvents: 'none',
      width: '40px',

      // Size
      large: {
        height: '40px',
        width: '40px'
      },
      size: {
        height: '40px',
        width: '40px'
      }
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      height: '55px',
      padding: '0 12px',
      fontSize: font.large
    },
    small: {
      height: '30px',
      padding: '0 8px',
      fontSize: font.default
    },

    /* =====================================
    * Widths 
    * =================================== */

    widths: {
      large: { width: widths.large },
      medium: { width: widths.medium },
      small: { width: widths.small },
      xlarge: { width: widths.xlarge },
      xsmall: { width: widths.xsmall }
    }
  }
}
