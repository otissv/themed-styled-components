import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { accordion } from './index'
import { accordionItem } from './AccordionItem'
import { accordionButton } from './AccordionButton'
import { accordionContent } from './AccordionContent'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Accordion', module)

const Accordion = accordion``
const AccordionItem = accordionItem``
const AccordionButton = accordionButton``
const AccordionContent = accordionContent``

stories.add(
  'Default - Accordion',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => (
    <Accordion theme={theme()(colors)}>
      {({ itemProps, buttonProps, contentProps }) => (
        <AccordionItem {...itemProps}>
          {props => [
            <Fragment>
              <AccordionButton
                {...buttonProps}
                iconOpenPros={{ icon: 'chevron-right' }}
                iconClosePros={{ icon: 'chevron-down' }}
              >
                Item
              </AccordionButton>
              <AccordionContent {...contentProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionContent>
            </Fragment>,
            <Fragment>
              <AccordionButton {...buttonProps}>Item</AccordionButton>
              <AccordionContent {...contentProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionContent>
            </Fragment>
          ]}
        </AccordionItem>
      )}
    </Accordion>
  ))
)
