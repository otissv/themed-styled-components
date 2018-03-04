import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Isvg from 'react-inlinesvg'
import { makeStyles } from '../utils/makeStyles'
import kebabCase from 'lodash/fp/kebabCase'
import { getThemedValue } from '../utils/getThemedValue.util'

const SvgStyled = styled(Isvg)`
  ${props => {
    const THEME = 'svg'
    const theme = props.theme[THEME]

    return makeStyles(theme, key => {
      switch (key) {
        case 'height':
          return `height: ${getThemedValue({
            style: 'height',
            props,
            key: 'size',
            theme: THEME
          })};`
        case 'width':
          return `width: ${getThemedValue({
            style: 'width',
            props,
            key: 'size',
            theme: THEME
          })};`
        case '&:hover':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        case '&:active':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        case '&:focus':
          return stateStyled({
            key,
            props,
            theme: THEME
          })
        default:
          return `${key[0] === '-' ? '-' : ''}${kebabCase(key)}: ${theme[key]};`
      }
    })
  }}};
`

export class Svg extends PureComponent {
  render() {
    return <SvgStyled {...this.props} />
  }
}
