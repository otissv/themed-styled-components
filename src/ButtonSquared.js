import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ButtonSquaredStyled = styled.button`
  background: ${props => props.background || props.theme.buttonSquared.background};
  border: ${props => props.border || props.theme.buttonSquared.border};
  color: ${props => props.color || props.theme.buttonSquared.color};
  cursor: ${props => props.cursor || props.theme.buttonSquared.cursor};
  height: ${props => props.height || props.theme.buttonSquared.height};
  line-height: ${props => props.lineHeight || props.theme.buttonSquared.lineHeight};
  margin: ${props => props.margin || props.theme.buttonSquared.margin};
  outline: ${props => props.outline || props.theme.buttonSquared.outline};
  text-align: ${props => props.textAlign || props.theme.buttonSquared.textAlign};
  transition: ${props => props.transition || props.theme.buttonSquared};
  width: ${props => props.width || props.theme.buttonSquared.width};

  &:hover {
    border: ${props => props.hoverBorder || props.theme.buttonSquared.border};
    background: ${props => props.hoverBackground || props.theme.buttonSquared.hover.background};
    color: ${props => props.hoverColor || props.theme.buttonSquared.color};
  }

  &:active {
    border: ${props => props.activeBorder || props.theme.buttonSquared.border};
    background: ${props => props.activeBackground || props.theme.buttonSquared.active.background};
    color: ${props => props.activeColor || props.theme.buttonSquared.color};
  }

  &:focus {
    border: ${props => props.focusBorder || props.theme.buttonSquared.border};
    background: ${props => props.focusBackground || props.theme.buttonSquared.focus.background};
    color: ${props => props.focusColor || props.theme.buttonSquared.color};
  }

  ${props => props.styledButtonSquared};
`;

export class ButtonSquared extends PureComponent {
  render() {
    return <ButtonSquaredStyled className="Button-Circle" {...this.props} />;
  }
}
