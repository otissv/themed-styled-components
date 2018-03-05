import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Row } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Row', module)

stories.add(
  'Default Row',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => <Row theme={theme()(colors)} />)
)
