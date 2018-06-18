import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { button } from '../Button'
import { buttonGroup } from '../ButtonGroup'
import { checkbox } from '../Checkbox'
import { input } from '../Input'
import { login } from './index'
import { loginForm } from './LoginForm'
import { loginHeader } from './LoginHeader'
import { storiesOf } from '@storybook/react'
import { text } from '../Text'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Login', module)

const Button = button``
const Checkbox = checkbox``
const Input = input``
const Login = login``
const LoginForm = loginForm``
const LoginHeader = loginHeader``
const Text = text``
const ButtonGroup = buttonGroup``

stories.add(
  'Default - Login',
  withInfo(`
  
      ~~~js
      
      ~~~

    // `)(() => (
    <Login>
      <LoginHeader>
        {header => {
          return (
            <Fragment>
              <ButtonGroup stretch={true} theme={header.theme}>
                {buttonProps => (
                  <Fragment>
                    <Button {...buttonProps}>SignUp</Button>
                    <Button {...buttonProps}>SignIn</Button>
                  </Fragment>
                )}
              </ButtonGroup>
            </Fragment>
          )
        }}
      </LoginHeader>
      <LoginForm>
        {footer => (
          <Fragment>
            <Input placeholder="username" theme={footer.theme} />
            <Input
              placeholder="password"
              type="password"
              theme={footer.theme}
            />
            <Checkbox size="small" theme={footer.theme}>
              Remember me
            </Checkbox>
            <Text element="a" theme={footer.theme}>
              Forgot Password
            </Text>
            <Button theme={footer.theme}>Sign In</Button>
          </Fragment>
        )}
      </LoginForm>
    </Login>
  ))
)

// {header => (
//   <Fragment>
//     <Button theme={header.theme}>SignIn</Button>
//     <Button theme={header.theme}>SignIn</Button>
//   </Fragment>
// )}
{
  /* */
}
