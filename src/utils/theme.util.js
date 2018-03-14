import kebabCase from 'lodash/fp/kebabCase'
import get from 'lodash/fp/get'

function createCssProperties({ key, theme }) {
  if (typeof theme[key] === 'object') {
    if (key.substr(0, 2) === '&:') {
      return `${key} {
        ${makeStyles(theme[key], createCssProperties)}
      }`
    } else {
      return ''
    }
  }

  return `${key[0] === '-' ? '-' : ''}${kebabCase(key)}: ${theme[key]};`
}

export function styles(style, prop, value) {
  return function(props) {
    if (!props.theme || (prop && !props[prop])) return ''
    const theme = props[prop]
      ? value && props[prop] === value
        ? get(style)(props.theme)
        : get(style)(props.theme)[props[prop]]
      : get(style)(props.theme)

    return makeStyles(theme, createCssProperties)
  }
}

export function sharedStyles(style) {
  return function(props) {
    const shared = get(`${style}.shared`)(props.theme)

    if (shared) {
      return Object.keys(shared).reduce(
        (previous, key) => `${previous}
        ${styles(`${style}.shared.${key}`, key, true)(props)}
      `,
        ''
      )
    }
    return ''
  }
}

export function getThemedValue({ style, props, key, theme }) {
  const _theme = get(theme)(props.theme)
  const themeObj = props[key] ? _theme[props[key]] : _theme

  return get(style)(themeObj)
}

export function makeStyles(theme, fn) {
  return Object.keys(theme).reduce((previous, key) => {
    const style = fn({ key, theme })

    return `${previous} 
          ${style.split(':')[1] === ' [object Object];' ? '' : style};`
  }, ``)
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
