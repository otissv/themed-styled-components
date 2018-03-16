export function button({ animation, border, colors, depth, font, spacing }) {
  return {
    backgroundColor: colors.background,
    border: border.thinSecondary,
    boxShadow: 'none',
    boxSizing: 'border-box',
    color: colors.foreground,
    cursor: 'pointer',
    display: 'inline-block',
    font: 'inherit',
    fontSize: font.default,
    letterSpacing: font.letterSpacing,
    lineHeight: '2.7',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    padding: `0 ${spacing.large}`,
    textAlign: 'center',
    textDecoration: 'none',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',

    '&:hover': {
      backgroundColor: colors.background,
      border: border.thinTertiary
    },
    '&:focus': {
      backgroundColor: colors.background,
      border: border.thinTertiary
    },
    '&:active': {
      backgroundColor: colors.background,
      border: border.thinTertiary
    },

    /* =====================================
    * Context 
    * =================================== */

    accent: {
      backgroundColor: colors.accent,
      border: border.thinAccent,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.accent2,
        border: border.thinAccent
      },
      '&:active': {
        backgroundColor: colors.accent2,
        border: border.thinAccent
      },
      '&:focus': {
        backgroundColor: colors.accent2,
        border: border.thinAccent
      }
    },
    danger: {
      backgroundColor: colors.danger,
      border: border.thinDanger,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.danger2,
        border: border.thinDanger
      },
      '&:active': {
        backgroundColor: colors.danger2,
        border: border.thinDanger
      },
      '&:focus': {
        backgroundColor: colors.danger2,
        border: border.thinDanger
      }
    },
    ghost: {
      backgroundColor: colors.transparent,
      border: border.thinTransparent,
      '&:hover': {
        backgroundColor: colors.background,
        border: border.thinSecondary,
        color: colors.foreground
      },
      '&:focus': {
        backgroundColor: colors.background,
        color: colors.foreground
      },
      '&:active': {
        backgroundColor: colors.background,
        color: colors.foreground
      }
    },
    primary: {
      backgroundColor: colors.primary,
      border: border.thinPrimary,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.primary2,
        border: border.thinPrimary
      },
      '&:active': {
        backgroundColor: colors.primary2,
        border: border.thinPrimary
      },
      '&:focus': {
        backgroundColor: colors.primary2,
        border: border.thinPrimary
      }
    },
    success: {
      backgroundColor: colors.success,
      border: border.thinSuccess,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.success2,
        border: border.thinSuccess
      },
      '&:active': {
        backgroundColor: colors.success2,
        border: border.thinSuccess
      },
      '&:focus': {
        backgroundColor: colors.success2,
        border: border.thinSuccess
      }
    },
    warning: {
      backgroundColor: colors.warning,
      border: border.thinWarning,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.warning2,
        border: border.thinWarning
      },
      '&:active': {
        backgroundColor: colors.warning2,
        border: border.thinWarning
      },
      '&:focus': {
        backgroundColor: colors.warning2,
        border: border.thinWarning
      }
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      padding: '0 40px',
      lineHeight: '4'
    },
    small: {
      padding: '0 15px',
      lineHeight: '2'
    },

    /* =====================================
    * Stretch 
    * =================================== */
    stretch: { width: '100%' }
  }
}
