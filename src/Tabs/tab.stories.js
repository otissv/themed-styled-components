import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { tabs } from './index'
import { tabList } from './TabList'
import { tabPanel } from './TabPanel'

import { dark } from '../dark'
import { light as colors } from '../light'
import { theme } from '../theme'

const stories = storiesOf('Tabs', module)

const Tabs = tabs``
const TabList = tabList`white-space:nowrap;`
const TabPanel = tabPanel``

stories.add(
  'Default - Tabs',
  withInfo(`
  
      ~~~js

      ~~~

    `)(() => (
    <Tabs theme={theme()(colors)} active="1">
      {({ tabListProps, tabPanelProps }) => (
        <Fragment>
          <TabList
            {...tabListProps}
            items={[
              { title: 'Tab 1', uid: '1' },
              { title: 'Tab 2', uid: '2' },
              { title: 'Tab 3', uid: '3' },
              { title: 'Tab 4', uid: '4' },
              { title: 'Tab 5', uid: '5' },
              { title: 'Tab 6', uid: '6' },
              { title: 'Tab 7', uid: '7' },
              { title: 'Tab 8', uid: '8' },
              { title: 'Tab 9', uid: '9' }
            ]}
          />

          <TabPanel {...tabPanelProps} uid="1">
            {() => 'Tab panel 1'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="2">
            {() => 'Tab panel 2'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="3">
            {() => 'Tab panel 3'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="4">
            {() => 'Tab panel 4'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="5">
            {() => 'Tab panel 5'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="6">
            {() => 'Tab panel 6'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="7">
            {() => 'Tab panel 7'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="8">
            {() => 'Tab panel 8'}
          </TabPanel>
          <TabPanel {...tabPanelProps} uid="9">
            {() => 'Tab panel 9'}
          </TabPanel>
        </Fragment>
      )}
    </Tabs>
  ))
)
