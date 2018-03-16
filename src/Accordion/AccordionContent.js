import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { AccordionConsumer } from './index'
import { AccordionItemConsumer } from './AccordionItem'

const AccordionContentStyled = styled.div`
  ${styles('accordion.content')};
  ${sharedStyles('accordion.content')};
  ${props => props.styled};
`

class AccordionContent extends Component {
  render() {
    return (
      <AccordionConsumer>
        {({ active }) => (
          <AccordionItemConsumer>
            {({ uid }) => (
              <AccordionContentStyled
                className="Accordion-content"
                styled={active === uid ? 'display:block;' : ''}
                {...this.props}
              />
            )}
          </AccordionItemConsumer>
        )}
      </AccordionConsumer>
    )
  }
}

export const accordionContent = styled(AccordionContent)
