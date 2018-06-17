import merge from 'lodash/fp/merge'
import upperFirst from 'lodash/fp/upperFirst'

export function border(props) {
  const colors = props.colors
  const defaults = {
    none: 0,
    rounded: '3px',
    circle: '100%',
    style: 'solid',
    dash: 'dashed',

    // thick
    thick: `2px solid ${colors.foreground}`,
    thickInvert: `2px solid ${colors.background}`,
    thickDashed: `2px dashed ${colors.foreground}`,
    thickDashedInvert: `2px dashed ${colors.background}`,
    thickSize: '2px',
    thickTransparent: `1px solid rgba(0, 0, 0, 0);`,

    // thin
    thin: `1px solid ${colors.foreground}`,
    thinInvert: `1px solid ${colors.background}`,
    thinDashed: `1px dashed ${colors.foreground}`,
    thinDashedInvert: `1px dashed ${colors.background}`,
    thinSize: '1px',
    thinTransparent: `1px solid rgba(0, 0, 0, 0);`,

    ...Object.keys(colors).reduce((previous, key) => ({
      ...previous,
      [key]: colors[key],
      [`thick${upperFirst(key)}`]: `2px solid ${colors[key]}`,
      [`thin${upperFirst(key)}`]: `1px solid ${colors[key]}`,
      [`thickDashed${upperFirst(key)}`]: `2px dashed ${colors[key]}`,
      [`thinDashed${upperFirst(key)}`]: `1px dashed ${colors[key]}`
    }))
  }

  return merge(props.border)(defaults)
}
