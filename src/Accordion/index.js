import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'

const AccordionStyled = styled.ul`
  ${styles('accordion')};
  ${sharedStyles('accordion')};
  ${props => props.styled};
`

class Accordion extends Component {
  render() {
    const { children, theme } = this.props

    return (
      <AccordionStyled className="Accordion" {...this.props}>
        {children({
          theme,
          buttonProps: { theme },
          contentProps: { theme },
          itemProps: { theme }
        })}
      </AccordionStyled>
    )
  }
}

export const accordion = styled(Accordion)
