import React, { Component } from 'react'
import styled from 'styled-components'
import { TabConsumer } from './index'

const TabPanelStyled = styled.div`
  ${props => props.styled};
`

class TabPanel extends Component {
  getActiveStyle = ({ active, uid }) => {
    console.log(active)
    return active === uid ? 'display: block;' : 'display: none'
  }

  render() {
    const { children, theme, uid } = this.props

    return (
      <TabConsumer>
        {({ active }) => (
          <TabPanelStyled
            className="Tab-panel"
            {...this.props}
            styled={this.getActiveStyle({ active, uid })}
          >
            {children({ theme })}
          </TabPanelStyled>
        )}
      </TabConsumer>
    )
  }
}

export const tabPanel = styled(TabPanel)
