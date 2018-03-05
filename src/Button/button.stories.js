import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Button } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Button', module)

stories
  .add(
    'Default Button',
    withInfo(`
      Button component
    
      ~~~js
      <Button>Default</Button>
      ~~~

    `)(() => (
      <Button theme={theme()(colors)} onClick={action('clicked')}>
        Default
      </Button>
    ))
  )

  /* ========================================================
  *  Context
  *  ===================================================== */

  .add(
    'Context - Primary Button',
    withInfo(`
      context="primary" adds the context styles to the button.
    
      ~~~js
      <Button context="primary">Primary</Button>
      ~~~

      `)(() => (
      <Button
        theme={theme()(colors)}
        context="primary"
        onClick={action('clicked')}
      >
        Primary
      </Button>
    ))
  )

  .add(
    'Context - Secondary Button',
    withInfo(`
      context="secondary" adds the context styles to the button.
    
      ~~~js
      <Button size="small">Secondary</Button>
      ~~~

      `)(() => (
      <Button
        theme={theme()(colors)}
        context="secondary"
        onClick={action('clicked')}
      >
        Secondary
      </Button>
    ))
  )

  .add(
    'Context - Danger Button',
    withInfo(`
      context="danger" adds the context styles to the button.
    
      ~~~js
      <Button size="small">Danger</Button>
      ~~~

      `)(() => (
      <Button
        theme={theme()(colors)}
        context="danger"
        onClick={action('clicked')}
      >
        Danger
      </Button>
    ))
  )

  .add(
    'Context - Ghost Button',
    withInfo(`
      context="ghost" adds the context styles to the button.
    
      ~~~js
      <Button size="small">Ghost</Button>
      ~~~

      `)(() => (
      <Button
        theme={theme()(colors)}
        context="ghost"
        onClick={action('clicked')}
      >
        Ghost
      </Button>
    ))
  )

  /* ========================================================
  *  Size
  *  ===================================================== */

  .add(
    'Size - Large Button',
    withInfo(`
    size="large" makes the button lager.
    
    ~~~js
    <Button size="large" >Large Button</Button>
    ~~~

 `)(() => (
      <Button theme={theme()(colors)} size="large" onClick={action('clicked')}>
        Large Button
      </Button>
    ))
  )

  .add(
    'Size - Small Button',
    withInfo(`
      size="small" prop makes the button smaller.
    
      ~~~js
      <Button size="small">Small Button</Button>
      ~~~

      `)(() => (
      <Button theme={theme()(colors)} size="small" onClick={action('clicked')}>
        Small Button
      </Button>
    ))
  )

  /* ========================================================
  *  Stretch
  *  ===================================================== */

  .add(
    'Stretch',
    withInfo(`
    stretch makes the button fit the full width.
  
  ~~~js
  <Button stretch >Large Button</Button>
  ~~~

`)(() => (
      <Button theme={theme()(colors)} stretch onClick={action('clicked')}>
        Stretch Button
      </Button>
    ))
  )
