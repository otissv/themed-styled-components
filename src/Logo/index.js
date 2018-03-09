import React, { Component } from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  border-bottom: ${props => props.theme.logo.borderBottom};
  padding: ${props => props.theme.logo.padding};
  width: ${props => props.theme.logo.width};
`;

const LogoImg = styled.img`
  color: ${props => props.theme.logo.img.color};
  display: ${props => props.theme.logo.img.display};
  font-size: ${props => props.theme.logo.img.fontSize};
  height: ${props => props.theme.logo.img.height};
  text-decoration: ${props => props.theme.logo.img.textDecoration};
`;

export class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <LogoImg className="Logo" {...this.props} />
      </LogoContainer>
    );
  }
}
