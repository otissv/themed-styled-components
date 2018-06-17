import React, { Component, Fragment } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { TabConsumer } from './Tabs'
import { ThemeConsumer } from '../ThemeContext'
import { button } from '../Button'
import { buttonGroup } from '../ButtonGroup'
import styled from 'styled-components'

const Button = button`
  ${styles('tabs.item')};
  ${sharedStyles('tabs.item')}; 
  ${props => props.styled};`

const ButtonGroup = buttonGroup`
  ${styles('tabs.list')};
  ${sharedStyles('tabs.list')};
  ${props => props.styled};`

const TabListStyled = styled.div`
  ${styles('tabs')};
  ${sharedStyles('tabs')};
  ${props => props.styled};
`

class TabList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    theme: PropTypes.object
  }

  static defaultProps = {
    items: []
  }

  handelOnWheel(event) {
    event.preventDefault()

    const tabList = event.currentTarget

    tabList.scrollLeft -=
      event.nativeEvent.wheelDelta || -event.nativeEvent.detail
  }

  getItems = context => {
    return this.props.items.map(item => (
      <TabConsumer key={item.uid}>
        {({ active, setActiveItem }) => (
          <Button onClick={setActiveItem} {...context} data-uid={item.uid}>
            {item.title}
          </Button>
        )}
      </TabConsumer>
    ))
  }

  render() {
    const { itemsProps } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme

          return (
            <TabListStyled className="Tab-list" theme={_theme} {...this.props}>
              <ButtonGroup
                theme={_theme}
                onWheel={this.handelOnWheel}
                buttonProps={itemsProps}
              >
                {context => <Fragment>{this.getItems(context)}</Fragment>}
              </ButtonGroup>
              {}
            </TabListStyled>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const tabList = styled(TabList)
