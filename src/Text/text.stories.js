import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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
      <Text theme={theme()(colors)}>Default text</Text>
      ~~~

    `)(() => <Text theme={theme()(colors)}>Default text</Text>)
  )

  /* ========================================================
  *  Bold
  *  ===================================================== */

  .add(
    'Bold Text',
    withInfo(`

  Usage

  ~~~js
  <Text bold={true} theme={theme()(colors)}>
    bold text.
  </Text>
  ~~~

`)(() => (
      <div>
        <Text bold theme={theme()(colors)}>
          Bold text.
        </Text>
      </div>
    ))
  )

  /* ========================================================
  *  Element
  *  ===================================================== */

  .add(
    'Element - a',
    withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)} element="a">
      a element.
      </Text>
      ~~~

    `)(() => (
      <div>
        Turn text into hypertext using the{' '}
        <Text href="#" theme={theme()(colors)} element="a">
          a element.
        </Text>
      </div>
    ))
  )

  .add(
    'Element - abbr',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="abbr"
          title="Abbreviation Component"
        >
          abbr element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define an abbreviation using the{' '}
        <Text
          theme={theme()(colors)}
          element="abbr"
          title="Abbreviation Component"
        >
          abbr element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - code',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="code"
        >
          code element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define inline code snippets using the{' '}
        <Text theme={theme()(colors)} element="code">
          code element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - del',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="del"
        >
        del element
        </Text>
      ~~~

    `)(() => (
      <div>
        Mark document changes as deleted text using the{' '}
        <Text theme={theme()(colors)} element="del">
          del element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - dfn',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="dfn"
        >
        dfn element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a definition term using the{' '}
        <Text theme={theme()(colors)} element="dfn">
          dfn element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - em',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="em"
        >
        em element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a definition term using the{' '}
        <Text theme={theme()(colors)} element="em">
          em element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - h1',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="h1"
        >
        h1 element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h1 heading term using the{' '}
        <Text theme={theme()(colors)} element="h1" styled="display:inline;">
          h1 element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - h2',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="h2"
        >
        h2 element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h2 heading term using the{' '}
        <Text theme={theme()(colors)} element="h2" styled="display:inline;">
          h2 element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - h3',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="h3"
        >
        h3 element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h3 heading term using the{' '}
        <Text theme={theme()(colors)} element="h3" styled="display:inline;">
          h3 element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - h4',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="h4"
        >
        h4 element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h4 heading term using the{' '}
        <Text theme={theme()(colors)} element="h4" styled="display:inline;">
          h4 element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - h5',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="h5"
        >
        h5 element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h5 heading term using the{' '}
        <Text theme={theme()(colors)} element="h5" styled="display:inline;">
          h5 element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - h6',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="h6"
        >
        h6 element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h6 heading term using the{' '}
        <Text theme={theme()(colors)} element="h6" styled="display:inline;">
          h6 element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - hr',
    withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)} element="hr"/>
      ~~~

    `)(() => (
      <div>
        <Text theme={theme()(colors)} element="hr" />
      </div>
    ))
  )

  .add(
    'Element - q',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="q"
        >
        q element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define inline quotations using{' '}
        <Text theme={theme()(colors)} element="q">
          q element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - sm',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="sm"
        >
        sm element
        </Text>
      ~~~

    `)(() => (
      <div>
        De-emphasize text for sm print using the{' '}
        <Text theme={theme()(colors)} element="sm">
          sm element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - span',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="span"
        >
        span element
        </Text>
      ~~~

    `)(() => (
      <div>
        Define parts of inline text with the{' '}
        <Text theme={theme()(colors)} element="span">
          span element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - strong',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          element="strong"
        >
        strong element
        </Text>
      ~~~

    `)(() => (
      <div>
        Impliy any extra importance using the{' '}
        <Text theme={theme()(colors)} element="strong">
          strong element
        </Text>
      </div>
    ))
  )

  .add(
    'Element - p',
    withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)} element="p">
        Define a paragraph using the p element.
      </Text>
      ~~~

    `)(() => (
      <div>
        <Text theme={theme()(colors)} element="p">
          Define a paragraph using the p element.
        </Text>
      </div>
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
  <Text context='accent' theme={theme()(colors)}>
    Accent text.
  </Text>
  ~~~

`)(() => (
      <div>
        <Text context="accent" theme={theme()(colors)}>
          Accent text.
        </Text>
      </div>
    ))
  )

  .add(
    'Context - Danger Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='danger' theme={theme()(colors)}>
    Danger text.
  </Text>
  ~~~

`)(() => (
      <div>
        <Text context="danger" theme={theme()(colors)}>
          Danger text.
        </Text>
      </div>
    ))
  )

  .add(
    'Context - Muted Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='muted' theme={theme()(colors)}>
    Muted text.
  </Text>
  ~~~

`)(() => (
      <div>
        <Text context="muted" theme={theme()(colors)}>
          Muted text.
        </Text>
      </div>
    ))
  )

  .add(
    'Context - Success Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='success' theme={theme()(colors)}>
    Success text.
  </Text>
  ~~~

`)(() => (
      <div>
        <Text context="success" theme={theme()(colors)}>
          Success text.
        </Text>
      </div>
    ))
  )

  .add(
    'Context - Warning Text',
    withInfo(`

  Usage

  ~~~js
  <Text context='warning' theme={theme()(colors)}>
    Warning text.
  </Text>
  ~~~

`)(() => (
      <div>
        <Text context="warning" theme={theme()(colors)}>
          Warning text.
        </Text>
      </div>
    ))
  )
