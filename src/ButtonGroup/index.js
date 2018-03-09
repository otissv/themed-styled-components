import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles } from '../utils/theme.util'

const ButtonGroupStyled = styled.div`
  ${styles('buttonGroup')};
  ${styles('buttonGroup.stretch')};

  ${props => props.styled};
`

class ButtonGroup extends Component {
  static propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.func.isRequired,
    stretch: PropTypes.bool,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { buttonProps, children, stretch, theme } = this.props

    const child =
      typeof children === 'function'
        ? children({ theme, stretch: true, ...buttonProps })
        : children
    return <ButtonGroupStyled {...this.props}>{child}</ButtonGroupStyled>
  }
}

export const buttonGroup = styled(ButtonGroup)
