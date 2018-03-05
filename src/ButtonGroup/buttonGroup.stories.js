import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { ButtonGroup } from './index'
import { Button } from '../Button'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Button Group', module)

stories
  .add(
    'Default Button Group',
    withInfo(`
  
      ~~~js
      <ButtonGroup theme={theme()(colors)}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Context - Primary Button Group',
    withInfo(`
    
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'primary' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Button</Button>
          <Button {...buttonProps}>Button</Button>
          <Button {...buttonProps}>Button</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'primary' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Context - Secondary Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup
        theme={theme()(colors)}
        buttonProps={{ context: 'secondary' }}
      >
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Button</Button>
          <Button {...buttonProps}>Button</Button>
          <Button {...buttonProps}>Button</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup
        theme={theme()(colors)}
        buttonProps={{ context: 'secondary' }}
      >
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )
  .add(
    'Context - Danger Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'danger' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Button</Button>
          <Button {...buttonProps}>Button</Button>
          <Button {...buttonProps}>Button</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'danger' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Context - Ghost Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'ghost' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'ghost' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Size - Small Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup
        theme={theme()(colors)}
        buttonProps={{ size: 'small', stretch: false }}
      >
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup
        theme={theme()(colors)}
        buttonProps={{ size: 'small', stretch: false }}
      >
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Size - Large Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ size: 'large' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ size: 'large' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Stretch Button',
    withInfo(`
         
      ~~~js
      <ButtonGroup theme={theme()(colors)} stretch={true}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} stretch={true}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
            <Button {...buttonProps}>Button</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )
