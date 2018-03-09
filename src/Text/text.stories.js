import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { text } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'
import homeIcon from '../icons/web-application/home.svg'

const Text = text``
const stories = storiesOf('Text', module)

stories.add(
  'Default Text',
  withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)}>Default text</Text>
      ~~~

    `)(() => <Text theme={theme()(colors)}>Default text</Text>)
)

stories

  .add(
    'Type - a',
    withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)} type="a">
      a type.
      </Text>
      ~~~

    `)(() => (
      <div>
        Turn text into hypertext using the
        <Text theme={theme()(colors)} type="a">
          a type.
        </Text>
      </div>
    ))
  )

  .add(
    'Type - abbr',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="abbr"
          title="Abbreviation Component"
        >
          abbr type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define an abbreviation using the{' '}
        <Text
          theme={theme()(colors)}
          type="abbr"
          title="Abbreviation Component"
        >
          abbr type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - code',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="code"
        >
          code type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define inline code snippets using the{' '}
        <Text theme={theme()(colors)} type="code">
          code type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - del',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="del"
        >
        del type
        </Text>
      ~~~

    `)(() => (
      <div>
        Mark document changes as deleted text using the{' '}
        <Text theme={theme()(colors)} type="del">
          del type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - dfn',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="dfn"
        >
        dfn type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a definition term using the{' '}
        <Text theme={theme()(colors)} type="dfn">
          dfn type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - em',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="em"
        >
        em type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a definition term using the{' '}
        <Text theme={theme()(colors)} type="em">
          em type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - h1',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="h1"
        >
        h1 type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h1 heading term using the{' '}
        <Text theme={theme()(colors)} type="h1" styled="display:inline;">
          h1 type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - h2',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="h2"
        >
        h2 type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h2 heading term using the{' '}
        <Text theme={theme()(colors)} type="h2" styled="display:inline;">
          h2 type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - h3',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="h3"
        >
        h3 type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h3 heading term using the{' '}
        <Text theme={theme()(colors)} type="h3" styled="display:inline;">
          h3 type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - h4',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="h4"
        >
        h4 type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h4 heading term using the{' '}
        <Text theme={theme()(colors)} type="h4" styled="display:inline;">
          h4 type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - h5',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="h5"
        >
        h5 type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h5 heading term using the{' '}
        <Text theme={theme()(colors)} type="h5" styled="display:inline;">
          h5 type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - h6',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="h6"
        >
        h6 type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define a h6 heading term using the{' '}
        <Text theme={theme()(colors)} type="h6" styled="display:inline;">
          h6 type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - hr',
    withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)} type="hr"/>
      ~~~

    `)(() => (
      <div>
        <Text theme={theme()(colors)} type="hr" />
      </div>
    ))
  )

  .add(
    'Type - q',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="q"
        >
        q type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define inline quotations using{' '}
        <Text theme={theme()(colors)} type="q">
          q type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - sm',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="sm"
        >
        sm type
        </Text>
      ~~~

    `)(() => (
      <div>
        De-emphasize text for sm print using the{' '}
        <Text theme={theme()(colors)} type="sm">
          sm type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - span',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="span"
        >
        span type
        </Text>
      ~~~

    `)(() => (
      <div>
        Define parts of inline text with the{' '}
        <Text theme={theme()(colors)} type="span">
          span type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - strong',
    withInfo(`
  
      ~~~js
      <Text
          theme={theme()(colors)}
          type="strong"
        >
        strong type
        </Text>
      ~~~

    `)(() => (
      <div>
        Impliy any extra importance using the{' '}
        <Text theme={theme()(colors)} type="strong">
          strong type
        </Text>
      </div>
    ))
  )

  .add(
    'Type - p',
    withInfo(`
  
      ~~~js
      <Text theme={theme()(colors)} type="p">
        Define a paragraph using the p type.
      </Text>
      ~~~

    `)(() => (
      <div>
        <Text theme={theme()(colors)} type="p">
          Define a paragraph using the p type.
        </Text>
      </div>
    ))
  )
