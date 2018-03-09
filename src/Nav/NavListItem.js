import React, { Component } from 'react';
import styled from 'styled-components';

const NavListItemStyled = styled.nav`${props => props.styledNavListItem};`;

export class NavListItem extends Component {
  render() {
    return <NavListItemStyled className="NavListItem" {...this.props} />;
  }
}
