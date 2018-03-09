import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles } from '../utils/theme.util'

const CheckboxStyled = styled.input`
  ${styles('checkbox')};
  ${styles('checkbox', 'context')};
  ${styles('checkbox', 'size')};
  &:checked,
  &:indeterminate {
    background-color: ${props =>
      props.theme.checkbox['&:checked'].backgroundColor};
    color: ${props => props.theme.checkbox['&:checked'].color};
    background-image: url(${props =>
      props.theme.checkbox['&:checked'].backgroundImage});
  }

  ${props => props.styled};
`

const Label = styled.label`
  ${props => styles(props.theme.checkbox.label)};
  ${props =>
    props.context && styles(props.theme.checkbox.label[props.context])};
  ${props => props.size && styles(props.theme.checkbox.label[props.size])};

  ${props => props.styled};
`

class Checkbox extends Component {
  static propTypes = {
    labelProps: PropTypes.object,
    children: PropTypes.any,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning'
    ]),
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { checked, children, styledLabel, onChange, size, theme } = this.props

    return (
      <Label theme={theme} size={size} labelProps={styledLabel}>
        <CheckboxStyled
          type="checkbox"
          {...this.props}
          children={null}
          checked={checked}
          onChange={onChange}
        />
        {children}
      </Label>
    )
  }
}

export const checkbox = styled(Checkbox)
