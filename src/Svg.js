import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Isvg from 'react-inlinesvg'

const SvgStyled = styled(Isvg)`
  fill: ${props => props.theme.svg.fill};
  height: ${props =>
    props.small ? props.theme.svg.small.height : props.theme.svg.height};
  width: ${props =>
    props.small ? props.theme.svg.small.width : props.theme.svg.width};
  display: ${props => props.theme.svg.display};

  &:hover {
    fill: ${props =>
      props.hover
        ? props.theme.svg.primary.hover.fill
        : props.theme.svg.hover.fill};
  }

  ${props => props.styledSvg};
`

export class Svg extends PureComponent {
  render() {
    return <SvgStyled className="Svg" {...this.props} />
  }
}
