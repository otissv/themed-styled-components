import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { button } from './index'
import { icon } from '../Icon'
import { dark } from '../dark'
import { light } from '../light'
import { theme } from '../theme'
import { ThemeProvider } from '../ThemeContext'

const schemes = { dark, light }

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

    `)(() => (
      <ThemeProvider>
        <Button>Default</Button>
      </ThemeProvider>
    ))
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
      <ThemeProvider>
        <Button context="accent">Accent</Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button context="danger">Danger</Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button context="ghost">Ghost</Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button context="success">Success</Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button context="warning">Warning</Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button context="primary">Primary</Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button theme={theme()(colors)} size="large">
          Large Button
        </Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button theme={theme()(colors)} size="small">
          Small Button
        </Button>
      </ThemeProvider>
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
      <ThemeProvider>
        <Button theme={theme()(colors)} stretch>
          Stretch Button
        </Button>
      </ThemeProvider>
    ))
  )

/* ========================================================
  *  Icon
  *  ===================================================== */

// button
// width: 42px;
//   height: 42px;
//   padding: 0;
//   border-radius: 100%

//icon
// height: 30px;
