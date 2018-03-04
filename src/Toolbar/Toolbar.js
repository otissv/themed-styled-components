import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ToolbarStyled = styled.ul`
  padding: ${props => props.theme.toolbar.padding};
  height: ${props => props.theme.toolbar.height};
  margin: ${props => props.theme.toolbar.margin};

  ${props => props.styledToolbar};
`;

export class Toolbar extends PureComponent {
  render() {
    return (
      <ToolbarStyled className="Toolbar" {...this.props}>
        {this.props.children}
      </ToolbarStyled>
    );
  }
}
