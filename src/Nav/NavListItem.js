import React, { PureComponent } from 'react';
import styled from 'styled-components';

const NavListItemStyled = styled.nav`${props => props.styledNavListItem};`;

export class NavListItem extends PureComponent {
  render() {
    return <NavListItemStyled className="NavListItem" {...this.props} />;
  }
}
