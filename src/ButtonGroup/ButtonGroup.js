import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../Theme/index'
import styled from 'styled-components'

const ButtonGroupStyled = styled.div`
  ${styles('buttonGroup')};
  ${styles('buttonGroup.stretch', 'stretch', true)};
  ${sharedStyles('buttonGroup')};
  ${props => props.styled};
`

class ButtonGroup extends Component {
  static propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.func.isRequired,
    stretch: PropTypes.bool,
    theme: PropTypes.object
  }

  render() {
    const { buttonProps, children, stretch, theme } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <ButtonGroupStyled theme={theme} {...this.props}>
            {children({
              theme: theme || this.props.theme,
              stretch: true,
              ...buttonProps
            })}
          </ButtonGroupStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const buttonGroup = styled(ButtonGroup)
