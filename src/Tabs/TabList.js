import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'

import { button } from '../Button'
import { buttonGroup } from '../ButtonGroup'
import { TabConsumer } from './index'

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
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    items: []
  }

  handelOnWheel(event) {
    event.preventDefault()

    const tabList = event.currentTarget

    console.log(tabList)
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
    const { itemsProps, theme } = this.props

    return (
      <TabListStyled className="Tab-list" {...this.props}>
        <ButtonGroup
          theme={theme}
          onWheel={this.handelOnWheel}
          buttonProps={itemsProps}
        >
          {context => <Fragment>{this.getItems(context)}</Fragment>}
        </ButtonGroup>
        {}
      </TabListStyled>
    )
  }
}

export const tabList = styled(TabList)
