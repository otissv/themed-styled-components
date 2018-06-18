import React, { Fragment } from 'react'

import { Button } from '../Button'
import { ThemeProvider } from '../Theme'
import { buttonGroup } from './index'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const ButtonGroup = buttonGroup``

const stories = storiesOf('Button Group', module)

stories
  .add(
    'Default - Button Group',
    withInfo(`
  
      ~~~js
      <ButtonGroup>
          {() => (
            <Fragment>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </Fragment>
          )}
        </ButtonGroup>
      ~~~

    `)(() => (
      <ThemeProvider>
        <ButtonGroup>
          {() => (
            <Fragment>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Button Group Context
  * ======================================================================== */

  .add(
    'Context - Accent Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup buttonProps={{ context: 'accent' }}>
        {buttonProps => (
          <Fragment>
            <Button {...buttonProps}>Accent</Button>
            <Button {...buttonProps}>Accent</Button>
            <Button {...buttonProps}>Accent</Button>
          </Fragment>
        )}
      </ButtonGroup>
      ~~~

      
    `)(() => (
      <ThemeProvider>
        <ButtonGroup buttonProps={{ context: 'accent' }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Accent</Button>
              <Button {...buttonProps}>Accent</Button>
              <Button {...buttonProps}>Accent</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup  buttonProps={{ context: 'danger' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Danger</Button>
          <Button {...buttonProps}>Danger</Button>
          <Button {...buttonProps}>Danger</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ThemeProvider>
        <ButtonGroup buttonProps={{ context: 'danger' }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Danger</Button>
              <Button {...buttonProps}>Danger</Button>
              <Button {...buttonProps}>Danger</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Ghost Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup  buttonProps={{ context: 'ghost' }}>
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
      <ThemeProvider>
        <ButtonGroup buttonProps={{ context: 'ghost' }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Ghost</Button>
              <Button {...buttonProps}>Ghost</Button>
              <Button {...buttonProps}>Ghost</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Success Button Group',
    withInfo(`
    
      ~~~js
      <ButtonGroup  buttonProps={{ context: 'success' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Success</Button>
          <Button {...buttonProps}>Success</Button>
          <Button {...buttonProps}>Success</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ThemeProvider>
        <ButtonGroup buttonProps={{ context: 'success' }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Success</Button>
              <Button {...buttonProps}>Success</Button>
              <Button {...buttonProps}>Success</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Warning Button Group',
    withInfo(`
    
      ~~~js
      <ButtonGroup  buttonProps={{ context: 'warning' }}>
        {buttonProps => <Fragment>
          <Button {...buttonProps}>Warning</Button>
          <Button {...buttonProps}>Warning</Button>
          <Button {...buttonProps}>Warning</Button>
          </Fragment>}
      </ButtonGroup>
      ~~~

    `)(() => (
      <ThemeProvider>
        <ButtonGroup buttonProps={{ context: 'warning' }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Warning</Button>
              <Button {...buttonProps}>Warning</Button>
              <Button {...buttonProps}>Warning</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Button Group Size
  * ======================================================================== */

  .add(
    'Size - Small Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup
        
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
      <ThemeProvider>
        <ButtonGroup buttonProps={{ size: 'small', stretch: false }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Small</Button>
              <Button {...buttonProps}>Small</Button>
              <Button {...buttonProps}>Small</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Large Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup  buttonProps={{ size: 'large' }}>
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
      <ThemeProvider>
        <ButtonGroup buttonProps={{ size: 'large' }}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Large</Button>
              <Button {...buttonProps}>Large</Button>
              <Button {...buttonProps}>Large</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Button Group Stretch
  * ======================================================================== */

  .add(
    'Stretch - Button Group',
    withInfo(`
         
      ~~~js
      <ButtonGroup  stretch={true}>
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
      <ThemeProvider>
        <ButtonGroup stretch={true}>
          {buttonProps => (
            <Fragment>
              <Button {...buttonProps}>Stretch</Button>
              <Button {...buttonProps}>Stretch</Button>
              <Button {...buttonProps}>Stretch</Button>
            </Fragment>
          )}
        </ButtonGroup>
      </ThemeProvider>
    ))
  )
