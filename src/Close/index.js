import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { icon } from '../Icon'

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
    theme: PropTypes.object.isRequired,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning'
    ])
  }

  render() {
    const { onClick, svgProps, theme, iconProps } = this.props
    return (
      <CloseStyled onClick={onClick} theme={theme}>
        <Icon icon="close" {...iconProps} theme={theme} />
      </CloseStyled>
    )
  }
}

export const close = styled(Close)
