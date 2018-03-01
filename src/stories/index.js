import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button } from '../Button'
import { Provider } from '../Provider'
import { dark } from '../dark'
import { light } from '../light'
import { theme } from '../theme'
// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const ThemeProvider = props => (
  <Provider theme={theme()} schemes={{ dark, light }} active="light">
    {props.children}
  </Provider>
)

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider>
      <Button onClick={action('clicked')}>Button</Button>
    </ThemeProvider>
  ))
  .add('with some emoji', () => (
    <ThemeProvider>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </ThemeProvider>
  ))
