import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { AccordionConsumer } from './index'

const AccordionItemContext = React.createContext({ uid: '' })

const AccordionItemStyled = styled.li`
  ${styles('accordion.item')};
  ${sharedStyles('accordion.item')};
  ${props => props.styled};
`

class AccordionItem extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    theme: PropTypes.object,
    uid: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid
    }
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <AccordionItemContext.Provider value={this.state}>
            <AccordionItemStyled
              className="Accordion-item"
              theme={theme}
              {...this.props}
            >
              {children({ theme: this.props.theme || theme })}
            </AccordionItemStyled>
          </AccordionItemContext.Provider>
        )}
      </ThemeConsumer>
    )
  }
}

export const accordionItem = styled(AccordionItem)
export const AccordionItemConsumer = AccordionItemContext.Consumer
