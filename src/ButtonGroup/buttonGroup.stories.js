import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { buttonGroup } from './index'
import { Button } from '../Button'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const ButtonGroup = buttonGroup``

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

  /* ==========================================================================
  * Button Group Context
  * ======================================================================== */

  .add(
    'Context - Accent Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup
        theme={theme()(colors)}
        buttonProps={{ context: 'accent' }}
      >
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Accent</Button>
          <Button {...buttonProps}>Accent</Button>
          <Button {...buttonProps}>Accent</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

      
    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'accent' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Accent</Button>
            <Button {...buttonProps}>Accent</Button>
            <Button {...buttonProps}>Accent</Button>
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
          <Button {...buttonProps}>Danger</Button>
          <Button {...buttonProps}>Danger</Button>
          <Button {...buttonProps}>Danger</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'danger' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Danger</Button>
            <Button {...buttonProps}>Danger</Button>
            <Button {...buttonProps}>Danger</Button>
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
            <Button {...buttonProps}>Ghost</Button>
            <Button {...buttonProps}>Ghost</Button>
            <Button {...buttonProps}>Ghost</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'ghost' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Ghost</Button>
            <Button {...buttonProps}>Ghost</Button>
            <Button {...buttonProps}>Ghost</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Context - Success Button Group',
    withInfo(`
    
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'success' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Success</Button>
          <Button {...buttonProps}>Success</Button>
          <Button {...buttonProps}>Success</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'success' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Success</Button>
            <Button {...buttonProps}>Success</Button>
            <Button {...buttonProps}>Success</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  .add(
    'Context - Warning Button Group',
    withInfo(`
    
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'warning' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Warning</Button>
          <Button {...buttonProps}>Warning</Button>
          <Button {...buttonProps}>Warning</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ context: 'warning' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Warning</Button>
            <Button {...buttonProps}>Warning</Button>
            <Button {...buttonProps}>Warning</Button>
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
            <Button {...buttonProps}>Small</Button>
            <Button {...buttonProps}>Small</Button>
            <Button {...buttonProps}>Small</Button>
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
            <Button {...buttonProps}>Small</Button>
            <Button {...buttonProps}>Small</Button>
            <Button {...buttonProps}>Small</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  /* ==========================================================================
  * Button Group Size
  * ======================================================================== */

  .add(
    'Size - Large Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup theme={theme()(colors)} buttonProps={{ size: 'large' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Large</Button>
            <Button {...buttonProps}>Large</Button>
            <Button {...buttonProps}>Large</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} buttonProps={{ size: 'large' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Large</Button>
            <Button {...buttonProps}>Large</Button>
            <Button {...buttonProps}>Large</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )

  /* ==========================================================================
  * Button Group Stretch
  * ======================================================================== */

  .add(
    'Stretch Button',
    withInfo(`
         
      ~~~js
      <ButtonGroup theme={theme()(colors)} stretch={true}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Stretch</Button>
            <Button {...buttonProps}>Stretch</Button>
            <Button {...buttonProps}>Stretch</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ButtonGroup theme={theme()(colors)} stretch={true}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Stretch</Button>
            <Button {...buttonProps}>Stretch</Button>
            <Button {...buttonProps}>Stretch</Button>
          </Fragment>
        )}
      </ButtonGroup>
    ))
  )
