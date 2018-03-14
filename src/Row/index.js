import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'

const RowStyled = styled.div`
  ${styles('row')};
  ${styles('row', 'context')};
  ${styles('row', 'container')};
  ${sharedStyles('row')};
  ${props => props.styled};
`

class Row extends Component {
  static propTypes = {
    container: PropTypes.string,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning'
    ]),
    margin: PropTypes.string,
    theme: PropTypes.object.isRequired
  }

  render() {
    return <RowStyled {...this.props}>{this.props.children}</RowStyled>
  }
}

export const row = styled(Row)
