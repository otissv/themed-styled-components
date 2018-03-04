import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ListStyled = styled.ul`
  flex: ${props => props.theme.list.flex};
  margin: ${props => props.theme.list.margin};
  padding: ${props => props.theme.list.padding};
  list-style-type: ${props => props.theme.list.listStyleType};

  ${props => props.styledList};
`;

export class List extends PureComponent {
  render() {
    return <ListStyled className="List" {...this.props} />;
  }
}
