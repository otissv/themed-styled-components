import kebabCase from 'lodash/fp/kebabCase'
import get from 'lodash/fp/get'

export function styles(style, prop) {
  return function(props) {
    if (!props.theme || (prop && !props[prop])) return ''

    const theme = props[prop]
      ? get(style)(props.theme)[props[prop]]
      : get(style)(props.theme)

    return makeStyles(theme, key => {
      if (typeof theme[key] === 'object') {
        // if (key.substr(0, 2) === '&:') return styles(`${style}.${key}`)
        return ''
      }

      return `${key[0] === '-' ? '-' : ''}${kebabCase(key)}: ${theme[key]};`
    })
  }
}

export function getThemedValue({ style, props, key, theme }) {
  const _theme = get(theme)(props.theme)
  const themeObj = props[key] ? _theme[props[key]] : _theme

  return get(style)(themeObj)
}

export function stateStyled({ key, props, theme }) {
  return `${key} {${Object.keys(props.theme[theme][key]).reduce(
    (previous, subKey) => {
      const style =
        (props.context ? props.context + '.' : '') + key + '.' + subKey
      return (
        previous +
        ' ' +
        kebabCase(subKey) +
        ': ' +
        getThemedValue({ style, props, theme }) +
        ';'
      )
    },
    ''
  )}}`
}

export function makeStyles(theme, fn) {
  return Object.keys(theme).reduce((previous, key) => {
    const style = fn(key)

    return `${previous} 
          ${style.split(':')[1] === ' [object Object];' ? '' : style};`
  }, ``)
}
