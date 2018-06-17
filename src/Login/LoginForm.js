import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import { LoginConsumer } from './index'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoginFormStyled = styled.div`
  ${styles('login.form')};
  ${sharedStyles('login.form')};
  ${props => props.styled};
`

class LoginForm extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    theme: PropTypes.object
  }

  _buildProps = context => {
    return {
      ...context,
      ...this.props
    }
  }

  render() {
    const { children } = this.props
    return (
      <LoginConsumer>
        {context => {
          const props = this._buildProps(context)
          return (
            <LoginFormStyled {...props}>
              {children({ theme: props.theme })}
            </LoginFormStyled>
          )
        }}
      </LoginConsumer>
    )
  }
}

export const loginForm = styled(LoginForm)
