import React, { Component } from 'react'
import styled from 'styled-components'
import Isvg from 'react-inlinesvg'
import { styles } from '../utils/theme.util'

const SvgStyled = styled(Isvg)`
  ${styles('svg')};
  ${styles('svg', 'context')};

  ${props => props.styled};
`

class Svg extends Component {
  render() {
    return <SvgStyled {...this.props} />
  }
}

export const svg = styled(Svg)
