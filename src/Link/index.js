import React, { Component, Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles } from '../utils/theme.util'

const LinkStyled = styled.a`
  ${styles('link')};
  ${styles('link', 'context')};

  ${props => props.styled};
`

class Link extends React.Component {
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
    const { children, theme } = this.props
    return <LinkStyled theme={theme}>{children}</LinkStyled>
  }
}

export const link = styled(Link)
