import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Svg } from './Svg'
import closeIcon from './icons/iconscross.svg'

const CloseStyled = styled.button`
  float: ${props => props.theme.close.float};
  border: ${props => props.theme.close.border};
  background: ${props => props.theme.close.background};
  outline: ${props => props.theme.close.outline};

  ${props => props.styledClose};
`

export const CLose = props => {
  return (
    <CloseStyled className="Close" onClick={props.onClick}>
      <Svg
        className="Close-svg"
        hover={props.hover}
        src={closeIcon}
        styledIcon={props.styledIcon}
      />
    </CloseStyled>
  )
}
