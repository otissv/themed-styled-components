import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { link } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Link', module)

const Link = link``

stories.add(
  'Default Link',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => <Link theme={theme()(colors)}>Link</Link>)
)
