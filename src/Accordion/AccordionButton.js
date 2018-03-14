import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { icon } from '../Icon'

const AccordionButtonStyled = styled.button`
  ${styles('accordion.button')};
  ${sharedStyles('accordion.button')};
  ${props => props.styled};
`

const Icon = icon`
  ${styles('accordion.button.icon')};
  ${sharedStyles('accordion.button.icon')};
  ${props => props.styled};
`

class AccordionButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
      // opend
    }
  }

  handleOnMouse = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const { children, iconProps, onClick, opened, theme } = this.props
    const activeIcon = opened ? 'chevron-down' : 'chevron-right'

    return (
      <AccordionButtonStyled
        className="Accordion-button"
        onClick={onClick}
        onMouseEnter={this.handleOnMouse}
        onMouseLeave={this.handleOnMouse}
        {...this.props}
      >
        {children}
        <Icon
          theme={theme}
          icon={activeIcon}
          styled={
            this.state.hover
              ? styles('accordion.button.icon.&:hover')(this.props)
              : ''
          }
          {...iconProps}
        />
      </AccordionButtonStyled>
    )
  }
}

export const accordionButton = styled(AccordionButton)
