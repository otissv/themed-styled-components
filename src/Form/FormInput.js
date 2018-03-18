import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'
import { formRow } from './FormRow'
import { formLabel } from './FormLabel'
import { formError } from './FormError'
import { input } from '../Input'
import { select } from '../Select'
import { checkbox } from '../Checkbox'

const FormRow = formRow``
const FormLabel = formLabel``
const FormError = formError``
const Input = input``
const Select = select``
const Checkbox = checkbox``

export class FormInput extends Component {
  getInputType = () => {
    const {
      aligned,
      defaults,
      hasErrors,
      input,
      name,
      onBlur,
      onChange,
      onFocus,
      options,
      placeholder,
      presence,
      styledInput,
      type,
      value
    } = this.props

    const fieldProps = {
      aligned: aligned,
      context: hasErrors ? 'error' : null,
      name: name,
      onBlur,
      onChange,
      onFocus,
      options,
      placeholder: placeholder,
      presence,
      styledInput: styledInput,
      type: type || defaults.type,
      value: value,
      ...input
    }

    //TODO: Maybe change to dynamic imports?
    const types = {
      checkbox: <Checkbox {...fieldProps} />,
      input: <Input {...fieldProps} />,
      select: <Select {...fieldProps} />
    }

    return types[fieldProps.type] || types['input']
  }

  render() {
    const {
      aligned,
      defaults,
      errorProps,
      formRowProps,
      hasErrors,
      help,
      labelProps,
      name,
      placeholder,
      presence
    } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          return (
            <FormRow theme={theme} {...formRowProps}>
              <FormLabel
                presence={presence}
                aligned={aligned}
                htmlFor={name}
                theme={theme}
                {...labelProps}
              />
              {this.getInputType()}
              {hasErrors ? (
                <FormError aligned={aligned} theme={theme} {...errorProps} />
              ) : null}
            </FormRow>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const formInput = styled(FormInput)
