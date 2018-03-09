import React, { Component } from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  background: ${props => props.theme.nav.background};
  flex: ${props => props.theme.nav.flex};
  margin-bottom: ${props => props.theme.nav.marginBottom};
  max-height: ${props => props.theme.nav.maxHeight};
  transition: ${props => props.theme.nav.transition};
  z-index: ${props => props.theme.nav.zIndex};

  ${props => props.styledNav};
`;

export class Nav extends Component {
  render() {
    return <NavStyled className="Nav" {...this.props} />;
  }
}
