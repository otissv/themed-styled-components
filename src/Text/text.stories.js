import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../ThemeContext'
import { text } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const Text = text``
const stories = storiesOf('Text', module)

stories
  .add(
    'Default Text',
    withInfo(`
  
      ~~~js
      <Text>Default text</Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Text>Default text</Text>
      </ThemeProvider>
    ))
  )

  /* ========================================================
  *  Bold
  *  ===================================================== */

  .add(
    'Bold Text',
    withInfo(`

  Usage

  ~~~js
  <Text bold={true}>
    bold text.
  </Text>
  ~~~

`)(() => (
      <ThemeProvider>
        <Text bold>Bold text.</Text>
      </ThemeProvider>
    ))
  )

  /* ========================================================
  *  Element
  *  ===================================================== */

  .add(
    'Element - a',
    withInfo(`
  
      ~~~js
      <Text element="a">
      a element.
      </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Turn text into hypertext using the{' '}
        <Text href="#" element="a">
          a element.
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - abbr',
    withInfo(`
  
      ~~~js
      <Text
          element="abbr"
          title="Abbreviation Component"
        >
          abbr element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define an abbreviation using the{' '}
        <Text element="abbr" title="Abbreviation Component">
          abbr element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - code',
    withInfo(`
  
      ~~~js
      <Text
          element="code"
        >
          code element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define inline code snippets using the{' '}
        <Text element="code">code element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - del',
    withInfo(`
  
      ~~~js
      <Text
          element="del"
        >
        del element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Mark document changes as deleted text using the{' '}
        <Text element="del">del element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - dfn',
    withInfo(`
  
      ~~~js
      <Text
         
          element="dfn"
        >
        dfn element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a definition term using the{' '}
        <Text element="dfn">dfn element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - em',
    withInfo(`
  
      ~~~js
      <Text
         
          element="em"
        >
        em element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a definition term using the <Text element="em">em element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - h1',
    withInfo(`
  
      ~~~js
      <Text
         
          element="h1"
        >
        h1 element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a h1 heading term using the{' '}
        <Text element="h1" styled="display:inline;">
          h1 element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - h2',
    withInfo(`
  
      ~~~js
      <Text
         
          element="h2"
        >
        h2 element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a h2 heading term using the{' '}
        <Text element="h2" styled="display:inline;">
          h2 element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - h3',
    withInfo(`
  
      ~~~js
      <Text
         
          element="h3"
        >
        h3 element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a h3 heading term using the{' '}
        <Text element="h3" styled="display:inline;">
          h3 element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - h4',
    withInfo(`
  
      ~~~js
      <Text
         
          element="h4"
        >
        h4 element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a h4 heading term using the{' '}
        <Text element="h4" styled="display:inline;">
          h4 element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - h5',
    withInfo(`
  
      ~~~js
      <Text
         
          element="h5"
        >
        h5 element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a h5 heading term using the{' '}
        <Text element="h5" styled="display:inline;">
          h5 element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - h6',
    withInfo(`
  
      ~~~js
      <Text
         
          element="h6"
        >
        h6 element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define a h6 heading term using the{' '}
        <Text element="h6" styled="display:inline;">
          h6 element
        </Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - hr',
    withInfo(`
  
      ~~~js
      <Text element="hr"/>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Text element="hr" />
      </ThemeProvider>
    ))
  )

  .add(
    'Element - q',
    withInfo(`
  
      ~~~js
      <Text
         
          element="q"
        >
        q element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define inline quotations using <Text element="q">q element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - sm',
    withInfo(`
  
      ~~~js
      <Text
         
          element="sm"
        >
        sm element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        De-emphasize text for sm print using the{' '}
        <Text element="sm">sm element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - span',
    withInfo(`
  
      ~~~js
      <Text
         
          element="span"
        >
        span element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Define parts of inline text with the{' '}
        <Text element="span">span element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - strong',
    withInfo(`
  
      ~~~js
      <Text
         
          element="strong"
        >
        strong element
        </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        Impliy any extra importance using the{' '}
        <Text element="strong">strong element</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Element - p',
    withInfo(`
  
      ~~~js
      <Text element="p">
        Define a paragraph using the p element.
      </Text>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Text element="p">Define a paragraph using the p element.</Text>
      </ThemeProvider>
    ))
  )

  /* ========================================================
  *  Context
  *  ===================================================== */

  .add(
    'Context - Accent Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='accent'>
    Accent text.
  </Text>
  ~~~

`)(() => (
      <ThemeProvider>
        <Text context="accent">Accent text.</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='danger'>
    Danger text.
  </Text>
  ~~~

`)(() => (
      <ThemeProvider>
        <Text context="danger">Danger text.</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Muted Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='muted'>
    Muted text.
  </Text>
  ~~~

`)(() => (
      <ThemeProvider>
        <Text context="muted">Muted text.</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='success'>
    Success text.
  </Text>
  ~~~

`)(() => (
      <ThemeProvider>
        <Text context="success">Success text.</Text>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='warning'>
    Warning text.
  </Text>
  ~~~

`)(() => (
      <ThemeProvider>
        <Text context="warning">Warning text.</Text>
      </ThemeProvider>
    ))
  )
