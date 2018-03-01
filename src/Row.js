import React, { PureComponent } from 'react'
import styled from 'styled-components'

const RowStyled = styled.div`
  display: flex;
  margin: ${props => props.theme.row.margin};
  max-width: ${props => (props.container ? props.theme.row.container : '')};
  ${props => props.styledRow};
`

export class Row extends PureComponent {
  render() {
    return <RowStyled {...this.props}>{this.props.children}</RowStyled>
  }
}
