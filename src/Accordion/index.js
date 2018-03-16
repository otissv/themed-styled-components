import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'

const AccordionStyled = styled.ul`
  ${styles('accordion')};
  ${sharedStyles('accordion')};
  ${props => props.styled};
`

const AccordionContext = React.createContext({ active: '' })

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.active
    }
  }

  setActiveItem = event => {
    this.setState({ active: event.currentTarget.dataset.uid })
  }

  render() {
    const { active, children, theme } = this.props

    return (
      <AccordionContext.Provider
        value={{
          ...this.state,
          setActiveItem: this.setActiveItem
        }}
      >
        <AccordionStyled className="Accordion" {...this.props}>
          {children({
            setActiveItem: this.setActiveItem,
            theme,
            buttonProps: { theme },
            contentProps: { theme },
            itemProps: { theme }
          })}
        </AccordionStyled>
      </AccordionContext.Provider>
    )
  }
}

export const accordion = styled(Accordion)
export const AccordionConsumer = AccordionContext.Consumer
