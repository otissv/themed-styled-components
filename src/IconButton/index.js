import React, { Component } from 'react'
import { ButtonSquared } from './ButtonSquared'
import { Icon } from './Icon'

export class IconButton extends React.Component {
  render() {
    const {
      onClick,
      src,
      styledButtonSquared,
      styledIconButton,
      styledIcon
    } = this.props
    return (
      <ButtonSquared
        className="Icon-Button"
        onClick={onClick}
        styledButtonSquared={styledIconButton || styledButtonSquared}
      >
        <Icon className="Icon-Button-icon" src={src} styledIcon={styledIcon} />
      </ButtonSquared>
    )
  }
}
