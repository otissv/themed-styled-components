import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles } from '../utils/theme.util'

const ButtonStyled = styled.button`
  ${styles('button')};
  ${styles('button', 'context')};
  ${styles('button', 'size')};
  ${styles('button.stretch')};

  ${props => props.styled};
`

export class Button extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning',
      'ghost'
    ]),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { value, children, theme } = this.props
    const child = typeof children === 'function' ? children(theme) : children

    return <ButtonStyled {...this.props}>{child}</ButtonStyled>
  }
}

export const button = styled(Button)
