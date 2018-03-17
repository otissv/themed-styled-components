import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeConsumer } from '../ThemeContext'
import { styles, sharedStyles } from '../utils/theme.util'
import { AccordionConsumer } from './index'
import { AccordionItemConsumer } from './AccordionItem'

const AccordionContentStyled = styled.div`
  ${styles('accordion.content')};
  ${sharedStyles('accordion.content')};
  ${props => props.styled};
`

class AccordionContent extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    theme: PropTypes.object
  }

  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <AccordionConsumer>
            {({ active }) => (
              <AccordionItemConsumer>
                {({ uid }) => (
                  <AccordionContentStyled
                    className="Accordion-content"
                    styled={active === uid ? 'display:block;' : ''}
                    theme={theme}
                    {...this.props}
                  />
                )}
              </AccordionItemConsumer>
            )}
          </AccordionConsumer>
        )}
      </ThemeConsumer>
    )
  }
}

export const accordionContent = styled(AccordionContent)
