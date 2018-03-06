import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { card, cardHeader, cardBody, cardFooter } from './index'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const Card = card`
`
const CardHeader = cardHeader
const CardBody = cardBody
const CardFooter = cardFooter

const stories = storiesOf('Card', module)

stories
  .add(
    'Default Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" theme={theme()(colors)}>
        {() => (
          <Fragment>
            <h3>Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)}>
        {() => (
          <Fragment>
            <h3>Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  /* ==========================================================================
  * Card Context
  * ======================================================================== */

  .add(
    'Context - Accent Card',
    withInfo(`
    
    ~~~js
    <Card className="Card" theme={theme()(colors)} context="accent">
      {() => (
        <Fragment>
          <h3>Accent</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </Fragment>
      )}
    </Card>
    ~~~

  `)(() => (
      <Card className="Card" theme={theme()(colors)} context="accent">
        {() => (
          <Fragment>
            <h3>Accent</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Context - Primary Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" theme={theme()(colors)} context="primary">
        {() => (
          <Fragment>
            <h3>Primary</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} context="primary">
        {() => (
          <Fragment>
            <h3>Primary</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Context - Danger Card',
    withInfo(`
   
      ~~~js
      <Card className="Card" theme={theme()(colors)} context="danger">
        {() => (
          <Fragment>
            <h3>Danger</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} context="danger">
        {() => (
          <Fragment>
            <h3>Danger</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Context - Ghost Card',
    withInfo(`
   
      ~~~js
      <Card className="Card" theme={theme()(colors)} context="ghost">
        {() => (
          <Fragment>
            <h3>Ghost</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} context="ghost">
        {() => (
          <Fragment>
            <h3>Ghost</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  /* ==========================================================================
  * Card Size
  * ======================================================================== */

  .add(
    'Size - Small Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" theme={theme()(colors)} size="small">
        {() => (
          <Fragment>
            <h3>Small</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} size="small">
        {() => (
          <Fragment>
            <h3>Small</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Size - Large Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" theme={theme()(colors)} size="large">
        {() => (
          <Fragment>
            <h3>Large</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} size="large">
        {() => (
          <Fragment>
            <h3>Large</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </Fragment>
        )}
      </Card>
    ))
  )

  /* ==========================================================================
  * Card Header and Footer
  * ======================================================================== */
  .add(
    'Card Header and Footer',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" theme={theme()(colors)} collapse>
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps}>
              <h3>Title</h3>
            </CardHeader>
            <CardBody {...cardBodyProps}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps}>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} collapse>
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps}>
              <h3>Title</h3>
            </CardHeader>
            <CardBody {...cardBodyProps}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps}>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Size - Small Card Header and Footer',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" theme={theme()(colors)} collapse size='small'>
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps} size='small'>
              <h3>Small</h3>
            </CardHeader>
            <CardBody {...cardBodyProps} size='small'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps} size='small'>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} collapse size="small">
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps} size="small">
              <h3>Small</h3>
            </CardHeader>
            <CardBody {...cardBodyProps} size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps} size="small">
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Size - Large Card Header and Footer',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" theme={theme()(colors)} collapse size='large'>
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps} size='large'>
              <h3>Large</h3>
            </CardHeader>
            <CardBody {...cardBodyProps} size='large'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps} size='large'>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} collapse size="large">
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps} size="large">
              <h3>Large</h3>
            </CardHeader>
            <CardBody {...cardBodyProps} size="large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps} size="large">
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
    ))
  )

  .add(
    'Collapse Card Header and Footer',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" theme={theme()(colors)} collapse>
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps} collapse>
              <h3>Large</h3>
            </CardHeader>
            <CardBody {...cardBodyProps} collapse>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps} collapse>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <Card className="Card" theme={theme()(colors)} collapse>
        {({ cardBodyProps, cardHeaderProps }) => (
          <Fragment>
            <CardHeader {...cardHeaderProps} collapse>
              <h3>Large</h3>
            </CardHeader>
            <CardBody {...cardBodyProps} collapse>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter {...cardBodyProps} collapse>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
    ))
  )
