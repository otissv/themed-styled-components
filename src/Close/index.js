import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles } from '../utils/theme.util'
import { svg } from '../Svg'
import closeIcon from '../icons/web-application/close.svg'

const Svg = svg``

const CloseStyled = styled.button`
  ${styles('close')};
  ${styles('close', 'context')};
  ${styles('close', 'size')};

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
    const { onClick, svgProps, theme } = this.props
    return (
      <CloseStyled onClick={onClick} theme={theme}>
        <Svg src={closeIcon} {...svgProps} theme={theme} />
      </CloseStyled>
    )
  }
}

export const close = styled(Close)
