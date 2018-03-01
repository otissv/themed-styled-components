export function button({ animation, border, colors, depth, font, spacing }) {
  return {
    background: colors.background,
    border: border.thinInvert,
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
    hover: {
      border: border.thinSecondary,
      background: colors.secondary,
      color: colors.foreground
    },
    focus: {
      border: border.thinSecondary,
      background: colors.secondary,
      color: colors.foreground
    },
    active: {
      border: border.thinSecondary,
      background: colors.secondary,
      color: colors.foreground
    },
    primary: {
      color: colors.foregroundInvert,
      border: border.thinPrimary,
      background: colors.primary,
      hover: {
        border: border.thinPrimary,
        background: colors.secondary,
        color: colors.foregroundInvert
      },
      active: {
        border: border.thinPrimary,
        background: colors.secondary,
        color: colors.foreground
      },
      focus: {
        border: border.thinPrimary,
        background: colors.secondary,
        color: colors.foreground
      }
    },
    ghost: {
      border: border.thin,
      background: colors.background,
      border: border.thin,
      hover: {
        background: colors.secondary,
        color: colors.foreground
      },
      focus: {
        background: colors.secondary,
        color: colors.foreground
      },
      active: {
        background: colors.secondary,
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
  };
}
