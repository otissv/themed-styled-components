import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import { LoginConsumer } from './index'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoginHeaderStyled = styled.header`
  ${styles('login.header')};
  ${sharedStyles('login.header')};
  ${props => props.styled};
`

class LoginHeader extends React.Component {
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
            <LoginHeaderStyled {...props}>
              {children({ theme: props.theme })}
            </LoginHeaderStyled>
          )
        }}
      </LoginConsumer>
    )
  }
}

{
  /* */
}

{
  /* <LoginConsumer>
        {({ loginHeader, theme }) => (
          <LoginHeaderStyled theme={theme} {...loginHeader} />
        )}
      </LoginConsumer> */
}

// {children({ theme })}
export const loginHeader = styled(LoginHeader)
