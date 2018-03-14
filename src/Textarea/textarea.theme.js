export function textarea({ font, border, colors, spacing, widths }) {
  return {
    background: colors.background,
    border: border.thinSecondary,
    borderRadius: 0,
    color: colors.foreground,
    letterSpacing: font.letterSpacing,
    maxWidth: '100%',
    outline: 'none',
    padding: `${spacing.small} ${spacing.small} 0 ${spacing.small};`,
    verticalAlign: 'top',
    webkitAppearance: 'none',
    width: '100%',

    '&:hover': {
      backgroundColor: colors.secondary
    },
    '&:active': {
      backgroundColor: colors.secondary
    },
    '&:focus': {
      backgroundColor: colors.secondary
    },

    /* =============================================
    * Context
    * =========================================== */

    accent: {
      border: border.thinAccent,
      '&:hover': {
        backgroundColor: border.thinAccent2
      },
      '&:active': {
        backgroundColor: border.thinAccent2
      },
      '&:focus': {
        backgroundColor: border.thinAccent2
      }
    },
    danger: {
      border: border.thinDanger,
      '&:hover': {
        backgroundColor: border.thinDanger2
      },
      '&:active': {
        backgroundColor: border.thinDanger2
      },
      '&:focus': {
        backgroundColor: border.thinDanger2
      }
    },
    primary: {
      border: border.thinPrimary,
      '&:hover': {
        backgroundColor: border.thinPrimary2
      },
      '&:active': {
        backgroundColor: border.thinPrimary2
      },
      '&:focus': {
        backgroundColor: border.thinPrimary2
      }
    },
    success: {
      border: border.thinSuccess,
      '&:hover': {
        backgroundColor: border.thinSuccess2
      },
      '&:active': {
        backgroundColor: border.thinSuccess2
      },
      '&:focus': {
        backgroundColor: border.thinSuccess2
      }
    },
    warning: {
      border: border.thinWarning,
      '&:hover': {
        backgroundColor: border.thinWarning2
      },
      '&:active': {
        backgroundColor: border.thinWarning2
      },
      '&:focus': {
        backgroundColor: border.thinWarning2
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
