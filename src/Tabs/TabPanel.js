import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { TabConsumer } from './index'

const TabPanelStyled = styled.div`
  ${styles('tabs.panel')};
  ${sharedStyles('tabs.panel')};
  ${props => props.styled};
`

class TabPanel extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    uid: PropTypes.string
  }

  getActiveStyle = ({ active, uid }) => {
    return active === uid ? 'display: block;' : 'display: none'
  }

  render() {
    const { children, theme, uid } = this.props

    console.log(uid, this.getActiveStyle({ active: '1', uid }))
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
