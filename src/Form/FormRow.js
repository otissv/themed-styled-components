import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

const FormRowStyled = styled.div`
  margin-bottom: ${props => props.theme.form.row.marginBottom};
  text-align: ${props => props.aligned || ''};
  ${props => props.styledFormRow};
`

class FormRow extends Component {
  render() {
    return (
      <ThemeConsumer>
        {theme => <FormRowStyled theme={theme} {...this.props} />}
      </ThemeConsumer>
    )
  }
}

export const formRow = styled(FormRow)
