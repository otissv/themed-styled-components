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
    transition: animation.easeMedium(),
    verticalAlign: 'middle',
    width: '100%',

    '&:active': {
      borderTop: border.thinSecondary,
      borderBottom: border.thinSecondary,
      borderLeft: border.thinSecondary,
      borderRight: border.thinSecondary
    },
    '&:focus': {
      borderTop: border.thinSecondary,
      borderBottom: border.thinSecondary,
      borderLeft: border.thinSecondary,
      borderRight: border.thinSecondary
    },
    '&:hover': {
      borderTop: border.thinSecondary,
      borderBottom: border.thinSecondary,
      borderLeft: border.thinSecondary,
      borderRight: border.thinSecondary
    },

    /* =====================================
    * Context 
    * =================================== */
    accent: {
      borderBottom: border.thinAccent,
      '&:hover': {
        borderTop: border.thinAccent,
        borderBottom: border.thinAccent,
        borderLeft: border.thinAccent,
        borderRight: border.thinAccent
      },
      '&:focus': {
        borderTop: border.thinAccent,
        borderBottom: border.thinAccent,
        borderLeft: border.thinAccent,
        borderRight: border.thinAccent
      },
      '&:active': {
        borderTop: border.thinAccent,
        borderBottom: border.thinAccent,
        borderLeft: border.thinAccent,
        borderRight: border.thinAccent
      }
    },
    blank: {
      border: border.thinTransparent,
      '&:hover': {
        borderTop: border.thinDashedSecondary,
        borderBottom: border.thinDashedSecondary,
        borderLeft: border.thinDashedSecondary,
        borderRight: border.thinDashedSecondary
      },
      '&:focus': {
        borderTop: border.thinDashedSecondary,
        borderBottom: border.thinDashedSecondary,
        borderLeft: border.thinDashedSecondary,
        borderRight: border.thinDashedSecondary
      },
      '&:active': {
        borderTop: border.thinDashedSecondary,
        borderBottom: border.thinDashedSecondary,
        borderLeft: border.thinDashedSecondary,
        borderRight: border.thinDashedSecondary
      }
    },
    danger: {
      borderBottom: border.thinDanger,
      '&:active': {
        borderTop: border.thinDanger,
        borderBottom: border.thinDanger,
        borderLeft: border.thinDanger,
        borderRight: border.thinDanger
      },
      '&:focus': {
        borderTop: border.thinDanger,
        borderBottom: border.thinDanger,
        borderLeft: border.thinDanger,
        borderRight: border.thinDanger
      },
      '&:hover': {
        borderTop: border.thinDanger,
        borderBottom: border.thinDanger,
        borderLeft: border.thinDanger,
        borderRight: border.thinDanger
      }
    },
    primary: {
      borderBottom: border.thinPrimary,
      '&:active': {
        borderTop: border.thinPrimary,
        borderBottom: border.thinPrimary,
        borderLeft: border.thinPrimary,
        borderRight: border.thinPrimary
      },
      '&:focus': {
        borderTop: border.thinPrimary,
        borderBottom: border.thinPrimary,
        borderLeft: border.thinPrimary,
        borderRight: border.thinPrimary
      },
      '&:hover': {
        borderTop: border.thinPrimary,
        borderBottom: border.thinPrimary,
        borderLeft: border.thinPrimary,
        borderRight: border.thinPrimary
      }
    },
    success: {
      borderBottom: border.thinSuccess,
      '&:active': {
        borderTop: border.thinSuccess,
        borderBottom: border.thinSuccess,
        borderLeft: border.thinSuccess,
        borderRight: border.thinSuccess
      },
      '&:focus': {
        borderTop: border.thinSuccess,
        borderBottom: border.thinSuccess,
        borderLeft: border.thinSuccess,
        borderRight: border.thinSuccess
      },
      '&:hover': {
        borderTop: border.thinSuccess,
        borderBottom: border.thinSuccess,
        borderLeft: border.thinSuccess,
        borderRight: border.thinSuccess
      }
    },
    warning: {
      borderBottom: border.thinWarning,
      '&:active': {
        borderTop: border.thinWarning,
        borderBottom: border.thinWarning,
        borderLeft: border.thinWarning,
        borderRight: border.thinWarning
      },
      '&:focus': {
        borderTop: border.thinWarning,
        borderBottom: border.thinWarning,
        borderLeft: border.thinWarning,
        borderRight: border.thinWarning
      },
      '&:hover': {
        borderTop: border.thinWarning,
        borderBottom: border.thinWarning,
        borderLeft: border.thinWarning,
        borderRight: border.thinWarning
      }
    },

    /* =====================================
    * disabled 
    * =================================== */

    disabled: {
      color: colors.muted,
      background: colors.secondary,
      borderBottom: border.thinSecondary,
      '&:active': {
        borderTop: border.thinTransparent,
        borderBottom: border.thinSecondary,
        borderLeft: border.thinTransparent,
        borderRight: border.thinTransparent
      },
      '&:focus': {
        borderTop: border.thinTransparent,
        borderBottom: border.thinSecondary,
        borderLeft: border.thinTransparent,
        borderRight: border.thinTransparent
      },
      '&:hover': {
        borderTop: border.thinTransparent,
        borderBottom: border.thinSecondary,
        borderLeft: border.thinTransparent,
        borderRight: border.thinTransparent
      }
    },

    /* =====================================
    * Float Label 
    * =================================== */

    floatlabel: {
      position: 'relative',
      height: '40px',
      lineHeight: '40px',
      transition: animation.easeMedium(),

      label: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0 3px;',
        transition: animation.easeMedium(),

        floating: {
          lineHeight: 1,
          top: font.default,
          transition: animation.easeMedium()
        }
      }
    },

    /* =====================================
    * icon 
    * =================================== */

    iconContainer: {
      '-webkit-backface-visibility': 'hidden',
      maxWidth: '100%',
      position: 'relative',
      verticalAlign: 'middle',
      transition: animation.easeMedium()
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
      transition: animation.easeMedium(),

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

    widths: {
      large: { width: widths.large },
      medium: { width: widths.medium },
      small: { width: widths.small },
      xlarge: { width: widths.xlarge },
      xsmall: { width: widths.xsmall }
    }
  }
}
