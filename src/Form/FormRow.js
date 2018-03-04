import React, { PureComponent } from 'react';
import styled from 'styled-components';

const FormRowStyled = styled.div`
  margin-bottom: ${props => props.theme.form.row.marginBottom};
  text-align: ${props => props.aligned || ''};
  ${props => props.styledFormRow};
`;

export class FormRow extends PureComponent {
  render() {
    return <FormRowStyled {...this.props} />;
  }
}
