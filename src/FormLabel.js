import React, { Component } from 'react'
import styled from 'styled-components'
// import { observeStore } from '../../../lib/store';

const FormLabelStyled = styled.label`
  display: ${props => props.display || props.theme.form.label.display};
  margin: ${props => props.display || props.theme.form.label.margin};
  font-weight: ${props => props.display || props.theme.form.label.fontWeight};
  ${props => props.styledFormLabel};
  text-align: ${props => props.aligned || ''};

  ${props => props.styledFormLabel};
`

// @observeStore
export class FormLabel extends Component {
  render() {
    const { value, presence } = this.props

    return (
      <FormLabelStyled {...this.props}>
        {value} {presence && '*'}
      </FormLabelStyled>
    )
  }
}
