import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { TabConsumer } from './TabContext'
import { ThemeConsumer } from '../Theme/index'
import styled from 'styled-components'

const TabPanelStyled = styled.section`
  ${styles('tabs.panel')};
  ${sharedStyles('tabs.panel')};
  ${props => props.styled};
`

class TabPanel extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    theme: PropTypes.object,
    uid: PropTypes.string,
  }

  getActiveStyle = ({ active, uid }) => {
    return active === uid ? 'display: block;' : 'display: none'
  }

  render() {
    const { children, uid } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme

          return (
            <TabConsumer>
              {({ active }) => (
                <TabPanelStyled
                  className="Tab-panel"
                  theme={_theme}
                  {...this.props}
                  styled={this.getActiveStyle({ active, uid })}
                >
                  {children({ theme: _theme })}
                </TabPanelStyled>
              )}
            </TabConsumer>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const tabPanel = styled(TabPanel)
