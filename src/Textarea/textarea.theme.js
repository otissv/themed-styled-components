export function textarea({ font, border, colors, spacing, widths }) {
  return {
    background: colors.background,
    border: border.thinSecondary,
    borderRadius: 0,
    color: colors.foreground,
    letterSpacing: font.letterSpacing,
    maxWidth: '100%',
    outline: 'none',
    padding: '3px',
    verticalAlign: 'top',
    webkitAppearance: 'none',
    width: '100%',

    '&:hover': {
      border: border.thinSecondary
    },
    '&:active': {
      border: border.thinSecondary
    },
    '&:focus': {
      border: border.thinSecondary
    },

    /* =============================================
    * Context
    * =========================================== */

    accent: {
      border: border.thinAccent,
      '&:hover': {
        border: border.thinAccent2
      },
      '&:active': {
        border: border.thinAccent2
      },
      '&:focus': {
        border: border.thinAccent2
      }
    },
    danger: {
      border: border.thinDanger,
      '&:hover': {
        border: border.thinDanger2
      },
      '&:active': {
        border: border.thinDanger2
      },
      '&:focus': {
        border: border.thinDanger2
      }
    },
    primary: {
      border: border.thinPrimary,
      '&:hover': {
        border: border.thinPrimary2
      },
      '&:active': {
        border: border.thinPrimary2
      },
      '&:focus': {
        border: border.thinPrimary2
      }
    },
    success: {
      border: border.thinSuccess,
      '&:hover': {
        border: border.thinSuccess2
      },
      '&:active': {
        border: border.thinSuccess2
      },
      '&:focus': {
        border: border.thinSuccess2
      }
    },
    warning: {
      border: border.thinWarning,
      '&:hover': {
        border: border.thinWarning2
      },
      '&:active': {
        border: border.thinWarning2
      },
      '&:focus': {
        border: border.thinWarning2
      }
    },

    /* =============================================
    * Disabled
    * =========================================== */

    disabled: {
      color: colors.muted,
      backgroundColor: colors.secondary,
      border: border.thinSecondary,
      '&:hover': {
        backgroundColor: colors.secondary,
        border: border.thinSecondary
      },
      '&:active': {
        backgroundColor: colors.secondary,
        border: border.thinSecondary
      },
      '&:focus': {
        backgroundColor: colors.secondary,
        border: border.thinSecondary
      }
    },

    /* =============================================
    * Widths
    * =========================================== */
    widths: {
      large: { width: widths.large },
      medium: { width: widths.medium },
      small: { width: widths.small },
      xlarge: { width: widths.xlarge },
      xsmall: { width: widths.xsmall }
    }
  }
}
