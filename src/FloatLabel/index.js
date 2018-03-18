import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import { styles, sharedStyles } from '../utils/theme.util'
import { icon } from '../Icon'

const FloatLabelStyled = styled.div`
  ${styles('floatLabel')};
  ${sharedStyles('floatLabel')};
  ${props => props.styled};
`
const Label = styled.label`
  ${styles('floatLabel.label')};
  ${styles('floatLabel.label.floating', 'floating', true)};
  ${styles('floatLabel.label.active', 'floating', true)};
  ${sharedStyles('floatLabel.label')};
  ${props => props.styled};
`

const FloatContext = React.createContext({ active: '' })

class FloatLabel extends Component {
  state = {
    active: false,
    floating: false
  }

  componentDidMount() {
    if (this.input) {
      // !this.state.floating && this.setState({ floating: true })
    }
  }

  onBlur = event => {
    event.target.value.trim() === '' &&
      this.state.floating &&
      this.setState({ floating: false })
  }

  onFloatLabel = () => {
    !this.state.floating && this.setState({ floating: true })
  }

  onFocus = () => {
    !this.state.floating && this.setState({ floating: true })
  }

  render() {
    const { label, element } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme
          return (
            <FloatContext.Provider
              value={{
                ...this.state,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                styled: styles(`floatLabel.${element || 'input'}`)({ theme })
              }}
            >
              <FloatLabelStyled theme={_theme}>
                {this.props.children}
                <Label
                  onClick={this.onFloatLabel}
                  theme={_theme}
                  floating={this.state.floating}
                >
                  {label}
                </Label>
              </FloatLabelStyled>
            </FloatContext.Provider>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const floatLabel = styled(FloatLabel)
export const FloatConsumer = FloatContext.Consumer
