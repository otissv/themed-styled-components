import React, { Component, Fragment } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { TabProvider } from './TabContext'
import { ThemeConsumer } from '../Theme'
import styled from 'styled-components'
import { tabList } from './TabList'
import { tabPanel } from './TabPanel'

const TabStyled = styled.div`
  ${styles('tabs')};
  ${sharedStyles('tabs')};
  ${props => props.styled};
`

const TabList = tabList``

const TabPanel = tabPanel``

const TabContext = React.createContext({ active: '' })

class Tabs extends Component {
  static defaultProps = {
    items: [],
  }

  static propTypes = {
    active: PropTypes.string,
    children: PropTypes.func,
    tabListProps: PropTypes.object,
    tabPanelProps: PropTypes.object,
    theme: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      active: props.active,
    }
  }

  getItems = () => {
    const { items, tabListProps, tabPanelProps, theme } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme

          return (
            <Fragment>
              <TabList theme={_theme} {...tabListProps} items={items} />
              {items.map(item => {
                let Component = item.component

                return (
                  <TabPanel
                    key={item.uid}
                    theme={_theme}
                    uid={item.uid}
                    {...tabPanelProps}
                  >
                    {context => <Component {...context} />}
                  </TabPanel>
                )
              })}
            </Fragment>
          )
        }}
      </ThemeConsumer>
    )
  }

  setActiveItem = event => {
    this.setState({ active: event.currentTarget.dataset.uid })
  }

  render() {
    const {
      active,
      children,
      items,
      tabListProps,
      tabPanelProps,
      theme,
    } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme
          return (
            <TabProvider
              value={{
                ...this.state,
                setActiveItem: this.setActiveItem,
              }}
            >
              <TabStyled className="Tabs" theme={_theme} {...this.props}>
                {items.length > 0
                  ? this.getItems()
                  : children({
                      theme,
                      tabListProps: { theme, ...tabListProps },
                      tabPanelProps: { theme, ...tabPanelProps },
                    })}
              </TabStyled>
            </TabProvider>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const tabs = styled(Tabs)
export const TabConsumer = TabContext.Consumer
