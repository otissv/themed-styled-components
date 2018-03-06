import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { row } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const Row = row``
const stories = storiesOf('Row', module)

stories.add(
  'Default Row',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => <Row theme={theme()(colors)} />)
)
