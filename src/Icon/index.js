import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Isvg from 'react-inlinesvg'
import { styles, sharedStyles } from '../utils/theme.util'

const IconStyled = styled(Isvg)`
  ${styles('icon')};
  ${styles('icon', 'context')};
  ${sharedStyles('icon')};
  ${props => props.styled};
`

class Icon extends Component {
  static propTypes = {
    src: PropTypes.string
  }

  getIcon = () => {
    const { icon, src } = this.props
    return src ? src : require(`../icons/${icon}.svg`)
  }

  render() {
    return <IconStyled {...this.props} src={this.getIcon()} />
  }
}

export const icon = styled(Icon)
