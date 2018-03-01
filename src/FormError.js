import React, { Component } from 'react'
import styled from 'styled-components'
// import { observeStore } from '../../../lib/store';

const FormErrorStyled = styled.p`
  color: ${props => props.theme.form.error.color};
  background: ${props => props.theme.form.error.background};
  padding: ${props => props.theme.form.error.padding};
  margin: ${props => props.theme.form.error.margin};
  width: ${props => props.theme.form.error.width};
  max-width: ${props =>
    props.theme.form.error.widths[props.widths] || props.theme.form.error.maxWidth};

  ${props => props.styledFormError};
`

// @observeStore
export class FormError extends Component {
  render() {
    return <FormErrorStyled {...this.props} />
  }
}
