import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ListItemStyled = styled.li`
  list-style: ${props => props.theme.list.item.listStyleType};
  ${props => props.styledListItem};
`;

export class ListItem extends PureComponent {
  render() {
    return <ListItemStyled className="List-item" {...this.props} />;
  }
}
