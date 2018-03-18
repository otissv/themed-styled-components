import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

const FormErrorListStyled = styled.div`
  display: ${props => (props.errors ? 'block' : 'none')};
  color: ${props => props.theme.form.errorList.color};
  background: ${props => props.theme.form.errorList.background};
  padding: ${props => props.theme.form.errorList.padding};
  margin: ${props => props.theme.form.errorList.margin};
  width: ${props => props.theme.form.errorList.width};
  max-width: ${props =>
    props.theme.form.errorList.widths[props.widths] ||
    props.theme.form.errorList.maxWidth};

  ${props => props.styledFormErrorList};
`

class FormErrorList extends Component {
  getErrors = () => {
    const { list, errors } = this.props
    return list ? errors.message : 'Some fields are incorrect'
  }
  render() {
    return (
      <FormErrorListStyled {...this.props}>
        {this.getErrors()}
      </FormErrorListStyled>
    )
  }
}

export const formErrorList = styled(FormErrorList)
