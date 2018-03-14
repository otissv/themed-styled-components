import React, { Component } from 'react'
import autobind from 'class-autobind'
import styled from 'styled-components'
import { TabList } from './TabList'
import { TabItem } from './TabItem'
import { TabPanel } from './TabPanel'
import { TabItemNavLink } from './TabItemNavLink'
import Icon from '../Icon'

const TabContainer = styled.div`
  display: ${props => props.theme.tabs.display};
  flex-direction: ${props => props.theme.tabs.flexDirection};
  flex: ${props => props.theme.tabs.flex};
`

export class Tabs extends Component {
  constructor(props) {
    super(...arguments)
    autobind(this)
  }

  getTabItems() {
    const {
      active,
      items,
      dirty,
      handleOnCloseClick,
      styledTabItem
    } = this.props

    return Object.keys(items).map(key => {
      const history = items[key].isHistory
      const id = history ? 'history' : items[key].id.toString()
      const activeTab = active.toString()
      const tabName = history ? 'History' : items[key].name || 'Unnamed'
      const path = items[key].path || ''
      const icon = items[key].icon

      return (
        <TabItem
          key={id}
          active={id === activeTab}
          kitid={id}
          dirty={dirty}
          handleOnCloseClick={handleOnCloseClick}
          styledTabItem={styledTabItem}
        >
          <TabItemNavLink
            to={path}
            data-kitid={id}
            data-active={id === activeTab}
            data-route={path}
            onClick={this.handleOnChange}
          >
            {icon && <Icon small styledSvg="margin-right: 5px" src={icon} />}{' '}
            {tabName}
          </TabItemNavLink>
        </TabItem>
      )
    })
  }

  handleOnChange(event) {
    this.props.onChange({ ...event.target.dataset })
  }

  render() {
    const { active, items, styledTabPanel, styledTabList } = this.props
    const componentItem = items[active] || {}

    return (
      <TabContainer className="Tabs">
        <TabList styledTabList={styledTabList}>{this.getTabItems()}</TabList>
        <TabPanel styledTabPanel={styledTabPanel} item={componentItem} />
      </TabContainer>
    )
  }
}

//<Component {...component.props} {...componentItems} />
