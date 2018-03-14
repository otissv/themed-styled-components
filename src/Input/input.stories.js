import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { input } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Input', module)

const Input = input``

stories
  .add(
    'Default - Input',
    withInfo(`
  
      ~~~js
      <Input placeholder="Default" theme={theme()(colors)} />
      ~~~

    `)(() => <Input placeholder="Default" theme={theme()(colors)} />)
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        context="accent"
        value="Accent"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        context="blank"
        value="Blank"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        context="danger"
        value="Danger"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        context="primary"
        value="Primary"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        context="success"
        value="Success"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        context="warning"
        value="Warning"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        disabled
        value="Disabled"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        icon="account-o"
        placeholder="user name"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        pos="right"
        icon="lock-outline"
        placeholder="password"
        type="password"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
  //         theme={theme()(colors)}
  //       />
  //       ~~~

  //     `)(() => (
  //     <Input
  //       href="#"
  //       pos="right"
  //       icon="link"
  //       placeholder="url"
  //       onChange={() => {}}
  //       theme={theme()(colors)}
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        size="large"
        value="Large"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        size="small"
        value="Small"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        widths="large"
        value="Large"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        widths="medium"
        value="Medium"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        widths="small"
        value="Small"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        widths="xlarge"
        value="Xlarge"
        onChange={() => {}}
        theme={theme()(colors)}
      />
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
          theme={theme()(colors)}
        />
        ~~~
  
      `)(() => (
      <Input
        widths="xsmall"
        value="Xsmall"
        onChange={() => {}}
        theme={theme()(colors)}
      />
    ))
  )
