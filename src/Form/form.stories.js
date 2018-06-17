import { FloatConsumer, floatLabel } from '../FloatLabel'
import React, { Fragment } from 'react'

import { Formik } from 'formik'
import { ThemeProvider } from '../ThemeContext'
import { button } from '../Button'
import { dark } from '../dark'
import { form } from './index'
import { formError } from './FormError'
import { formErrorList } from './FormErrorList'
import { formInput } from './FormInput'
import { formLabel } from './FormLabel'
import { formRow } from './FormRow'
import { light } from '../light'
import { storiesOf } from '@storybook/react'
import { theme } from '../theme'
import { withInfo } from '@storybook/addon-info'

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
      <Form name="myForm">
        <FormInput name="name" />
      </Form>
    </ThemeProvider>
  ))
)

// <FormInput name="name" {...context} />

// model={[
//   {
//     name: 'name',
//     label: 'Name',
//     type: 'text',
//     value: 'Otis',
//     validation: { required: true }
//   },
//   {
//     name: 'phoneNumber',
//     label: 'Phone number',
//     type: 'phone',
//     value: '130-54640-461'
//   },
//   {
//     name: 'email',
//     type: 'email',
//     label: 'Email address',
//     value: 'x@x.com'
//   }
// ]}

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
