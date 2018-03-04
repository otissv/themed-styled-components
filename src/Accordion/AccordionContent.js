import React, { PureComponent } from 'react';
import styled from 'styled-components';

const AccordionContentStyled = styled.div`
  display: ${props => (props.opened ? 'block' : 'none')};
  ${props => props.styledAccordionContent};
`;

export class AccordionContent extends PureComponent {
  render() {
    return (
      <AccordionContentStyled className="Accordion-content" {...this.props} />
    );
  }
}
