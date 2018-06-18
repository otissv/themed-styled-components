import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { card } from './index'
import { cardBody } from './CardBody'
import { cardFooter } from './CardFooter'
import { cardHeader } from './CardHeader'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const Card = card``
const CardHeader = cardHeader``
const CardBody = cardBody``
const CardFooter = cardFooter``

const stories = storiesOf('Card', module)

stories
  .add(
    'Default - Card',
    withInfo(`
      
      ~~~js
      <Card className="Card">
        {() => (
          <Fragment>
            <h3>Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card">
          {() => (
            <Fragment>
              <h3>Default</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Card Context
  * ======================================================================== */

  .add(
    'Context - Accent Card',
    withInfo(`
    
    ~~~js
    <Card className="Card" context="accent">
      {() => (
        <Fragment>
          <h3>Accent</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Fragment>
      )}
    </Card>
    ~~~

  `)(() => (
      <ThemeProvider>
        <Card className="Card" context="accent">
          {() => (
            <Fragment>
              <h3>Accent</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Primary Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" context="primary">
        {() => (
          <Fragment>
            <h3>Primary</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" context="primary">
          {() => (
            <Fragment>
              <h3>Primary</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Danger Card',
    withInfo(`
   
      ~~~js
      <Card className="Card" context="danger">
        {() => (
          <Fragment>
            <h3>Danger</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" context="danger">
          {() => (
            <Fragment>
              <h3>Danger</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Context - Ghost Card',
    withInfo(`
   
      ~~~js
      <Card className="Card" context="ghost">
        {() => (
          <Fragment>
            <h3>Ghost</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" context="ghost">
          {() => (
            <Fragment>
              <h3>Ghost</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Card Collapse
  * ======================================================================== */

  .add(
    'Collapse - Card',
    withInfo(`
    
    ~~~js
    <Card className="Card" collapse>
      {() => (
        <Fragment>
          <h3>Collapse</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Fragment>
      )}
    </Card>
    ~~~

  `)(() => (
      <ThemeProvider>
        <Card className="Card" collapse>
          {() => (
            <Fragment>
              <h3>Collapse</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Card Size
  * ======================================================================== */

  .add(
    'Size - Small Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" size="small">
        {() => (
          <Fragment>
            <h3>Small</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" size="small">
          {() => (
            <Fragment>
              <h3>Small</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Large Card',
    withInfo(`
      
      ~~~js
      <Card className="Card" size="large">
        {() => (
          <Fragment>
            <h3>Large</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" size="large">
          {() => (
            <Fragment>
              <h3>Large</h3>
              <p>
                Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  /* ==========================================================================
  * Card Header and Footer
  * ======================================================================== */
  .add(
    'Header and Footer -  Card',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" collapse>
        {() => (
          <Fragment>
            <CardHeader>
              <h3>Title</h3>
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" collapse>
          {() => (
            <Fragment>
              <CardHeader>
                <h3>Title</h3>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </CardBody>
              <CardFooter>
                <a href="#">Read More</a>
              </CardFooter>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Small Card Header and Footer',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" collapse size="small">
        {() => (
          <Fragment>
            <CardHeader size="small">
              <h3>Small</h3>
            </CardHeader>
            <CardBody size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter size="small">
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" collapse size="small">
          {() => (
            <Fragment>
              <CardHeader size="small">
                <h3>Small</h3>
              </CardHeader>
              <CardBody size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </CardBody>
              <CardFooter size="small">
                <a href="#">Read More</a>
              </CardFooter>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Size - Large Card Header and Footer',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" collapse size="large">
        {() => (
          <Fragment>
            <CardHeader size="large">
              <h3>Large</h3>
            </CardHeader>
            <CardBody size="large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter size="large">
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" collapse size="large">
          {() => (
            <Fragment>
              <CardHeader size="large">
                <h3>Large</h3>
              </CardHeader>
              <CardBody size="large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </CardBody>
              <CardFooter size="large">
                <a href="#">Read More</a>
              </CardFooter>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )

  .add(
    'Collapse Header and Footer - Card',
    withInfo(`
      Button component
    
      ~~~js
      <Card className="Card" collapse>
        {() => (
          <Fragment>
            <CardHeader collapse>
              <h3>Large</h3>
            </CardHeader>
            <CardBody collapse>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </CardBody>
            <CardFooter collapse>
              <a href="#">Read More</a>
            </CardFooter>
          </Fragment>
        )}
      </Card>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Card className="Card" collapse>
          {() => (
            <Fragment>
              <CardHeader collapse>
                <h3>Large</h3>
              </CardHeader>
              <CardBody collapse>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </CardBody>
              <CardFooter collapse>
                <a href="#">Read More</a>
              </CardFooter>
            </Fragment>
          )}
        </Card>
      </ThemeProvider>
    ))
  )
