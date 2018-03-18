import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../ThemeContext'
import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

import { form } from './index'
import { formError } from './FormError'
import { formErrorList } from './FormErrorList'
import { formInput } from './FormInput'
import { formLabel } from './FormLabel'
import { formRow } from './FormRow'

const stories = storiesOf('Form', module)

const Form = form``
// const FormRow = formRow``
// const FormLabel = formLabel``
// const FormError = formError``
// const FormErrorList = formErrorList``
// const FormInput = formInput``

stories.add(
  'Default - Form',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => (
    <ThemeProvider>
      <Form />
    </ThemeProvider>
  ))
)
