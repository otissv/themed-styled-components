import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const LinkWrapper = props => <Link {...props} />

const TabItemNavLinkStyled = styled(LinkWrapper)`
  padding: ${props => props.theme.tabs.link.padding};
  display: ${props => props.theme.tabs.link.display};
  text-decoration: ${props => props.theme.tabs.link.textDecoration};
  font-size: ${props => props.theme.tabs.link.fontSize};
  letter-spacing: ${props => props.theme.tabs.link.letterSpacing};
  cursor: ${props => props.theme.tabs.link.cursor};
  transition: ${props => props.theme.tabs.link.transition};
  color: ${props => props.theme.tabs.link.color};
  height: ${props => props.theme.tabs.link.height};
  transition: ${props => props.theme.tabs.link.transition};

  background: ${props =>
    props['data-active']
      ? props.theme.tabs.link.active.background
      : props.theme.tabs.link.background};

  &:hover {
    background: ${props => props.theme.tabs.link.hover.background};
  }

  ${props => props.styledTabNavItemLink};
`

export class TabItemNavLink extends Component {
  render() {
    return (
      <TabItemNavLinkStyled className="Tab-item-link" {...this.props}>
        {this.props.children}
      </TabItemNavLinkStyled>
    )
  }
}
