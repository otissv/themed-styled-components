import React, { Component } from 'react'
import styled from 'styled-components'
import validator from 'validator'
import { isIgnoredField } from '../utils/isIgnoredField.util'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'
import { recursivelyMapCloneChildren } from '../utils/recursivelyMapCloneChildren.util'

const FormStyled = styled.form`
  ${styles('form')};
  ${sharedStyles('form')};
`

class Form extends Component {
  getInitialFieldValues = (children, pervious = {}) => {
    return React.Children.toArray(children).reduce((previousObj, child) => {
      const maybeProp = key => Boolean(child.props) && child.props[key]

      if (maybeProp('value')) {
        return {
          ...previousObj,
          [child.props.name]: child.props.value
        }
      }

      if (child.props && child.props.children) {
        return this.getInitialFieldValues(child.props.children, previousObj)
      }

      return previousObj
    }, pervious)
  }

  getValues = ({ name, forms, prefix }) => {
    const form = forms[name]
    const _prefix = prefix ? `${prefix}.` : ''
    return Object.keys(form).reduce((previous, key) => {
      const type = form[key].type
      const ignore = {
        key,
        items: ['touched', 'isSubmitting']
      }

      if (form[key].fields) {
        const values = this.getValues({
          name: 'fields',
          forms: form[key],
          prefix: key
        })

        return Object.keys(values).length === 0
          ? previous
          : {
              ...previous,
              [key]: values
            }
      } else if (
        isIgnoredField(ignore) ||
        !form[key].value ||
        form[key].value.trim() === ''
      ) {
        return previous
      } else if (!form[key].touched && form[key].name !== 'id') {
        return previous
      } else {
        return {
          ...previous,
          [key]:
            type === 'date'
              ? new Date(form[key].value).toISOString()
              : form[key].value
        }
      }
    }, {})
  }

  onBlur = event => {
    const { name, onBlur, store, store: { forms, setFormFields } } = this.props
    const target = event.target
    const value =
      target.value === 'on'
        ? false
        : target.value === true ? true : target.value

    const errors = this.validation({ form: forms[name], target: target.name })

    if (onBlur) {
      onBlur({ formName: name, field: target.name, value, errors })
    } else if (errors) {
      this.setError(errors)
    } else {
      this.removeError(target.name)
    }
  }

  onChange = event => {
    const {
      name,
      onChange,
      store,
      store: { forms, setFormFields }
    } = this.props
    const target = event.target
    const value =
      target.value === 'on'
        ? false
        : target.value === true ? true : target.value

    if (onChange) {
      onChange({ formName: name, field: target.name, value })
    } else {
      setFormFields({
        formName: name,
        fields: [{ name: target.name, set: { value, hasErrors: false } }]
      })
      if (!forms[name].touched) {
        setFormFields({
          formName: name,
          fields: [{ name: target.name, set: { touched: true } }]
        })
      }
    }
  }

  onFocus = event => {
    const { name, onFocus, store, store: { forms, setFormFields } } = this.props
    const target = event.target
    const value =
      target.value === 'on'
        ? false
        : target.value === true ? true : target.value
    onFocus && onFocus({ formName: name, field: target.name, value })
  }

  onSubmit = event => {
    event.preventDefault()
    const {
      name,
      onSubmit,
      store: { forms, removeForm, setFormFields }
    } = this.props
    const values = this.getValues({ name, forms })
    const errors = this.validation({ form: forms[name] })

    if (forms[name].touched && !errors) {
      setFormFields({
        formName: name,
        fields: [{ name: 'isSubmitting', set: { value: true } }]
      })
      onSubmit({ formName: name, values })
    } else {
      window.scrollTo(0, 0)
      this.setError(errors)
    }
  }

  setError = errors => {
    const { name, store: { setFormFields } } = this.props
    Object.keys(errors || {}).forEach(key =>
      setFormFields({
        formName: name,
        fields: [
          { name: key, set: { hasErrors: true, error: errors[key].error } }
          // { name: 'errors', set: { errors } }
        ]
      })
    )
  }

  removeError = filedName => {
    const { name, store: { setFormFields } } = this.props

    setFormFields({
      formName: name,
      fields: [{ name: filedName, set: { hasErrors: false } }]
    })
  }

  validation = ({ form, target, prefix }) => {
    const type = {
      email: value => validator.isEmail(value),
      date: value => validator.isISO8601(value)
    }
    const errors = Object.keys(form).reduce((previous, key) => {
      const field = form[key]
      const targetField = prefix ? `${prefix}.${field.name}` : field.name
      const keyField = prefix ? `${prefix}.${key}` : key

      // recursive call if nested fields
      if (field.fields) {
        const fields = this.validation({
          form: field.fields,
          prefix: key
        })

        return fields
          ? {
              ...previous,
              ...fields
            }
          : previous
      }

      if (target && target !== key) return previous

      if (!field.name) return previous

      // checks if value is required
      if (
        (field.presence && !field.value) ||
        (field.presence && field.value.trim() === '')
      ) {
        return {
          ...previous,
          [targetField]: {
            label: field.label,
            error: { message: `This field is required` }
          }
        }
      }

      if (!field.touched) return previous

      // builtin validation
      if (type[field.type] && field.value) {
        return type[field.type](field.value)
          ? {
              ...previous,
              [targetField]: {
                label: field.label,
                error: field.error
              }
            }
          : previous
      }

      // checks against custom validation
      if (field.validate) {
        return field.validate({ value: field.value, validator })
          ? previous
          : {
              ...previous,
              [targetField]: {
                label: field.label,
                error: field.error
              }
            }
      } else {
        return previous
      }
    }, {})

    if (Object.keys(errors).length === 0) {
      return null
    } else {
      const { name, store: { setFormFields } } = this.props

      setFormFields({
        formName: name,
        fields: [{ name: 'errors', set: errors }]
      })

      return errors
    }
  }

  renderChildren() {
    return recursivelyMapCloneChildren(this.props.children, child => {
      return child.props && child.props.name
        ? React.cloneElement(child, {
            onBlur: this.onBlur,
            onChange: this.onChange,
            onFocus: this.onFocus
          })
        : child
    })
  }

  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <FormStyled theme={theme} onSubmit={this.onSubmit} {...this.props}>
            {this.renderChildren()}
          </FormStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const form = styled(Form)
