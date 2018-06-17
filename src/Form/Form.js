import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import { isIgnoredField } from '../utils/isIgnoredField.util'
import merge from 'lodash/fp/merge'
import styled from 'styled-components'
import validator from 'validator'

const FormStyled = styled.form`
  ${styles('form')};
  ${sharedStyles('form')};
`

const FormContext = React.createContext({ active: '' })

class Form extends Component {
  _model = {}

  constructor(props) {
    super(props)

    const model = props.model
      ? props.model.reduce(
          (previous, current) => ({
            ...previous,
            [current.name]: current
          }),
          {}
        )
      : {}

    this.state = {
      model
    }
  }

  onBlur = event => {}

  onChange = event => {
    let p = this.props
    let x = event.target
    event.target.focus()

    const model = {
      [event.target.name]: {
        value: event.target.value
      }
    }

    this.setState({
      model: merge(this.state.model)(model)
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
                {typeof children === 'function' ? children(context) : children}
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
