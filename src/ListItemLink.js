import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ListItemLinkStyled = styled.a`
  color: ${props => props.theme.list.link.color};
  cursor: pointer;
  display: ${props => props.theme.list.link.display};
  font-size: ${props => props.theme.list.link.fontSize};
  padding: ${props => props.theme.list.link.padding};
  position: relative;
  text-decoration: ${props => props.theme.list.link.textDecoration};
  transition: ${props => props.theme.list.link.transition};
  transition: background ease 0.2s;
  width: ${props => props.theme.list.link.width};
  background: ${props =>
    props.active
      ? props.theme.list.link.active.background
      : props.theme.list.link.background};
  &:hover {
    background: ${props => props.theme.list.link.hover.background};
  }
  ${props => props.styledListItemLink};
`;

export class ListItemLink extends PureComponent {
  render() {
    return <ListItemLinkStyled className="List-item-link" {...this.props} />;
  }
}
