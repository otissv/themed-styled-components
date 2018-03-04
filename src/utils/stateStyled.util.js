import kebabCase from 'lodash/fp/kebabCase'
import { getThemedValue } from './getThemedValue.util'

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
