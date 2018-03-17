import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import { styles, sharedStyles } from '../utils/theme.util'
import { icon } from '../Icon'

const InputStyled = styled.input`
  ${styles('input')};
  ${styles('input', 'context')};
  ${styles('input', 'size')};
  ${styles('input.widths', 'widths')};
  ${styles('input.disabled', 'disabled', true)};
  ${props => {
    const { icon, size, theme, pos } = props
    return icon
      ? `padding-${pos || 'left'}: ${
          size ? theme.input[size].height : theme.input.icon.height
        }`
      : ''
  }};
  ${sharedStyles('input')};
  ${props => props.styled};
`

const Icon = icon`
  ${styles('input.icon')};
  ${props => `${props.pos === 'right' ? 'left: unset; right: 0;' : 'left: 0'}`}
  ${sharedStyles('input.icon')};
  ${props => props.styled};
`

const InputIcon = styled.div`
  ${styles('input.iconContainer')};
  ${props => props.styled};
`

class Input extends Component {
  render() {
    const { icon, iconProps, iconContainerProps, pos } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme
          return icon ? (
            <InputIcon
              className="InputIconContainer"
              theme={_theme}
              {...iconContainerProps}
            >
              <Icon
                className="InputIcon"
                theme={_theme}
                icon={icon}
                pos={pos}
                {...iconProps}
              />
              <InputStyled className="Input" theme={_theme} {...this.props} />
            </InputIcon>
          ) : (
            <InputStyled className="Input" theme={_theme} {...this.props} />
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const input = styled(Input)
