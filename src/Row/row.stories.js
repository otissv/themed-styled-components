import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { row } from './index'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const Row = row``
const stories = storiesOf('Row', module)

stories.add(
  'Default - Row',
  withInfo(`
  
      ~~~js
      <Row />
      ~~~

    `)(() => (
    <ThemeProvider>
      <Row />
    </ThemeProvider>
  ))
)
