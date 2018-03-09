import React, { Component } from 'react'
import { ButtonSquared } from './ButtonSquared'
import { Svg } from './Svg'

export class IconButton extends React.Component {
  render() {
    const {
      onClick,
      src,
      styledButtonSquared,
      styledIconButton,
      styledSvg
    } = this.props
    return (
      <ButtonSquared
        className="Icon-Button"
        onClick={onClick}
        styledButtonSquared={styledIconButton || styledButtonSquared}
      >
        <Svg className="Icon-Button-svg" src={src} styledSvg={styledSvg} />
      </ButtonSquared>
    )
  }
}
