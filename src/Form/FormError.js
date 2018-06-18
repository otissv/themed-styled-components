import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme'

const FormErrorStyled = styled.p`
  color: ${props => props.theme.form.error.color};
  background: ${props => props.theme.form.error.background};
  padding: ${props => props.theme.form.error.padding};
  margin: ${props => props.theme.form.error.margin};
  width: ${props => props.theme.form.error.width};
  max-width: ${props =>
    props.theme.form.error.widths[props.widths] ||
    props.theme.form.error.maxWidth};

  ${props => props.styledFormError};
`

class FormError extends Component {
  render() {
    return (
      <ThemeConsumer>
        {theme => <FormErrorStyled theme={theme} {...this.props} />}
      </ThemeConsumer>
    )
  }
}

export const formError = styled(FormError)
