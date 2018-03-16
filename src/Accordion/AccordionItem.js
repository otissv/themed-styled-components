import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
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
    theme: PropTypes.object.isRequired,
    uid: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid
    }
  }

  render() {
    const { children, theme } = this.props

    return (
      <AccordionItemContext.Provider value={this.state}>
        <AccordionItemStyled className="Accordion-item" {...this.props}>
          {children({ theme })}
        </AccordionItemStyled>
      </AccordionItemContext.Provider>
    )
  }
}

export const accordionItem = styled(AccordionItem)
export const AccordionItemConsumer = AccordionItemContext.Consumer
