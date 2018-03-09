import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { svg } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'
import homeIcon from '../icons/web-application/home.svg'

const Svg = svg``
const stories = storiesOf('Svg', module)

stories
  .add(
    'Default Svg',
    withInfo(`
  
      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg theme={theme()(colors)} src={homeIcon} />)
  )

  /* ==========================================================================
  * SVG Context
  * ======================================================================== */
  .add(
    'Context - Accent Svg',
    withInfo(`

    ~~~js
    import homeIcon from '../icons/web-application/home.svg'
    ...

    ~~~

  `)(() => <Svg context="accent" theme={theme()(colors)} src={homeIcon} />)
  )

  .add(
    'Context - Danger Svg',
    withInfo(`

      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg context="danger" theme={theme()(colors)} src={homeIcon} />)
  )

  .add(
    'Context - Success Svg',
    withInfo(`

      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg context="success" theme={theme()(colors)} src={homeIcon} />)
  )

  .add(
    'Context - Warning Svg',
    withInfo(`

      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg context="warning" theme={theme()(colors)} src={homeIcon} />)
  )

  /* ==========================================================================
  * SVG Size
  * ======================================================================== */

  .add(
    'Size - Large Svg',
    withInfo(`

    ~~~js
    import homeIcon from '../icons/web-application/home.svg'
    ...

    <Svg size="large" theme={theme()(colors)} src={homeIcon} />

    ~~~

  `)(() => <Svg size="large" theme={theme()(colors)} src={homeIcon} />)
  )

  .add(
    'Size - Small Svg',
    withInfo(`

~~~js
  import homeIcon from '../icons/web-application/home.svg'
  ...

  <Svg size="small" theme={theme()(colors)} src={homeIcon} />

  ~~~

`)(() => <Svg size="small" theme={theme()(colors)} src={homeIcon} />)
  )
