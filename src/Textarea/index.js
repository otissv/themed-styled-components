import React, { PureComponent } from 'react';
import styled from 'styled-components';

const TextareaStyled = styled.textarea`
  background: ${props => props.theme.textarea.background};
  border: ${props => props.theme.textarea.border};
  -webkit-appearance: ${props => props.theme.textarea.webkitAppearance};
  border-radius: ${props => props.theme.textarea.borderRadius};
  box-sizing: ${props => props.theme.textarea.boxSizing};
  color: ${props => props.theme.textarea.color};
  font: ${props => props.theme.textarea.font};
  margin: ${props => props.theme.textarea.margin};
  max-width: ${props => props.theme.textarea.maxWidth};
  letter-spacing : ${props => props.theme.textarea.letterSpacing};
  outline: none;
  overflow: auto;${props => props.theme.textarea.overflow};
  padding: ${props => props.theme.textarea.padding};
  touch-action: ${props => props.theme.textarea.touchAction};
  vertical-align: ${props => props.theme.textarea.verticalAlign};
  width: ${props => props.widths || props.theme.textarea.width};

  &:hover {
    background: ${props => props.theme.textarea.hover.background};
    color: ${props => props.theme.textarea.hover.color};
  }
  &:active {
    background: ${props => props.theme.textarea.active.background};
    color: ${props => props.theme.textarea.active.color};
  }
  &:focus {
    background: ${props => props.theme.textarea.focus.background};
    color: ${props => props.theme.textarea.focus.color};
  }

  ${props => props.styledTextarea}
}
`;

function maybeModifier(initial) {
  return value => Boolean(initial && initial === value);
}

export class Textarea extends PureComponent {
  render() {
    const isContext = maybeModifier(this.props.context);
    const isWidth = maybeModifier(this.props.widths);
    let size;
    let widths;
    let context = {};

    const _theme = theme();

    // context
    if (isContext('error')) {
      context = _theme.input.context.error;
    }

    if (isContext('primary')) {
      context = _theme.input.context.primary;
    }

    if (isContext('success')) {
      context = _theme.input.context.success;
    }

    // Width
    if (isWidth('large')) {
      widths = _theme.input.widths.large;
    }

    if (isWidth('medium')) {
      widths = _theme.input.widths.medium;
    }

    if (isWidth('small')) {
      widths = _theme.input.widths.small;
    }

    if (isWidth('xsmall')) {
      widths = _theme.input.widths.xsmall;
    }

    return <TextareaStyled className="Textarea" {...this.props} size={size} context={context} />;
  }
}
