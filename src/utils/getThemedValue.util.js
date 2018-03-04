import get from 'lodash/fp/get'

export function getThemedValue({ style, props, key, theme }) {
  const _theme = get(theme)(props.theme)
  const themeObj = props[key] ? _theme[props[key]] : _theme

  return get(style)(themeObj)
}
