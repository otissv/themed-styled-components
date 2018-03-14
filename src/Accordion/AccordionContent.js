import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'

const AccordionContentStyled = styled.div`
  ${styles('accordion.content')};
  ${sharedStyles('accordion.content')};
  ${props => props.styled};
`

class AccordionContent extends Component {
  render() {
    return (
      <AccordionContentStyled className="Accordion-content" {...this.props} />
    )
  }
}

export const accordionContent = styled(AccordionContent)
