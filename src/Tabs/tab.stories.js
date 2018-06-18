import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { storiesOf } from '@storybook/react'
import { tabList } from './TabList'
import { tabPanel } from './TabPanel'
import { tabs } from './index'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Tabs', module)

const Tabs = tabs``
const TabList = tabList``
const TabPanel = tabPanel``

stories
  .add(
    'Default - Tabs',
    withInfo(`
  
      ~~~js
      <Tabs active="1">
          {() => (
            <Fragment>
              <TabList
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

              <TabPanel uid="1">{() => 'Tab panel 1'}</TabPanel>
              <TabPanel uid="2">{() => 'Tab panel 2'}</TabPanel>
              <TabPanel uid="3">{() => 'Tab panel 3'}</TabPanel>
              <TabPanel uid="4">{() => 'Tab panel 4'}</TabPanel>
              <TabPanel uid="5">{() => 'Tab panel 5'}</TabPanel>
              <TabPanel uid="6">{() => 'Tab panel 6'}</TabPanel>
              <TabPanel uid="7">{() => 'Tab panel 7'}</TabPanel>
              <TabPanel uid="8">{() => 'Tab panel 8'}</TabPanel>
              <TabPanel uid="9">{() => 'Tab panel 9'}</TabPanel>
            </Fragment>
          )}
        </Tabs>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Tabs active="1">
          {() => (
            <Fragment>
              <TabList
                items={[
                  { title: 'Tab 1', uid: '1' },
                  { title: 'Tab 2', uid: '2' },
                  { title: 'Tab 3', uid: '3' },
                  { title: 'Tab 4', uid: '4' },
                  { title: 'Tab 5', uid: '5' },
                  { title: 'Tab 6', uid: '6' },
                  { title: 'Tab 7', uid: '7' },
                  { title: 'Tab 8', uid: '8' },
                  { title: 'Tab 9', uid: '9' },
                ]}
              />

              <TabPanel uid="1">{() => 'Tab panel 1'}</TabPanel>
              <TabPanel uid="2">{() => 'Tab panel 2'}</TabPanel>
              <TabPanel uid="3">{() => 'Tab panel 3'}</TabPanel>
              <TabPanel uid="4">{() => 'Tab panel 4'}</TabPanel>
              <TabPanel uid="5">{() => 'Tab panel 5'}</TabPanel>
              <TabPanel uid="6">{() => 'Tab panel 6'}</TabPanel>
              <TabPanel uid="7">{() => 'Tab panel 7'}</TabPanel>
              <TabPanel uid="8">{() => 'Tab panel 8'}</TabPanel>
              <TabPanel uid="9">{() => 'Tab panel 9'}</TabPanel>
            </Fragment>
          )}
        </Tabs>
      </ThemeProvider>
    ))
  )

  .add(
    'Dynamic - Tabs',
    withInfo(`
  
      ~~~js
      <ThemeProvider>
        <Tabs
          active="1"
          items={[
            {
              title: 'Tab 1',
              uid: '1',
              component: () => <div>Dynamic Tab panel 1</div>
            },
            {
              title: 'Tab 2',
              uid: '2',
              component: () => <div>Dynamic Tab panel 2</div>
            },
            {
              title: 'Tab 3',
              uid: '3',
              component: () => <div>Dynamic Tab panel 3</div>
            },
            {
              title: 'Tab 4',
              uid: '4',
              component: () => <div>Dynamic Tab panel 4</div>
            },
            {
              title: 'Tab 5',
              uid: '5',
              component: () => <div>Dynamic Tab panel 5</div>
            },
            {
              title: 'Tab 6',
              uid: '6',
              component: () => <div>Dynamic Tab panel 6</div>
            },
            {
              title: 'Tab 7',
              uid: '7',
              component: () => <div>Dynamic Tab panel 7</div>
            },
            {
              title: 'Tab 8',
              uid: '8',
              component: () => <div>Dynamic Tab panel 8</div>
            },
            {
              title: 'Tab 9',
              uid: '9',
              component: () => <div>Dynamic Tab panel 9</div>
            }
          ]}
        />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Tabs
          active="1"
          items={[
            {
              title: 'Tab 1',
              uid: '1',
              component: () => <div>Dynamic Tab panel 1</div>,
            },
            {
              title: 'Tab 2',
              uid: '2',
              component: () => <div>Dynamic Tab panel 2</div>,
            },
            {
              title: 'Tab 3',
              uid: '3',
              component: () => <div>Dynamic Tab panel 3</div>,
            },
            {
              title: 'Tab 4',
              uid: '4',
              component: () => <div>Dynamic Tab panel 4</div>,
            },
            {
              title: 'Tab 5',
              uid: '5',
              component: () => <div>Dynamic Tab panel 5</div>,
            },
            {
              title: 'Tab 6',
              uid: '6',
              component: () => <div>Dynamic Tab panel 6</div>,
            },
            {
              title: 'Tab 7',
              uid: '7',
              component: () => <div>Dynamic Tab panel 7</div>,
            },
            {
              title: 'Tab 8',
              uid: '8',
              component: () => <div>Dynamic Tab panel 8</div>,
            },
            {
              title: 'Tab 9',
              uid: '9',
              component: () => <div>Dynamic Tab panel 9</div>,
            },
          ]}
        />
      </ThemeProvider>
    ))
  )
