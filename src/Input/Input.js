import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../Theme/index'
import { icon } from '../Icon'
import styled from 'styled-components'

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

export class Input extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    context: PropTypes.string,
    widths: PropTypes.string,
    disabled: PropTypes.func,
    elementRef: PropTypes.func,
    theme: PropTypes.object,
    icon: PropTypes.string,
    iconProps: PropTypes.object,
    iconContainerProps: PropTypes.object,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    pos: PropTypes.string
  }

  getComponent = ({ theme }) => {
    const {
      setInnerRef,
      elementRef,
      icon,
      iconProps,
      iconContainerProps,
      onBlur,
      onFocus,
      pos
    } = this.props

    const _theme = this.props.theme || theme
    const InputComponent = () => (
      <InputStyled
        theme={_theme}
        {...this.props}
        className={`${this.props.className || ''} Input`}
      />
    )

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
        <InputComponent />
      </InputIcon>
    ) : (
      <InputComponent />
    )
  }
  render() {
    return (
      <ThemeConsumer>
        {theme => {
          return this.getComponent({ theme })
        }}
      </ThemeConsumer>
    )
  }
}

export const input = styled(Input)
