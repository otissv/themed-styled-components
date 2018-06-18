import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme'
import { formRow } from './FormRow'
import { formLabel } from './FormLabel'
import { formError } from './FormError'
import { input } from '../Input'
import { select } from '../Select'
import { checkbox } from '../Checkbox'
import { FormConsumer } from './index'

const FormRow = formRow``
const FormLabel = formLabel``
const FormError = formError``
const Input = input``
const Select = select``
const Checkbox = checkbox``

export class FormInput extends Component {
  getInputType = ({ stateValue }) => {
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
      type
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
      value: stateValue,
      ...input
    }

    const types = {
      checkbox: () => <Checkbox {...fieldProps} />,
      input: () => <Input {...fieldProps} />,
      select: () => <Select {...fieldProps} />
    }

    return (
      (types[fieldProps.type] && types[fieldProps.type]()) || types['input']()
    )
  }

  render() {
    const {
      label,

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
            <FormConsumer>
              {form => {
                return (
                  <FormRow theme={theme} {...formRowProps}>
                    {() => (
                      <Fragment>
                        <FormLabel
                          presence={presence}
                          aligned={aligned}
                          htmlFor={name}
                          theme={theme}
                          label={label}
                          {...labelProps}
                        />
                        {this.getInputType({
                          stateValue: (form[name] && form[name].value) || ''
                        })}
                        {hasErrors ? (
                          <FormError
                            aligned={aligned}
                            theme={theme}
                            {...errorProps}
                          />
                        ) : null}
                      </Fragment>
                    )}
                  </FormRow>
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
