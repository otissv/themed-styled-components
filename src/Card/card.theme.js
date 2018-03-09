export function card({ animation, border, colors, depth, font, spacing }) {
  return {
    backgroundColor: colors.background,
    border: border.thinSecondary,
    boxShadow: depth.d2,
    color: colors.foreground,
    marginBottom: 0,
    maxWidth: '100%',
    padding: `${spacing.small} ${spacing.large}`,
    transition: animation.easeMedium(),
    width: '100%',

    '&:focus': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
      boxShadow: depth.d3
    },
    '&:active': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
      boxShadow: depth.d3
    },
    '&:hover': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
      boxShadow: depth.d3
    },

    /* =====================================
    * Context 
    * =================================== */

    accent: {
      backgroundColor: colors.accent,
      color: colors.foregroundInvert,

      '&:active': {
        backgroundColor: colors.accent2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.accent2,
        boxShadow: depth.d3
      },
      '&:hover': {
        backgroundColor: colors.accent2,
        boxShadow: depth.d3
      }
    },
    danger: {
      backgroundColor: colors.danger,
      border: border.thinDanger,
      color: colors.foregroundInvert,

      '&:active': {
        backgroundColor: colors.danger2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.danger2,
        boxShadow: depth.d3
      },
      '&:hover': {
        backgroundColor: colors.danger2,
        boxShadow: depth.d3
      }
    },
    ghost: {
      backgroundColor: colors.transparent,
      border: border.thinTransparent,
      '&:active': {
        backgroundColor: colors.background,
        color: colors.foreground,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.background,
        color: colors.foreground,
        boxShadow: depth.d3
      },
      '&:hover': {
        backgroundColor: colors.background,
        color: colors.foreground,
        boxShadow: depth.d3
      }
    },
    success: {
      backgroundColor: colors.success,
      color: colors.foregroundInvert,

      '&:active': {
        backgroundColor: colors.success2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.success2,
        boxShadow: depth.d3
      },
      '&:hover': {
        backgroundColor: colors.success2,
        boxShadow: depth.d3
      }
    },
    warning: {
      backgroundColor: colors.warning,
      color: colors.foregroundInvert,

      '&:active': {
        backgroundColor: colors.warning2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.warning2,
        boxShadow: depth.d3
      },
      '&:hover': {
        backgroundColor: colors.warning2,
        boxShadow: depth.d3
      }
    },

    /* =====================================
    * Collapse 
    * =================================== */
    collapse: {
      padding: 0
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      padding: spacing.xlarge
    },
    small: {
      padding: spacing.small
    },

    /* =====================================
    * Card Header 
    * =================================== */

    header: {
      borderBottom: border.thinSecondary,
      padding: `${spacing.small} ${spacing.large}`,
      transition: animation.easeMedium(),

      // image
      image: {
        pos: 'flex-start'
      },

      // Collapse
      collapse: {
        padding: 0
      },

      // Size
      large: {
        padding: spacing.xlarge
      },
      small: {
        padding: spacing.small
      }
    },

    /* =====================================
    * Card Body 
    * =================================== */

    body: {
      padding: spacing.large,
      transition: animation.easeMedium(),

      // Collapse
      collapse: {
        padding: 0
      },

      // Size
      large: {
        padding: spacing.xlarge
      },
      small: {
        padding: spacing.small
      }
    },

    /* =====================================
    * Card Meta 
    * =================================== */
    meta: {
      fontSize: font.xsmall,
      color: colors.secondary,
      transition: animation.easeMedium()
    },

    /* =====================================
    * Card Footer 
    * =================================== */

    footer: {
      borderTop: border.thinSecondary,
      padding: `${spacing.small} ${spacing.large}`,
      transition: animation.easeMedium(),

      // Collapse
      collapse: {
        padding: 0
      },

      // Size
      large: {
        padding: spacing.xlarge
      },
      small: {
        padding: spacing.small
      }
    }
  }
}
