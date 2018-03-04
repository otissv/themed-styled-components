export function input({ animation, border, colors, font }) {
  return {
    background: colors.background,
    border: border.thinTransparent,
    borderBottom: border.thin,
    borderRadius: 0,
    color: colors.foreground,
    display: 'inline-block',
    height: '30px',
    maxWidth: '100%',
    letterSpacing: font.letterSpacing,
    outline: 'none',
    overflow: 'visible',
    padding: '0 3px',
    transition: animation.easeInOutMedium,
    transitionProperty: 'color,background-color,border',
    verticalAlign: 'middle',
    webkitAppearance: 'none',
    width: '100%',
    fontSize: font.default,
    hover: {
      border: border.thin
    },
    active: {
      border: border.thin
    },
    focus: {
      border: border.thin
    },
    size: {
      large: {
        height: '55px',
        padding: '0 12px',
        fontSize: font.large
      },
      small: {
        height: '30px',
        padding: '0 8px',
        fontSize: font.default
      }
    },
    widths: {
      xlarge: '500px',
      large: '300px',
      medium: '200px',
      small: '130px',
      xsmall: '40px'
    },
    context: {
      error: {
        border: `${border.thinSize} ${border.thinStyle} ${colors.error}`
      },
      primary: {
        border: `${border.thinSize} ${border.thinStyle} ${colors.primary}`
      },
      success: {
        border: `${border.thinSize} ${border.thinStyle} ${colors.success}`
      },
      disabled: {}
    }
  };
}
