import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/fp/kebabCase'
import { stateStyled } from '../utils/stateStyled.util'
import { getThemedValue } from '../utils/getThemedValue.util'
import { makeStyles } from '../utils/makeStyles.util'

const ButtonGroupStyled = styled.div`
  ${props => {
    const THEME = 'buttonGroup'
    const theme = props.theme[THEME]

    return makeStyles(theme, key => {
      switch (key) {
        case 'display':
          return `display: ${props.stretch ? theme.stretch : theme[key]};`
        default:
          return `${kebabCase(key)}: ${theme[key]};`
      }
    })
  }};
`

export class ButtonGroup extends PureComponent {
  static propTypes = {
    buttonProps: PropTypes.object,
    children: PropTypes.func.isRequired,
    stretch: PropTypes.bool,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { buttonProps, children, stretch, theme } = this.props
    return (
      <ButtonGroupStyled {...this.props}>
        {children({ theme, stretch: true, ...buttonProps })}
      </ButtonGroupStyled>
    )
  }
}
