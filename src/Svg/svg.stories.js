import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Svg } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'
import homeIcon from '../icons/web-application/home.svg'

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

  .add(
    'Context - Primary Svg',
    withInfo(`
  
      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg context="primary" theme={theme()(colors)} src={homeIcon} />)
  )

  .add(
    'Context - Secondary Svg',
    withInfo(`
  
      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg context="secondary" theme={theme()(colors)} src={homeIcon} />)
  )

  .add(
    'Size - Small Svg',
    withInfo(`
  
      ~~~js
      import homeIcon from '../icons/web-application/home.svg'
      ...

      ~~~

    `)(() => <Svg size="small" theme={theme()(colors)} src={homeIcon} />)
  )
