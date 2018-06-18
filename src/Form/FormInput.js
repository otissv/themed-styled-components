import React, { Component, Fragment, forwardRef } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import { FormConsumer } from './index'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../Theme'
import { input } from '../Input'
import styled from 'styled-components'

const Input = input``

export class FormInput extends Component {
  state = {
    ref: null
  }

  constructor(props) {
    super(props)

    this.inputRef = null
  }

  // componentDidMount() {
  //   // console.log(this.state)
  //   // console.log(this.inputRef.current)
  //   debugger
  // }

  cont

  setInnerRef = ref => {
    this.inputRef = ref
  }

  render() {
    const { name } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          return (
            <FormConsumer>
              {form => {
                return (
                  <Input
                    theme={theme}
                    onBlur={form.onBlur}
                    onChange={form.onChange}
                    onFocus={form.onFocus}
                    value={form.model[name] && form.model[name].value}
                    {...this.props}
                  />
                )
              }}
            </FormConsumer>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const formInput = styled(FormInput)
