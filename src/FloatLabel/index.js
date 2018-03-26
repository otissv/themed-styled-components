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
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    context: PropTypes.string,
    disabled: PropTypes.func,
    elementRef: PropTypes.func,
    floating: PropTypes.bool,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onFloatLabel: PropTypes.func,
    onFocus: PropTypes.func,
    theme: PropTypes.object,
    widths: PropTypes.string
  }

  state = {
    active: false,
    floating: false
  }

  componentDidMount() {
    this.element.value && this.onFloatLabel()
  }

  onBlur = event => {
    event.target.value.trim() === '' &&
      this.state.floating === true &&
      this.setState({ floating: false })
  }

  onFloatLabel = () => {
    this.state.floating === false && this.setState({ floating: true })
    this.element.focus()
  }

  onFocus = () => {
    // this.state.floating === false && this.setState({ floating: true })
  }

  render() {
    const { label, element, onBlur, onFloatLabel, onFocus } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme
          return (
            <FloatContext.Provider
              value={{
                ...this.state,
                onBlur: onBlur || this.onBlur,
                onFocus: onFocus || this.onFocus,
                elementRef: element => (this.element = element),
                styled: styles(`floatLabel.${element || 'text'}`)({ theme })
              }}
            >
              <FloatLabelStyled theme={_theme}>
                {this.props.children}
                <Label
                  onClick={onFloatLabel || this.onFloatLabel}
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
