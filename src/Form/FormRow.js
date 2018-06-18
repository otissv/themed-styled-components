import React, { Component, Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme'
import { FormConsumer } from './index'

const FormRowStyled = styled.div`
  margin-bottom: ${props => props.theme.form.row.marginBottom};
  text-align: ${props => props.aligned || ''};
  ${props => props.styledFormRow};
`

class FormRow extends Component {
  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <FormConsumer>
            {form => (
              <FormRowStyled theme={theme} {...this.props}>
                {children({ theme, ...form })}
              </FormRowStyled>
            )}
          </FormConsumer>
        )}
      </ThemeConsumer>
    )
  }
}

export const formRow = styled(FormRow)
