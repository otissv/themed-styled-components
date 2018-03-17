import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../ThemeContext'
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
      <Textarea placeholder="Textarea"/>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Textarea" />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Context 
    * =================================== */

  .add(
    'Context - Accent Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Accent" context="accent"/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Accent" context="accent" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Danger" context="danger"/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Danger" context="danger" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Success" context="success"/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea
          placeholder="Success"
          context="success"
          theme={theme()(colors)}
        />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Warning" context="warning"/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea
          placeholder="Warning"
          context="warning"
          theme={theme()(colors)}
        />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Disabled 
    * =================================== */

  .add(
    'Disabled - Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Disabled" disabled/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Warning" disabled />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Widths 
    * =================================== */

  .add(
    'Widths - Large Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Large" widths='large'/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Large" widths="large" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Medium Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Medium" widths='medium'/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Medium" widths="medium" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Small Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Small" widths='small'/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Small" widths="small" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Xlarge Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Xlarge" widths='xlarge'/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Xlarge" widths="xlarge" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Xsmall Textarea',
    withInfo(`
    
        ~~~js
        <Textarea placeholder="Xsmall" widths='small'/>
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Textarea placeholder="Xsmall" widths="small" />
      </ThemeProvider>
    ))
  )
