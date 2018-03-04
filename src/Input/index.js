import React, { PureComponent } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  -webkit-appearance: ${props => props.theme.input.webkitAppearance};
  background: ${props => props.theme.input.background};
  border: ${props => props.theme.input.border};
  border-bottom: ${props =>
    props.context
      ? props.theme.input.context[props.context].border
      : props.theme.input.borderBottom};
  border-radius: ${props => props.theme.input.borderRadius};
  color: ${props => props.theme.input.color};
  display: ${props => props.theme.input.display};
  font-size: ${props => props.theme.input.fontSize};
  height: ${props => props.theme.input.height};
  letter-spacing: 1px;
  outline: ${props => props.theme.input.outline};
  overflow: ${props => props.theme.input.overflow};
  padding: ${props => props.theme.input.padding};
  transition-property: ${props => props.theme.input.transitionProperty};
  vertical-align: ${props => props.theme.input.verticalAlign};
  width: ${props => props.theme.input.width};
  max-width: ${props => props.theme.input.widths[props.widths] || props.theme.input.maxWidth};
  transition: ${props => props.theme.input.transition};
  text-align: ${props => props.aligned || ''};

  &:hover {
    border: ${props =>
      props.context
        ? props.theme.input.context[props.context].border
        : props.theme.input.hover.border};
  }

  &:active {
    border: ${props =>
      props.context
        ? props.theme.input.context[props.context].border
        : props.theme.input.hover.border};
  }

  &:focus {
    border: ${props =>
      props.context
        ? props.theme.input.context[props.context].border
        : props.theme.input.hover.border};
  }

  ${props => props.styledInput};
`;

function maybeModifier(initial) {
  return value => Boolean(initial && initial === value);
}

export class Input extends PureComponent {
  render() {
    const isContext = maybeModifier(this.props.context);

    return <InputStyled className="Input" {...this.props} />;
  }
}
