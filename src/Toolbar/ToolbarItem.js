import React, { Component } from 'react';
import styled from 'styled-components';

const ToolbarItemStyled = styled.li`
  display: ${props => props.theme.toolbar.item.display};
  ${props => props.styledToolbarItem};
`;

export class ToolbarItem extends Component {
  render() {
    return <ToolbarItemStyled className="Toolbar-item" {...this.props} />;
  }
}
