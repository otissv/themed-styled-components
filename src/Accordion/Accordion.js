import React, { Component, Fragment } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import { accordionButton } from './AccordionButton'
import { accordionContent } from './AccordionContent'
import { accordionItem } from './AccordionItem'
import styled from 'styled-components'

const AccordionStyled = styled.ul`
  ${styles('accordion')};
  ${sharedStyles('accordion')};
  ${props => props.styled};
`

const AccordionItem = accordionItem``
const AccordionButton = accordionButton``
const AccordionContent = accordionContent``

const AccordionContext = React.createContext({ active: '' })

class Accordion extends Component {
  static defaultProps = {
    items: []
  }

  static propTypes = {
    active: PropTypes.string,
    buttonProps: PropTypes.object,
    children: PropTypes.func,
    contentProps: PropTypes.object,
    itemProps: PropTypes.object,
    theme: PropTypes.object
  }

  getItems = () => {
    const { items } = this.props

    return this.props.items.map(item => {
      return (
        <ThemeConsumer key={item.uid}>
          {theme => {
            const buttonProps = { theme, ...this.props }
            const contentProps = { theme, ...this.props }
            const itemProps = { theme, ...this.props }

            return (
              <AccordionItem theme={theme} uid={item.uid} {...itemProps}>
                {props => (
                  <Fragment>
                    <AccordionButton theme={theme} {...buttonProps}>
                      {item.title}
                    </AccordionButton>
                    <AccordionContent theme={theme} {...contentProps}>
                      {item.content}
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>
            )
          }}
        </ThemeConsumer>
      )
    })
  }

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
    const { active, children, items, theme } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme

          return (
            <AccordionContext.Provider
              value={{
                ...this.state,
                setActiveItem: this.setActiveItem
              }}
            >
              <AccordionStyled
                className="Accordion"
                theme={theme}
                {...this.props}
              >
                {items.length > 0
                  ? this.getItems()
                  : children({
                      setActiveItem: this.setActiveItem,
                      theme: _theme,
                      buttonProps: { theme: _theme },
                      contentProps: { theme: _theme },
                      itemProps: { theme: _theme }
                    })}
              </AccordionStyled>
            </AccordionContext.Provider>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const accordion = styled(Accordion)
export const AccordionConsumer = AccordionContext.Consumer
