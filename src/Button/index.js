import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/fp/kebabCase'
import { stateStyled } from '../utils/stateStyled.util'
import { getThemedValue } from '../utils/getThemedValue.util'
import { makeStyles } from '../utils/makeStyles.util'

const ButtonStyled = styled.button`
  ${props => {
    const THEME = 'button'
    const theme = props.theme[THEME]

    return makeStyles(theme, key => {
      switch (key) {
        case 'backgroundColor':
          return `background-color: ${getThemedValue({
            style: 'backgroundColor',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'border':
          return `border: ${getThemedValue({
            style: 'border',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'color':
          return `color: ${getThemedValue({
            style: 'color',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'lineHeight':
          return `line-height: ${getThemedValue({
            style: 'lineHeight',
            props,
            key: 'size',
            theme: THEME
          })};`
        case 'padding':
          return `padding: ${getThemedValue({
            style: 'padding',
            props,
            key: 'size',
            theme: THEME
          })};`
        case 'stretch':
          return ` ${props.stretch ? 'width:' + getThemedValue({
                  style: 'stretch',
                  props: { ...props, stretch: null },
                  key: 'stretch',
                  theme: THEME
                }) : ''};`
        case '&:hover':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        case '&:active':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        case '&:focus':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        default:
          return `${kebabCase(key)}: ${theme[key]};`
      }
    })
  }};
`

export class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    context: PropTypes.oneOf(['accent', 'primary', 'danger', 'ghost']),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { value, children, theme } = this.props
    const child = typeof children === 'function' ? children(theme) : children

    return <ButtonStyled {...this.props}>{child}</ButtonStyled>
  }
}

export const button = styled(Button)
