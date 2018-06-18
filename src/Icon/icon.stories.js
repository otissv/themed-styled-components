import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { icon } from './index'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const Icon = icon``
const stories = storiesOf('Icon', module)

stories
  .add(
    'Default - Icon',
    withInfo(`
  
      ~~~js
      <Icon icon='home' />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Icon icon="home" />
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Icon Context
  * ======================================================================== */
  .add(
    'Context - Accent Icon',
    withInfo(`

    ~~~js
    <Icon context="accent"  icon='home' />
    ~~~

  `)(() => (
      <ThemeProvider>
        <Icon context="accent" icon="home" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Icon',
    withInfo(`

      ~~~js
      <Icon context="danger"  icon='home' />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Icon context="danger" icon="home" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Primary Icon',
    withInfo(`

      ~~~js
      <Icon context="primary"  icon='home' />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Icon context="primary" icon="home" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Icon',
    withInfo(`

      ~~~js
      <Icon context="success"  icon='home' />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Icon context="success" icon="home" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Icon',
    withInfo(`

      ~~~js
      <Icon context="warning"  icon='home'} />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Icon context="warning" icon="home" />
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Icon Size
  * ======================================================================== */

  .add(
    'Size - Large Icon',
    withInfo(`

    ~~~js
    <Icon size="large"  icon='home' />
    ~~~

  `)(() => (
      <ThemeProvider>
        <Icon size="large" icon="home" />
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Small Icon',
    withInfo(`

~~~js
  <Icon size="small"  icon='home' />
  ~~~

`)(() => (
      <ThemeProvider>
        <Icon size="small" icon="home" />
      </ThemeProvider>
    ))
  )
