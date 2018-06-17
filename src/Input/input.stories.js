import React from 'react'
import { ThemeProvider } from '../ThemeContext'
import { dark } from '../dark'
import { input } from './index'
import { light } from '../light'
import { storiesOf } from '@storybook/react'
import { theme } from '../theme'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Input', module)

const Input = input``

stories
  .add(
    'Default - Input',
    withInfo(`
  
      ~~~js
      <Input placeholder="Default" />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Input placeholder="Default" />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Context 
    * =================================== */
  .add(
    'Context - Accent Input',
    withInfo(`
    
        ~~~js
        <Input
          context="accent"
          placeholder="Accent"
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="accent" placeholder="Accent" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Blank Input',
    withInfo(`
    
        ~~~js
        <Input
          context="blank"
          placeholder="Blank"
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="blank" placeholder="Blank" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Input',
    withInfo(`
    
        ~~~js
        <Input
          context="danger"
          placeholder="Danger"
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="danger" placeholder="Danger" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Primary Input',
    withInfo(`
    
        ~~~js
        <Input
          context="primary"
          placeholder="Primary"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="primary" placeholder="Primary" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Input',
    withInfo(`
    
        ~~~js
        <Input
          context="success"
          placeholder="Success"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="success" placeholder="Success" />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Input',
    withInfo(`
    
        ~~~js
        <Input
          context="warning"
          placeholder="Warning"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="warning" placeholder="Warning" />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Disabled 
    * =================================== */
  .add(
    'Disabled Input',
    withInfo(`
    
        ~~~js
        <Input
          disabled
          placeholder="Disabled"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input disabled placeholder="Disabled" />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Icon 
    * =================================== */

  .add(
    'Icon Input',
    withInfo(`
    
        ~~~js
        <Input
          icon="account-o"
          placeholder="user name"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input icon="account-o" placeholder="user name" />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Icon 
    * =================================== */

  .add(
    'Icon Position Input',
    withInfo(`
    
        ~~~js
        <Input
          pos="right"
          icon="lock-outline"
          placeholder="password"
          type='password'
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input
          pos="right"
          icon="lock-outline"
          placeholder="password"
          type="password"
        />
      </ThemeProvider>
    ))
  )

  // /* =====================================
  //   * Href
  //   * =================================== */

  // .add(
  //   'Href Input',
  //   withInfo(`

  //       ~~~js
  //       <Input
  //         href='#'
  //         pos='right'
  //         icon="link"
  //         placeholder="url"
  //
  //
  //       />
  //       ~~~

  //     `)(() => (
  //     <Input
  //       href="#"
  //       pos="right"
  //       icon="link"
  //       placeholder="url"
  //
  //
  //     />
  //   ))
  // )

  /* =====================================
    * Size 
    * =================================== */

  .add(
    'Size - Large Input',
    withInfo(`
    
        ~~~js
        <Input
          size="large"
          placeholder="Large"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input size="large" placeholder="Large" />
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Small Input',
    withInfo(`
    
        ~~~js
        <Input
          size="small"
          placeholder="Small"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input size="small" placeholder="Small" />
      </ThemeProvider>
    ))
  )

  /* =====================================
    * Widths 
    * =================================== */

  .add(
    'Widths - Large Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="large"
          placeholder="Large"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="large" placeholder="Large" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Medium Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="medium"
          placeholder="Medium"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="medium" placeholder="Medium" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Small Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="small"
          placeholder="Small"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="small" placeholder="Small" />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Xlarge Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="xlarge"
          placeholder="Xlarge"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="xlarge" placeholder="Xlarge" />
      </ThemeProvider>
    ))
  )
  .add(
    'Widths - Xsmall Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="xsmall"
          placeholder="Xsmall"
         
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="xsmall" placeholder="Xsmall" />
      </ThemeProvider>
    ))
  )
