import React, { Component } from 'react';
import styled from 'styled-components';

const ListItemStyled = styled.li`
  list-style: ${props => props.theme.list.item.listStyleType};
  ${props => props.styledListItem};
`;

export class ListItem extends Component {
  render() {
    return <ListItemStyled className="List-item" {...this.props} />;
  }
}
