import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionStyled = styled.ul`
  flex: ${props => props.theme.accordion.flex};
  list-style-type: ${props => props.theme.accordion.listStyleType};
  margin: ${props => props.theme.accordion.margin};
  padding: ${props => props.theme.accordion.padding};

  ${props => props.styledAccordion};
`;

export class Accordion extends Component {
  render() {
    return <AccordionStyled className="Accordion" {...this.props} />;
  }
}
