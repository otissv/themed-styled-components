import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import kebab from 'kebab-case'
import get from 'lodash/fp/get'

function getButtonContext(style, props) {
  const theme = props.context
    ? props.theme.button[props.context]
    : props.theme.button
  return get(style)(theme)
}

function getButtonSize(style, props) {
  const theme = props.size ? props.theme.button[props.size] : props.theme.button
  return get(style)(theme)
}

function getButtonStretch(style, props) {
  const theme = props.stretch
    ? props.theme.button[props.stretch]
    : props.theme.button
  return get(style)(theme)
}

function stateStyled({ key, props }) {
  return `&:${key} {${Object.keys(props.theme.button[key]).reduce(
    (previous, subKey) =>
      previous +
      ' ' +
      kebab(subKey) +
      ': ' +
      getButtonContext(key + '.' + subKey, props) +
      ';',
    ''
  )}}`
}

const ButtonStyled = styled.button`
  ${props => {
    const theme = props.theme.button

    function getStyle(key) {
      switch (key) {
        case 'background':
          return `background: ${getButtonContext('background', props)};`
        case 'border':
          return `border: ${getButtonContext('border', props)};`
        case 'color':
          return `color: ${getButtonContext('color', props)};`
        case 'cursor':
          return `cursor: ${theme.cursor};`
        case 'lineHeight':
          return `line-height: ${getButtonSize('lineHeight', props)};`
        case 'padding':
          return `padding: ${getButtonSize('padding', props)};`
        case 'stretch':
          return `width: ${props.stretch &&
            getButtonStretch('stretch', { ...props, stretch: null })};`
        case 'hover':
          return stateStyled({ key, props })
        case 'active':
          return stateStyled({ key, props })
        case 'focus':
          return stateStyled({ key, props })
        default:
          return `${kebab(key)}: ${theme[key]};`
      }
    }
    return Object.keys(theme).reduce(
      (previous, key) => `${previous} 
${getStyle(key)}`,
      ``
    )
  }} ${props => props.styledButton};
`

export class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    context: PropTypes.string,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { value, children } = this.props
    return (
      <ButtonStyled className="Button" {...this.props}>
        {value || children}
      </ButtonStyled>
    )
  }
}
