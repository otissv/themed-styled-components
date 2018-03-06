export function button({ animation, border, colors, depth, font, spacing }) {
  return {
    backgroundColor: colors.background,
    border: border.thinSecondary,
    boxSizing: 'border-box',
    boxShadow: 'none',
    color: colors.foreground,
    display: 'inline-block',
    fontSize: font.default,
    font: 'inherit',
    letterSpacing: font.letterSpacing,
    lineHeight: '2.7',
    margin: 0,
    overflow: 'visible',
    padding: `0 ${spacing.large}`,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',
    outline: 'none',
    cursor: 'pointer',
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
    small: {
      padding: '0 15px',
      lineHeight: '2'
    },
    large: {
      padding: '0 40px',
      lineHeight: '4'
    },
    stretch: '100%'
  }
}
