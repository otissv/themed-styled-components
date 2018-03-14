import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { icon } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const Icon = icon``
const stories = storiesOf('Icon', module)

stories
  .add(
    'Default - Icon',
    withInfo(`
  
      ~~~js
      <Icon theme={theme()(colors)} icon='home' />
      ~~~

    `)(() => <Icon theme={theme()(colors)} icon="home" />)
  )

  /* ==========================================================================
  * Icon Context
  * ======================================================================== */
  .add(
    'Context - Accent Icon',
    withInfo(`

    ~~~js
    <Icon context="accent" theme={theme()(colors)} icon='home' />
    ~~~

  `)(() => <Icon context="accent" theme={theme()(colors)} icon="home" />)
  )

  .add(
    'Context - Danger Icon',
    withInfo(`

      ~~~js
      <Icon context="danger" theme={theme()(colors)} icon='home' />
      ~~~

    `)(() => <Icon context="danger" theme={theme()(colors)} icon="home" />)
  )

  .add(
    'Context - Primary Icon',
    withInfo(`

      ~~~js
      <Icon context="primary" theme={theme()(colors)} icon='home' />
      ~~~

    `)(() => <Icon context="primary" theme={theme()(colors)} icon="home" />)
  )

  .add(
    'Context - Success Icon',
    withInfo(`

      ~~~js
      <Icon context="success" theme={theme()(colors)} icon='home' />
      ~~~

    `)(() => <Icon context="success" theme={theme()(colors)} icon="home" />)
  )

  .add(
    'Context - Warning Icon',
    withInfo(`

      ~~~js
      <Icon context="warning" theme={theme()(colors)} icon='home'} />
      ~~~

    `)(() => <Icon context="warning" theme={theme()(colors)} icon="home" />)
  )

  /* ==========================================================================
  * Icon Size
  * ======================================================================== */

  .add(
    'Size - Large Icon',
    withInfo(`

    ~~~js
    <Icon size="large" theme={theme()(colors)} icon='home' />
    ~~~

  `)(() => <Icon size="large" theme={theme()(colors)} icon="home" />)
  )

  .add(
    'Size - Small Icon',
    withInfo(`

~~~js
  <Icon size="small" theme={theme()(colors)} icon='home' />
  ~~~

`)(() => <Icon size="small" theme={theme()(colors)} icon="home" />)
  )
