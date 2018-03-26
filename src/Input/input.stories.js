import React from 'react'
import { ThemeProvider } from '../ThemeContext'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { input } from './index'
import { dark } from '../dark'
import { light  } from '../light'
import { theme } from '../theme'

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
          value="Accent"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input
          context="accent"
          placeholder="Accent"
          onChange={event => console.dir(event.currentTarget)}
        />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Blank Input',
    withInfo(`
    
        ~~~js
        <Input
          context="blank"
          value="Blank"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="blank" value="Blank" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Input',
    withInfo(`
    
        ~~~js
        <Input
          context="danger"
          value="Danger"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="danger" value="Danger" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Primary Input',
    withInfo(`
    
        ~~~js
        <Input
          context="primary"
          value="Primary"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="primary" value="Primary" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Input',
    withInfo(`
    
        ~~~js
        <Input
          context="success"
          value="Success"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="success" value="Success" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Input',
    withInfo(`
    
        ~~~js
        <Input
          context="warning"
          value="Warning"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input context="warning" value="Warning" onChange={() => {}} />
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
          value="Disabled"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input disabled value="Disabled" onChange={() => {}} />
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
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input icon="account-o" placeholder="user name" onChange={() => {}} />
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
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input
          pos="right"
          icon="lock-outline"
          placeholder="password"
          type="password"
          onChange={() => {}}
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
  //         onChange={() => {}}
  //
  //       />
  //       ~~~

  //     `)(() => (
  //     <Input
  //       href="#"
  //       pos="right"
  //       icon="link"
  //       placeholder="url"
  //       onChange={() => {}}
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
          value="Large"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input size="large" value="Large" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Small Input',
    withInfo(`
    
        ~~~js
        <Input
          size="small"
          value="Small"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input size="small" value="Small" onChange={() => {}} />
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
          value="Large"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="large" value="Large" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Medium Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="medium"
          value="Medium"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="medium" value="Medium" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Small Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="small"
          value="Small"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="small" value="Small" onChange={() => {}} />
      </ThemeProvider>
    ))
  )

  .add(
    'Widths - Xlarge Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="xlarge"
          value="Xlarge"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="xlarge" value="Xlarge" onChange={() => {}} />
      </ThemeProvider>
    ))
  )
  .add(
    'Widths - Xsmall Input',
    withInfo(`
    
        ~~~js
        <Input
          widths="xsmall"
          value="Xsmall"
          onChange={() => {}}
        />
        ~~~
  
      `)(() => (
      <ThemeProvider>
        <Input widths="xsmall" value="Xsmall" onChange={() => {}} />
      </ThemeProvider>
    ))
  )
