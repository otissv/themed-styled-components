import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '../ThemeContext'
import { dark } from '../dark'
import { light } from '../light'
import { theme } from '../theme'

import { form } from './index'
import { formError } from './FormError'
import { formErrorList } from './FormErrorList'
import { formInput } from './FormInput'
import { formLabel } from './FormLabel'
import { formRow } from './FormRow'
import { button } from '../Button'
import { floatLabel, FloatConsumer } from '../FloatLabel'

const stories = storiesOf('Form', module)

const Form = form``
const FormRow = formRow``
// const FormLabel = formLabel``
// const FormError = formError``
// const FormErrorList = formErrorList``
const FormInput = formInput``
const FloatLabel = floatLabel``
const Button = button``

stories.add(
  'Default - Form',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => (
    <ThemeProvider>
      <Form
        name="myform"
        model={[
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            value: 'Otis',
            validation: { required: true }
          },
          {
            name: 'phoneNumber',
            label: 'Phone number',
            type: 'phone',
            value: '130-54640-461'
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email address',
            value: 'x@x.com'
          }
        ]}
      >
        <Fragment>
          <FormInput name="name" />
          <FormInput name="phoneNumber" />
          <FormInput name="email" />
        </Fragment>
      </Form>
    </ThemeProvider>
  ))
)

// .add(
//   'FloatLabel - Form',
//   withInfo(`

//   ~~~js

//   ~~~

// `)(() => (
//     <ThemeProvider>
//       <Form
//         model={[
//           {
//             name: 'name',
//             label: 'Name',
//             type: 'text',
//             validation: { required: true }
//           },
//           {
//             name: 'phoneNumber',
//             label: 'Phone number',
//             type: 'phone'
//           },
//           {
//             name: 'email',
//             type: 'email',
//             label: 'Email address'
//           }
//         ]}
//       >
//         {form => {
//           return (
//             <Fragment {...form.name}>
//               <FloatConsumer {...form.name}>
//                 {field => {
//                   return (
//                     <FormInput
//                       {...form.name}
//                       {...field}
//                       onChange={form.onChange}
//                     />
//                   )
//                 }}
//               </FloatConsumer>
//               <FloatConsumer {...form.phoneNumber}>
//                 {field => (
//                   <FormInput
//                     {...form.phoneNumber}
//                     {...field}
//                     onChange={form.onChange}
//                   />
//                 )}
//               </FloatConsumer>
//               <FloatConsumer {...form.email}>
//                 {field => (
//                   <FormInput
//                     {...form.email}
//                     {...field}
//                     onChange={form.onChange}
//                   />
//                 )}
//               </FloatConsumer>
//             </Fragment>
//           )
//         }}
//       </Form>
//     </ThemeProvider>
//   ))
// )
