import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { accordionItem } from './AccordionItem'
import { accordionButton } from './AccordionButton'
import { accordionContent } from './AccordionContent'

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
    children: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    buttonProps: PropTypes.object,
    contentProps: PropTypes.object,
    itemProps: PropTypes.object
  }

  getItems = () => {
    const { items, buttonProps, contentProps, itemProps, theme } = this.props

    return this.props.items.map(item => {
      return (
        <AccordionItem
          key={item.uid}
          theme={theme}
          uid={item.uid}
          {...itemProps}
        >
          {props => (
            <Fragment>
              <AccordionButton
                theme={theme}
                iconOpenPros={{ icon: 'chevron-right' }}
                iconClosePros={{ icon: 'chevron-down' }}
                {...buttonProps}
              >
                {item.title}
              </AccordionButton>
              <AccordionContent theme={theme} {...contentProps}>
                {item.content}
              </AccordionContent>
            </Fragment>
          )}
        </AccordionItem>
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
      <AccordionContext.Provider
        value={{
          ...this.state,
          setActiveItem: this.setActiveItem
        }}
      >
        <AccordionStyled className="Accordion" {...this.props}>
          {items.length > 0
            ? this.getItems()
            : children({
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
