import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = props => <Link {...props} />;

const ListItemNavLinkStyled = styled(LinkWrapper)`
  color: ${props => props.theme.list.link.color};
  cursor: pointer;
  display: ${props => props.theme.list.link.display};
  font-size: ${props => props.theme.list.link.fontSize};
  line-height: ${props => props.theme.list.link.lineHeight};
  padding: ${props => props.theme.list.link.padding};
  position: relative;
  text-decoration: ${props => props.theme.list.link.textDecoration};
  transition: ${props => props.theme.list.link.transition};
  transition: background ease 0.2s;
  width: ${props => props.theme.list.link.width};
  background: ${props =>
    props['data-active']
      ? props.theme.list.link.active.background
      : props.theme.list.link.background};
  &:hover {
    background: ${props => props.theme.list.link.hover.background};
  }
`;

export class ListItemNavLink extends Component {
  render() {
    return (
      <ListItemNavLinkStyled className="List-item-nav-link" {...this.props} />
    );
  }
}
