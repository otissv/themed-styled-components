import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Close } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Close', module)

stories.add(
  'Default Close',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => <Close pos="right" theme={theme()(colors)} />)
)
