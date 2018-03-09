import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = props => <Link {...props} />;

const NavLinkStyled = styled(LinkWrapper)`
  background: ${props =>
    props['data-active']
      ? props.theme.nav.link.active.background
      : props.theme.nav.link.background};

  box-sizing: ${props => props.theme.nav.link.boxSizing};
  color: ${props => props.theme.nav.link.color};
  cursor: ${props => props.theme.nav.link.cursor};
  display: ${props => props.theme.nav.link.display};
  font-size: ${props => props.theme.nav.link.fontSize};
  line-height: ${props => props.theme.nav.link.lineHeight};
  padding: ${props => props.theme.nav.link.padding};
  text-decoration: ${props => props.theme.nav.link.textDecoration};
  width: ${props => props.theme.nav.link.width};

  &:hover {
    background: ${props =>
      props['data-active']
        ? props.theme.nav.link.active.background
        : props.theme.nav.link.hover.background};
  }
`;

export class NavLink extends Component {
  render() {
    return <NavLinkStyled className="NavLink" {...this.props} />;
  }
}
