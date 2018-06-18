import { FloatConsumer, floatLabel } from './index'
import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { input } from '../Input'
import { select } from '../Select'
import { selectInput } from '../Select/SelectInput'
import { selectOption } from '../Select/SelectOption'
import { selectOptions } from '../Select/SelectOptions'
import { storiesOf } from '@storybook/react'
import { textarea } from '../Textarea'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('FloatLabel', module)

const FloatLabel = floatLabel``
const Input = input``
const Textarea = textarea``
const Select = select``
const SelectInput = selectInput``
const SelectOption = selectOption``
const SelectOptions = selectOptions``

stories
  .add(
    'Default - Float Label',
    withInfo(`
  
      ~~~js
      <FloatLabel label="Email">
        <FloatConsumer>
          {floatLabelContext => <Input {...floatLabelContext} />}
        </FloatConsumer>
      </FloatLabel>
      ~~~

    `)(() => (
      <ThemeProvider>
        <FloatLabel label="Email">
          <FloatConsumer>
            {floatLabelContext => <Input {...floatLabelContext} />}
          </FloatConsumer>
        </FloatLabel>
      </ThemeProvider>
    ))
  )

  .add(
    'Input - Float Label',
    withInfo(`
  
      ~~~js
      <FloatLabel label="Email" element="text">
        <FloatConsumer>
          {floatLabelContext => <Input {...floatLabelContext} />}
        </FloatConsumer>
      </FloatLabel>
      ~~~

    `)(() => (
      <ThemeProvider>
        <FloatLabel label="Email" element="text">
          <FloatConsumer>
            {floatLabelContext => <Input {...floatLabelContext} />}
          </FloatConsumer>
        </FloatLabel>
      </ThemeProvider>
    ))
  )

  .add(
    'Textarea - Float Label',
    withInfo(`
  
      ~~~js
      <FloatLabel label="Message" element="textarea">
        <FloatConsumer>
          {floatLabelContext => <Textarea {...floatLabelContext} />}
        </FloatConsumer>
      </FloatLabel>
      ~~~

    `)(() => (
      <ThemeProvider>
        <FloatLabel label="Message" element="textarea">
          <FloatConsumer>
            {floatLabelContext => <Textarea {...floatLabelContext} />}
          </FloatConsumer>
        </FloatLabel>
      </ThemeProvider>
    ))
  )

  .add(
    'Select - Float Label',
    withInfo(`
  
      ~~~js
      <FloatLabel label="Select" element="select">
        <FloatConsumer>
          {floatLabelContext => (
            <Select active="option1" {...floatLabelContext}>
              {() => (
                <Fragment>
                  <SelectInput />
                  <SelectOptions>
                    <SelectOption value="option1" label="Option 1">
                      Option 1
                    </SelectOption>
                    <SelectOption value="option2" label="Option 2">
                      Option 2
                    </SelectOption>
                    <SelectOption value="option3" label="Option 3">
                      Option 3
                    </SelectOption>
                  </SelectOptions>
                </Fragment>
              )}
            </Select>
          )}
        </FloatConsumer>
      </FloatLabel>
      ~~~

    `)(() => (
      <ThemeProvider>
        <FloatLabel label="Select" element="select">
          <FloatConsumer>
            {floatLabelContext => (
              <Select active="option1" {...floatLabelContext}>
                {() => (
                  <Fragment>
                    <SelectInput />
                    <SelectOptions>
                      <SelectOption value="option1" label="Option 1">
                        Option 1
                      </SelectOption>
                      <SelectOption value="option2" label="Option 2">
                        Option 2
                      </SelectOption>
                      <SelectOption value="option3" label="Option 3">
                        Option 3
                      </SelectOption>
                    </SelectOptions>
                  </Fragment>
                )}
              </Select>
            )}
          </FloatConsumer>
        </FloatLabel>
      </ThemeProvider>
    ))
  )
