export function error({ spacing }) {
  return {
    color: '#ffffff',
    background: '#b52323',
    margin: 0,
    padding: `${spacing.xsmall} ${spacing.small}`,
    width: '100%',
    maxWidth: '100%',
    widths: {
      xlarge: '500px',
      large: '300px',
      medium: '200px',
      small: '130px',
      xsmall: '40px'
    }
  }
}

export function form({ spacing }) {
  return {
    width: '100%',
    errorList: error({ spacing }),
    error: error({ spacing }),

    label: {
      display: 'block',
      margin: `${spacing.small} 0 0 0`,
      fontWeight: 400
    },

    row: {
      marginBottom: spacing.large
    }
  }
}
