import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import { AccordionConsumer } from './Accordion'
import { AccordionItemConsumer } from './AccordionItem'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../Theme/index'
import { icon } from '../Icon'
import styled from 'styled-components'

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
  static propTypes = {
    children: PropTypes.any.isRequired,
    theme: PropTypes.object,
    title: PropTypes.string,
    toggleProps: PropTypes.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      // opend
    }
  }

  handleOnMouse = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const { children, theme, title, toggleProps } = this.props

    const _toggleProps = toggleProps || {
      opened: { icon: 'chevron-down' },
      closed: { icon: 'chevron-right' },
    }
    return (
      <ThemeConsumer>
        {theme => (
          <AccordionConsumer>
            {({ active, setActiveItem }) => (
              <AccordionItemConsumer>
                {({ uid }) => {
                  const iconProps =
                    active === uid ? _toggleProps.opened : _toggleProps.closed
                  return (
                    <AccordionButtonStyled
                      className="Accordion-button"
                      onClick={setActiveItem}
                      data-uid={uid}
                      onMouseEnter={this.handleOnMouse}
                      onMouseLeave={this.handleOnMouse}
                      theme={theme}
                      {...this.props}
                    >
                      {title || children}
                      <Icon
                        theme={this.props.theme || theme}
                        onClick={setActiveItem}
                        styled={
                          this.state.hover
                            ? styles('accordion.button.icon.&:hover')(
                                this.props
                              )
                            : ''
                        }
                        {...iconProps}
                      />
                    </AccordionButtonStyled>
                  )
                }}
              </AccordionItemConsumer>
            )}
          </AccordionConsumer>
        )}
      </ThemeConsumer>
    )
  }
}

export const accordionButton = styled(AccordionButton)
