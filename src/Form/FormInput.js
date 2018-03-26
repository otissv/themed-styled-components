import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'
import { input } from '../Input'
import { FormConsumer } from './index'

const Input = input``

export class FormInput extends Component {
  render() {
    const { name, elementRef } = this.props

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
                    value={form[name].value}
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
