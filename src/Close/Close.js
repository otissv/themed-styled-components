import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import { icon } from '../Icon'
import styled from 'styled-components'

const Icon = icon``

const CloseStyled = styled.button`
  ${styles('close')};
  ${styles('close', 'context')};
  ${styles('close', 'size')};
  ${sharedStyles('close')};
  ${props => props.styled};
`

class Close extends React.Component {
  static propTypes = {
    svgProps: PropTypes.object,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning'
    ])
  }

  render() {
    const { onClick, svgProps, iconProps } = this.props
    return (
      <ThemeConsumer>
        {theme => {
          const _theme = theme || this.props.theme

          return (
            <CloseStyled onClick={onClick} theme={theme}>
              <Icon icon="close" {...iconProps} theme={theme} />
            </CloseStyled>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const close = styled(Close)
