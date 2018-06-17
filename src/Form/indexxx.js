import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import { isIgnoredField } from '../utils/isIgnoredField.util'
import styled from 'styled-components'
import validator from 'validator'

const FormStyled = styled.form`
  ${styles('form')};
  ${sharedStyles('form')};
`

const FormContext = React.createContext({ active: '' })

class Form extends Component {
  constructor(props) {
    super(props)

    if (props.model) {
      this.state = props.model.reduce(
        (previous, current) => ({
          ...previous,
          [current.name]: current
        }),
        {}
      )
    }
  }

  onBlur = event => {}

  onChange = event => {
    let p = this.props
    let x = event.target
    event.target.focus()
    // debugger

    console.log(event.target.value)
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value
      }
    })
  }

  onFocus = event => {
    // debugger
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  setError = errors => {}

  removeError = filedName => {}

  validation = () => {}

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const context = {
            ...this.state,
            theme,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onChange: this.onChange,
            onSubmit: this.onSubmit
          }

          return (
            <FormContext.Provider value={context}>
              <FormStyled
                theme={theme}
                onSubmit={this.onSubmit}
                {...this.props}
              >
                {this.props.children}
              </FormStyled>
            </FormContext.Provider>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const form = styled(Form)
export const FormConsumer = FormContext.Consumer
