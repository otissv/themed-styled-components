import React, { Component } from 'react'
import styled from 'styled-components'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'

const TabStyled = styled.div`
  ${props => props.styled};
`

const TabContext = React.createContext({ active: '' })

class Tabs extends Component {
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
    const { active, children, tabListProps, tabPanelProps, theme } = this.props

    return (
      <TabContext.Provider
        value={{
          ...this.state,
          setActiveItem: this.setActiveItem
        }}
      >
        <TabStyled className="Tabs" {...this.props}>
          {children({
            theme,
            tabListProps: { theme, ...tabListProps },
            tabPanelProps: { theme, ...tabPanelProps }
          })}
        </TabStyled>
      </TabContext.Provider>
    )
  }
}

export const tabs = styled(Tabs)
export const TabConsumer = TabContext.Consumer
