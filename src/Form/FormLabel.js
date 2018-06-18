import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme'

const FormLabelStyled = styled.label`
  display: ${props => props.display || props.theme.form.label.display};
  margin: ${props => props.display || props.theme.form.label.margin};
  font-weight: ${props => props.display || props.theme.form.label.fontWeight};
  ${props => props.styledFormLabel};
  text-align: ${props => props.aligned || ''};

  ${props => props.styledFormLabel};
`

class FormLabel extends Component {
  render() {
    const { label, presence } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <FormLabelStyled theme={theme} {...this.props}>
            {label} {presence && '*'}
          </FormLabelStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const formLabel = styled(FormLabel)
