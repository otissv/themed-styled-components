import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'

import { login } from '../Login'
import { loginHeader } from '../LoginHeader'
import { button } from '../Button'
import { loginHeader } from '../LoginHeader'
import { loginForm } from '../LoginForm'
import { input } from '../Input'
import { checkbox } from '../Checkbox'
import { text } from '../Text'

export class Login1 extends Component {
  render() {
    const {
      forgotPasswordProps,
      loginFormProps,
      loginHeaderProps,
      loginProps,
      passwordProps,
      rememberMeProps,
      signInProps,
      singUpProps,
      submitProps,
      usernameProps,
      theme
    } = this.props
    return (
      <Login theme={theme} {...loginProps}>
        <LoginHeader theme={theme} {...loginHeaderProps}>
          <Button theme={theme} {...singUpProps} />
          <Button theme={theme} {...singInProps} />
        </LoginHeader>
        <LoginForm theme={theme} {...loginFormProps}>
          <Input theme={theme} {...usernameProps} />
          <Input theme={theme} {...passwordProps} />

          <Checkbox size="small" theme={theme} {...rememberMeProps} />
          <Text element="a" theme={theme} {...forgotPasswordProps} />

          <Button {...submitProps}>Sign In</Button>
        </LoginForm>
      </Login>
    )
  }
}
