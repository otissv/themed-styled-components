import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionContentStyled = styled.div`
  display: ${props => (props.opened ? 'block' : 'none')};
  ${props => props.styledAccordionContent};
`;

export class AccordionContent extends Component {
  render() {
    return (
      <AccordionContentStyled className="Accordion-content" {...this.props} />
    );
  }
}
