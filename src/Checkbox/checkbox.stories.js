import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Checkbox } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Checkbox', module)

stories
  .add(
    'Default Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox theme={theme()(colors)} onChange={() => {}} />
      ~~~

    `)(() => <Checkbox theme={theme()(colors)} onChange={() => {}} />)
  )

  .add(
    'Checked Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox theme={theme()(colors)} onChange={() => {}} checked={true} />
      ~~~

    `)(() => (
      <Checkbox theme={theme()(colors)} onChange={() => {}} checked={true} />
    ))
  )

  .add(
    'Labeled Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox theme={theme()(colors)} onChange={() => {}}>Checkbox</Checkbox>
      ~~~

    `)(() => (
      <Checkbox theme={theme()(colors)} onChange={() => {}}>
        Checkbox
      </Checkbox>
    ))
  )

  /* ==========================================================================
  * Checkbox Context
  * ======================================================================== */

  .add(
    'Context - Accent Checkbox',
    withInfo(`

    ~~~js
    <Checkbox context="accent" theme={theme()(colors)} onChange={() => {}}>
      Checkbox
    </Checkbox>
    ~~~

  `)(() => (
      <Checkbox context="accent" theme={theme()(colors)} onChange={() => {}}>
        Accent
      </Checkbox>
    ))
  )

  .add(
    'Context - Primary Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox context="primary" theme={theme()(colors)} onChange={() => {}}>
        Checkbox
      </Checkbox>
      ~~~

    `)(() => (
      <Checkbox context="primary" theme={theme()(colors)} onChange={() => {}}>
        Primary
      </Checkbox>
    ))
  )

  .add(
    'Context - Danger Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox context="danger" theme={theme()(colors)} onChange={() => {}}>
        Checkbox
      </Checkbox>
      ~~~

    `)(() => (
      <Checkbox context="danger" theme={theme()(colors)} onChange={() => {}}>
        Danger
      </Checkbox>
    ))
  )

  .add(
    'Size - Small Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox size="small" theme={theme()(colors)} onChange={() => {}}>
      Small
      </Checkbox>
      ~~~

    `)(() => (
      <Checkbox size="small" theme={theme()(colors)} onChange={() => {}}>
        Checkbox
      </Checkbox>
    ))
  )

  .add(
    'Size - Large Checkbox',
    withInfo(`
  
      ~~~js
      <Checkbox size="large" theme={theme()(colors)} onChange={() => {}}>
        Large
      </Checkbox>
      ~~~

    `)(() => (
      <Checkbox size="large" theme={theme()(colors)} onChange={() => {}}>
        Large
      </Checkbox>
    ))
  )
