import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { button } from './index'
import { icon } from '../Icon'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const Button = button``
const Icon = icon``
const stories = storiesOf('Button', module)

stories
  .add(
    'Default - Button',
    withInfo(`
      Button component
    
      ~~~js
      <Button>Default</Button>
      ~~~

    `)(() => <Button theme={theme()(colors)}>Default</Button>)
  )

  /* ========================================================
  *  Context
  *  ===================================================== */

  .add(
    'Context - Accent Button',
    withInfo(`
    context="accent" adds the context styles to the button.
  
    ~~~js
    <Button context="accent">Accent</Button>
    ~~~

    `)(() => (
      <Button theme={theme()(colors)} context="accent">
        Accent
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
      <Button theme={theme()(colors)} context="danger">
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
      <Button theme={theme()(colors)} context="ghost">
        Ghost
      </Button>
    ))
  )

  .add(
    'Context - Success Button',
    withInfo(`
      context="success" adds the context styles to the button.
    
      ~~~js
      <Button context="primary">Success</Button>
      ~~~

      `)(() => (
      <Button theme={theme()(colors)} context="success">
        Success
      </Button>
    ))
  )

  .add(
    'Context - Warning Button',
    withInfo(`
      context="warning" adds the context styles to the button.
    
      ~~~js
      <Button context="warning">Warning</Button>
      ~~~

      `)(() => (
      <Button theme={theme()(colors)} context="warning">
        Warning
      </Button>
    ))
  )

  .add(
    'Context - Primary Button',
    withInfo(`
      context="primary" adds the context styles to the button.
    
      ~~~js
      <Button context="primary">Primary</Button>
      ~~~

      `)(() => (
      <Button theme={theme()(colors)} context="primary">
        Primary
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
      <Button theme={theme()(colors)} size="large">
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
      <Button theme={theme()(colors)} size="small">
        Small Button
      </Button>
    ))
  )

  /* ========================================================
  *  Stretch
  *  ===================================================== */

  .add(
    'Stretch - Button',
    withInfo(`
    stretch makes the button fit the full width.
  
  ~~~js
  <Button stretch >Large Button</Button>
  ~~~

`)(() => (
      <Button theme={theme()(colors)} stretch>
        Stretch Button
      </Button>
    ))
  )

  /* ========================================================
  *  Icon
  *  ===================================================== */

  .add(
    'Icon - Button',
    withInfo(`
  stretch makes the button fit the full width.

~~~js
<Button stretch >Large Button</Button>
~~~

`)(() => (
      <div>
        <Button theme={theme()(colors)} stretch>
          <Icon theme={theme()(colors)} icon="home" />
        </Button>
      </div>
    ))
  )

// button
// width: 42px;
//   height: 42px;
//   padding: 0;
//   border-radius: 100%

//icon
// height: 30px;
