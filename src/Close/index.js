import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { makeStyles } from '../utils/makeStyles'
import kebabCase from 'lodash/fp/kebabCase'
import { getThemedValue } from '../utils/getThemedValue.util'
import { Svg } from '../Svg'
import closeIcon from '../icons/web-application/close.svg'

const CloseStyled = styled.button`
  ${props => {
    const theme = props.theme.close
    console.log(theme)

    return makeStyles(theme, key => {
      switch (key) {
        default:
          return `${kebabCase(key)}: ${theme[key]};`
      }
    })
  }};
`

export class Close extends React.PureComponent {
  static propTypes = {
    svgProps: PropTypes.object,
    onClick: PropTypes.func,
    theme: PropTypes.object.isRequired,
    context: PropTypes.oneOf(['primary', 'secondary', 'danger'])
  }

  render() {
    const { onClick, svgProps, theme } = this.props
    return (
      <CloseStyled onClick={onClick} theme={theme}>
        <Svg src={closeIcon} {...svgProps} theme={theme} />
      </CloseStyled>
    )
  }
}
