import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoginContext = React.createContext({ active: '' })

const LoginStyled = styled.section`
  ${styles('login')};
  ${sharedStyles('login')};
  ${props => props.styled};
`

class Login extends React.Component {
  static propTypes = {
    theme: PropTypes.object
  }

  render() {
    const {
      forgotPasswordProps,
      loginFooterProps,
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
      <LoginContext.Provider
        value={{
          forgotPasswordProps: { theme, ...forgotPasswordProps },
          loginFooterProps: { theme, ...loginFooterProps },
          loginFormProps: { theme, ...loginFormProps },
          loginHeaderProps: { theme, ...loginHeaderProps },
          loginProps: { theme, ...loginProps },
          passwordProps: { theme, ...passwordProps },
          rememberMeProps: { theme, ...rememberMeProps },
          signInProps: { theme, ...signInProps },
          singUpProps: { theme, ...singUpProps },
          submitProps: { theme, ...submitProps },
          usernameProps: { theme, ...usernameProps },
          theme
        }}
      >
        <LoginStyled theme={theme}>{this.props.children}</LoginStyled>
      </LoginContext.Provider>
    )
  }
}

export const login = styled(Login)
export const LoginConsumer = LoginContext.Consumer
