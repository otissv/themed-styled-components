import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../ThemeContext'
import { checkbox } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const Checkbox = checkbox``

const stories = storiesOf('Checkbox', module)

stories
  .add(
    'Default - Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox onChange={() => {}} />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Checked - Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox onChange={() => {}} checked={true} />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox onChange={() => {}} checked={true} />
      </ThemeProvider>
    ))
  )

  .add(
    'Labeled - Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox onChange={() => {}}>Checkbox</Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox onChange={() => {}}>Checkbox</Checkbox>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Checkbox Context
  * ======================================================================== */

  .add(
    'Context - Accent Checkbox',
    withInfo(`

    ~~~js
    <Checkbox context="accent" onChange={() => {}}>
    Accent
    </Checkbox>
    ~~~

  `)(() => (
      <ThemeProvider>
        <Checkbox context="accent" onChange={() => {}}>
          Accent
        </Checkbox>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox context="danger" onChange={() => {}}>
      Danger
      </Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox context="danger" onChange={() => {}}>
          Danger
        </Checkbox>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Primary Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox context="primary" onChange={() => {}}>
      Primary
      </Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox context="primary" onChange={() => {}}>
          Primary
        </Checkbox>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox context="success" onChange={() => {}}>
      Success
      </Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox context="success" onChange={() => {}}>
          Success
        </Checkbox>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox context="warning" onChange={() => {}}>
      Warning
      </Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox context="warning">Warning</Checkbox>
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Checkbox Size
    * =================================== */

  .add(
    'Size - Large Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox size="large" onChange={() => {}}>
        Large
      </Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox size="large" onChange={() => {}}>
          Large
        </Checkbox>
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Small Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox size="small" onChange={() => {}}>
      Small
      </Checkbox>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Checkbox size="small" onChange={() => {}}>
          Small
        </Checkbox>
      </ThemeProvider>
    ))
  )
