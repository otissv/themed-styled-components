import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/fp/kebabCase'
import { getThemedValue } from '../utils/getThemedValue.util'
import { makeStyles } from '../utils/makeStyles'

const RowStyled = styled.div`
  display: flex;
  margin: ${props => props.theme.row.margin};
  max-width: ${props => (props.container ? props.theme.row.container : '')};
  ${props => props.styledRow};

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

export class Row extends PureComponent {
  static propTypes = {
    container: PropTypes.string,
    margin: PropTypes.string,
    theme: PropTypes.object.isRequired
  }

  render() {
    return <RowStyled {...this.props}>{this.props.children}</RowStyled>
  }
}
