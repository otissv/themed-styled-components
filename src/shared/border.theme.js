import upperFirst from 'lodash/fp/upperFirst'

export function border({ colors }) {
  return {
    none: 0,
    rounded: '3px',
    circle: '100%',

    // thick
    thick: `2px solid ${colors.foreground}`,
    thickInvert: `2px solid ${colors.background}`,
    thickSize: '2px',
    thickStyle: 'solid',
    thickTransparent: `1px solid rgba(0, 0, 0, 0);`,

    // thin
    thin: `1px solid ${colors.foreground}`,
    thinInvert: `1px solid ${colors.background}`,
    thinSize: '1px',
    thinStyle: 'solid',
    thinTransparent: `1px solid rgba(0, 0, 0, 0);`,

    ...Object.keys(colors).reduce((previous, key) => ({
      ...previous,
      [key]: colors[key],
      [`thick${upperFirst(key)}`]: `2px solid ${colors[key]}`,
      [`thin${upperFirst(key)}`]: `1px solid ${colors[key]}`
    }))
  }
}
