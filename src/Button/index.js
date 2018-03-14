import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'

const ButtonStyled = styled.button`
  ${styles('button')};
  ${styles('button', 'context')};
  ${styles('button', 'size')};
  ${styles('button.stretch', 'stretch', true)};
  ${sharedStyles('button')};

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
    stretch: PropTypes.bool,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return <ButtonStyled {...this.props}>{children}</ButtonStyled>
  }
}

export const button = styled(Button)
