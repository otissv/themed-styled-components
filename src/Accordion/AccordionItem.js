import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionItemStyled = styled.ul`
  cursor: ${props => props.theme.accordion.item.cursor};
  cursor: ${props => props.theme.accordion.item.cursor};
  font-size: ${props => props.theme.accordion.item.fontSize};
  line-height: ${props => props.theme.accordion.item.lineHeight};
  margin: ${props => props.theme.accordion.item.margin};
  overflow: ${props => props.theme.accordion.item.overflow};
  padding: ${props => props.theme.accordion.item.padding};

  ${props => props.styledAccordionItem};
`;

export default class AccordionItem extends Component {
  render() {
    return <AccordionItemStyled className="Accordion-item" {...this.props} />;
  }
}
