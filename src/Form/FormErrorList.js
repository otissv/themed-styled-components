import React, { Component } from 'react';
import styled from 'styled-components';

const FormErrorListStyled = styled.div`
  display: ${props => (props.errors ? 'block' : 'none')};
  color: ${props => props.theme.form.errorList.color};
  background: ${props => props.theme.form.errorList.background};
  padding: ${props => props.theme.form.errorList.padding};
  margin: ${props => props.theme.form.errorList.margin};
  width: ${props => props.theme.form.errorList.width};
  max-width: ${props =>
    props.theme.form.errorList.widths[props.widths] || props.theme.form.errorList.maxWidth};

  ${props => props.styledFormErrorList};
`;

export class FormErrorList extends Component {
  getErrors = () => {
    const { list, errors } = this.props;
    return list ? errors.message : 'Some fields are incorrect';
  };
  render() {
    return <FormErrorListStyled {...this.props}>{this.getErrors()}</FormErrorListStyled>;
  }
}
