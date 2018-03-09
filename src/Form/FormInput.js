import React, { Component } from 'react'
import styled from 'styled-components'
import { FormRow } from './FormRow'
import { FormLabel } from './FormLabel'
import { FormError } from './FormError'
import { Input } from '../Input'
import { Select } from '../Select'
import { Checkbox } from '../Checkbox'

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
      error,
      hasErrors,
      help,
      label,
      name,
      placeholder,
      presence,
      styledError,
      styledFormRow,
      styledLabel
    } = this.props

    return (
      <FormRow styledFormRow={styledFormRow}>
        <FormLabel
          presence={presence}
          aligned={aligned}
          styledLabel={styledLabel}
          htmlFor={name}
          {...label}
        />
        {this.getInputType()}
        {hasErrors ? (
          <FormError aligned={aligned} styledError={styledError} {...error}>
            {error.message}
          </FormError>
        ) : null}
      </FormRow>
    )
  }
}
