import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

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
    theme: PropTypes.object.isRequired
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
