import React, { Component, Children } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'

const AccordionItemStyled = styled.li`
  ${styles('accordion.item')};
  ${sharedStyles('accordion.item')};
  ${props => props.styled};
`

class AccordionItem extends Component {
  render() {
    const { children, theme } = this.props
    return (
      <AccordionItemStyled className="Accordion-item" {...this.props}>
        {children({ theme })}
      </AccordionItemStyled>
    )
  }
}

export const accordionItem = styled(AccordionItem)
