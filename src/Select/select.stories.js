import React, { Fragment } from 'react'

import { ThemeProvider } from '../ThemeContext'
import { dark } from '../dark'
import { light } from '../light'
import { select } from './index'
import { selectInput } from './SelectInput'
import { selectOption } from './SelectOption'
import { selectOptions } from './SelectOptions'
import { storiesOf } from '@storybook/react'
import { theme } from '../theme'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Select', module)

const Select = select``
const SelectInput = selectInput``
const SelectOption = selectOption``
const SelectOptions = selectOptions``

stories.add(
  'Default - Select',
  withInfo(`
  
      ~~~js
      
      ~~~

    `)(() => (
    <ThemeProvider>
      <Select active="option1">
        {() => (
          <Fragment>
            <SelectInput placeholder="Select" />
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
    </ThemeProvider>
  ))
)

// .add(
//   'Autocomplete - Select',
//   withInfo(`

//     ~~~js

//     ~~~

//   `)(() => (
//     <ThemeProvider>
//       <Select active="option1" autocomplete>
//         {() => (
//           <Fragment>
//             <SelectInput placeholder="Select" />
//             <SelectOptions>
//               <SelectOption value="autoselect1" label="auto 1">
//                 Auto 1
//               </SelectOption>
//               <SelectOption value="autoselect2" label="auto 2">
//                 Auto 2
//               </SelectOption>
//               <SelectOption value="autoselect3" label="auto 3">
//                 Auto 3
//               </SelectOption>
//             </SelectOptions>
//           </Fragment>
//         )}
//       </Select>
//     </ThemeProvider>
//   ))
// )

// .add(
//   'MultiSelect - Select',
//   withInfo(`

//     ~~~js

//     ~~~

//   `)(() => (
//     <ThemeProvider>
//       <Select active="multi1" multiselect>
//         {() => (
//           <Fragment>
//             <SelectInput placeholder="Select" />
//             <SelectOptions>
//               <SelectOption value="multi1" label="Multi 1">
//                 Multi 1
//               </SelectOption>
//               <SelectOption value="multi2" label="Multi 2">
//                 Multi 2
//               </SelectOption>
//               <SelectOption value="multi3" label="Multi 3">
//                 Multi 3
//               </SelectOption>
//             </SelectOptions>
//           </Fragment>
//         )}
//       </Select>
//     </ThemeProvider>
//   ))
// )

{
  /* <Select
        value="0"
        options={[
          { label: 'Option 1', value: '0' },
          { label: 'Option 2', value: '1' },
          { label: 'Option 3', value: '2' },
          { label: 'Option 4', value: '3' }
        ]} */
}
