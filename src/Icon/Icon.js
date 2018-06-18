import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import Isvg from 'react-inlinesvg'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../Theme/index'
import styled from 'styled-components'

const IconStyled = styled(Isvg)`
  ${styles('icon')};
  ${styles('icon', 'context')};
  ${sharedStyles('icon')};
  ${props => props.styled};
`

class Icon extends Component {
  static propTypes = {
    src: PropTypes.string,
  }

  getIcon = () => {
    const { icon, src } = this.props
    return src ? src : require(`../icons/${icon}.svg`)
  }

  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <IconStyled theme={theme} {...this.props} src={this.getIcon()} />
        )}
      </ThemeConsumer>
    )
  }
}

export const icon = styled(Icon)
