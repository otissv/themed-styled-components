import React, { PureComponent } from 'react';
import styled from 'styled-components';

const NavListStyled = styled.nav`
  list-style: ${props => props.theme.nav.list.listStyle};
  margin: ${props => props.theme.nav.list.margin};
  padding: ${props => props.theme.nav.list.padding};

  ${props => props.styledNavList};
`;

export class NavList extends PureComponent {
  render() {
    return <NavListStyled className="NavList" {...this.props} />;
  }
}
