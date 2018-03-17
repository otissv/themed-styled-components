import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../ThemeContext'
import { close } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Close', module)

const Close = close``

stories.add(
  'Default - Close',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => (
    <ThemeProvider>
      <Close pos="right" theme={theme()(colors)} />
    </ThemeProvider>
  ))
)
