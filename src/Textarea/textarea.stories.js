import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { textarea } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Textarea', module)

const Textarea = textarea``

stories
  .add(
    'Default Textarea',
    withInfo(`
  
      ~~~js
      <Textarea placeholder="Textarea" theme={theme()(colors)} />
      ~~~

    `)(() => <Textarea placeholder="Textarea" theme={theme()(colors)} />)
  )

  /* =====================================
    * Context 
    * =================================== */

  .add(
    'Context - Accent Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Accent" context="accent" theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Accent" context="accent" theme={theme()(colors)} />
    ))
  )

  .add(
    'Context - Danger Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Danger" context="danger" theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Danger" context="danger" theme={theme()(colors)} />
    ))
  )

  .add(
    'Context - Success Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Success" context="success" theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea
        placeholder="Success"
        context="success"
        theme={theme()(colors)}
      />
    ))
  )

  .add(
    'Context - Warning Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Warning" context="warning" theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea
        placeholder="Warning"
        context="warning"
        theme={theme()(colors)}
      />
    ))
  )

  /* =====================================
    * Disabled 
    * =================================== */

  .add(
    'Disabled - Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Disabled" disabled theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Warning" disabled theme={theme()(colors)} />
    ))
  )

  /* =====================================
    * Widths 
    * =================================== */

  .add(
    'Widths - Large Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Large" widths='large' theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Large" widths="large" theme={theme()(colors)} />
    ))
  )

  .add(
    'Widths - Medium Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Medium" widths='medium' theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Medium" widths="medium" theme={theme()(colors)} />
    ))
  )

  .add(
    'Widths - Small Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Small" widths='small' theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Small" widths="small" theme={theme()(colors)} />
    ))
  )

  .add(
    'Widths - Xlarge Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Xlarge" widths='xlarge' theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Xlarge" widths="xlarge" theme={theme()(colors)} />
    ))
  )

  .add(
    'Widths - Xsmall Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Xsmall" widths='small' theme={theme()(colors)} />
        ~~~
  
      `)(() => (
      <Textarea placeholder="Xsmall" widths="small" theme={theme()(colors)} />
    ))
  )
