import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { button } from '../Button'
import { buttonGroup } from '../ButtonGroup'
import { TabConsumer } from './index'

const Button = button` ${props => props.styled};`

const ButtonGroup = buttonGroup`
 ${props => props.styled};`

const TabListStyled = styled.div`
  ${props => props.styled};
`

class TabList extends Component {
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
    const { itemsProps, theme } = this.props

    return (
      <TabListStyled
        className="Tab-list"
        {...this.props}
        onWheel={this.handelOnWheel}
      >
        <ButtonGroup theme={theme} buttonProps={itemsProps}>
          {context => <Fragment>{this.getItems(context)}</Fragment>}
        </ButtonGroup>
        {}
      </TabListStyled>
    )
  }
}

export const tabList = styled(TabList)
