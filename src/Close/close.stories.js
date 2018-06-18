import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { close } from './index'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Close', module)

const Close = close``

stories.add(
  'Default - Close',
  withInfo(`
  
      ~~~js
      <Close pos="right" />
      ~~~

    `)(() => (
    <ThemeProvider>
      <Close pos="right" />
    </ThemeProvider>
  ))
)
