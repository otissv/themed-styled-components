import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
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

    `)(() => <Close theme={theme()(colors)} />)
)
