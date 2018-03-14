import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { icon } from '../Icon'

const CheckboxStyled = styled.input`
  ${styles('checkbox')};
  ${styles('checkbox', 'context')};
  ${styles('checkbox', 'size')};
  ${sharedStyles('checkbox')};
  ${props => props.styled};
`
//props.theme.checkbox['&:checked'].backgroundImage
const Label = styled.label`
  ${styles('checkbox.label')};
  ${styles('checkbox.label', 'context')};
  ${styles('checkbox.label', 'size')};
  ${sharedStyles('checkbox.label')};
  ${props => props.styled};
`

const Icon = icon`
  ${styles('checkbox.icon')};
  ${styles(`checkbox.icon`, 'size')}
  ${styles(`checkbox.icon`, 'context')}
  ${sharedStyles('checkbox.icon')};
  ${props => props.checked && styles('checkbox.icon.checked', props)}
  
  ${props => props.styled};
`

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: props.checked || false
    }
  }

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
    onChange: PropTypes.func,
    theme: PropTypes.object.isRequired
  }

  onChange = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const {
      checked,
      children,
      context,
      iconProps,
      labelProps,
      onChange,
      size,
      theme
    } = this.props

    return (
      <Label
        className="CheckboxLabel"
        context={context}
        size={size}
        theme={theme}
        checked={this.state.checked}
        {...labelProps}
      >
        <Icon
          className="CheckboxIcon"
          checked={this.state.checked}
          context={context}
          icon="check"
          size={size}
          theme={theme}
          {...iconProps}
        />
        <CheckboxStyled
          className="Checkbox"
          aria-checked={this.state.checked}
          onChange={this.onChange}
          value={this.state.checked}
          role="checkbox"
          type="checkbox"
          {...this.props}
          children={null}
        />
        {children}
      </Label>
    )
  }
}

export const checkbox = styled(Checkbox)
