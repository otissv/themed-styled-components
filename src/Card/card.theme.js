export function card({ animation, border, colors, depth, font, spacing }) {
  return {
    backgroundColor: colors.background,
    border: border.thinSecondary,
    color: colors.foreground,
    marginBottom: 0,
    width: '100%',
    maxWidth: '100%',
    boxShadow: depth.d2,
    padding: `${spacing.small} ${spacing.large}`,
    transition: `boxShadow ${animation.easeInOutFast}`,

    '&:hover': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
      boxShadow: depth.d3
    },
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
    accent: {
      backgroundColor: colors.accent,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.accent2,
        boxShadow: depth.d3
      },
      '&:active': {
        backgroundColor: colors.accent2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.accent2,
        boxShadow: depth.d3
      }
    },
    primary: {
      backgroundColor: colors.primary,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.primary2,
        boxShadow: depth.d3
      },
      '&:active': {
        backgroundColor: colors.primary2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.primary2,
        boxShadow: depth.d3
      }
    },
    secondary: {
      backgroundColor: colors.secondary,
      border: border.thinSecondary,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.foreground,
        color: colors.secondary,
        boxShadow: depth.d3
      },
      '&:active': {
        backgroundColor: colors.foreground,
        color: colors.secondary,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.foreground,
        color: colors.secondary,
        boxShadow: depth.d3
      }
    },
    danger: {
      backgroundColor: colors.danger,
      border: border.thinDanger,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.danger2,
        boxShadow: depth.d3
      },
      '&:active': {
        backgroundColor: colors.danger2,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.danger2,
        boxShadow: depth.d3
      }
    },
    ghost: {
      backgroundColor: colors.transparent,
      border: border.thinTransparent,
      '&:hover': {
        backgroundColor: colors.background,
        color: colors.foreground,
        boxShadow: depth.d3
      },
      '&:focus': {
        backgroundColor: colors.background,
        color: colors.foreground,
        boxShadow: depth.d3
      },
      '&:active': {
        backgroundColor: colors.background,
        color: colors.foreground,
        boxShadow: depth.d3
      }
    },
    small: {
      padding: spacing.small
    },
    large: {
      padding: spacing.xlarge
    },
    body: {
      padding: spacing.large
    },
    header: {
      image: {
        pos: 'flex-start'
      },
      borderBottom: border.thinSecondary,
      padding: `${spacing.small} ${spacing.large}`,
      small: {
        padding: spacing.small
      },
      large: {
        padding: spacing.xlarge
      }
    },
    body: {
      padding: ` 30px 30px`,
      small: {
        padding: spacing.small
      },
      large: {
        padding: spacing.xlarge
      }
    },
    meta: {
      fontSize: font.xsmall,
      color: colors.secondary
    },
    footer: {
      borderTop: border.thinSecondary,
      padding: `${spacing.small} ${spacing.large}`,
      small: {
        padding: spacing.small
      },
      large: {
        padding: spacing.xlarge
      }
    }
  }
}
