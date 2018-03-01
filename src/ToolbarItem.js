import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ToolbarItemStyled = styled.li`
  display: ${props => props.theme.toolbar.item.display};
  ${props => props.styledToolbarItem};
`;

export class ToolbarItem extends PureComponent {
  render() {
    return <ToolbarItemStyled className="Toolbar-item" {...this.props} />;
  }
}
