import React, { Component } from 'react';
import styled from 'styled-components';

const TabItemLinkStyled = styled.a`
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

  ${props => props.styledTabItemLink};
`;

export class TabItemLink extends Component {
  render() {
    return (
      <TabItemLinkStyled className="Tab-item-link" {...this.props}>
        {this.props.children}
      </TabItemLinkStyled>
    );
  }
}
