import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/fp/kebabCase'
import { stateStyled } from '../utils/stateStyled.util'
import { getThemedValue } from '../utils/getThemedValue.util'
import { makeStyles } from '../utils/makeStyles'

const CheckboxStyled = styled.input`
  ${props => {
    const THEME = 'checkbox'
    const theme = props.theme[THEME]

    return makeStyles(theme, key => {
      switch (key) {
        case 'backgroundColor':
          return `background-color: ${getThemedValue({
            style: 'backgroundColor',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'border':
          return `border: ${getThemedValue({
            style: 'border',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'color':
          return `color: ${getThemedValue({
            style: 'color',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'height':
          return `height: ${getThemedValue({
            style: 'height',
            props,
            key: 'size',
            theme: THEME
          })};`
        case 'width':
          return `width: ${getThemedValue({
            style: 'width',
            props,
            key: 'size',
            theme: THEME
          })};`

        case '&:hover':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        case '&:active':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        case '&:focus':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        default:
          return `${key[0] === '-' ? '-' : ''}${kebabCase(key)}: ${theme[key]};`
      }
    })
  }} &:checked, 
  &:indeterminate {
    background-color: ${props =>
      props.theme.checkbox['&:checked'].backgroundColor};
    color: ${props => props.theme.checkbox['&:checked'].color};
    background-image: url(${props =>
      props.theme.checkbox['&:checked'].backgroundImage});
  }

  ${props => props.styledButton};
`
// return `
// margin-bottom: ${props => props.theme.spacing.small}

const Label = styled.label`
  ${props => {
    const theme = props.theme.checkbox.label

    return makeStyles(theme, key => {
      switch (key) {
        case 'fontSize':
          return `font-size: ${getThemedValue({
            style: 'fontSize',
            props,
            key: 'size',
            theme: 'checkbox.label'
          })}`
        default:
          return `${key[0] === '-' ? '-' : ''}${kebabCase(key)}: ${theme[key]};`
      }
    })
  }}};
`

export class Checkbox extends PureComponent {
  static propTypes = {
    labelProps: PropTypes.object,
    children: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    context: PropTypes.oneOf(['primary', 'secondary', 'danger'])
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
