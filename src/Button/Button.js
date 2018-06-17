import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import styled from 'styled-components'

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
    theme: PropTypes.object
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <ButtonStyled theme={theme} {...this.props}>
            {children}
          </ButtonStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const button = styled(Button)
