import React, { Component } from 'react';
import styled from 'styled-components';

const NavListStyled = styled.nav`
  list-style: ${props => props.theme.nav.list.listStyle};
  margin: ${props => props.theme.nav.list.margin};
  padding: ${props => props.theme.nav.list.padding};

  ${props => props.styledNavList};
`;

export class NavList extends Component {
  render() {
    return <NavListStyled className="NavList" {...this.props} />;
  }
}
