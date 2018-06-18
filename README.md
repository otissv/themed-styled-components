# Themed Styled components

Themeing for styled components



## Work in progress
TODO:

- Installation instructions
- Build
- Finish components

## Usage

```js
import { ThemeProvider, button } from 'themed-styled-components'

const Button = button``

const App = () => (
  <ThemeProvider>
    <Button>
      Large Button
    </Button>
  </ThemeProvider>
)
```

**ThemeProvider Props**

| Prop         | Type   | Description                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| active       | string | Sets the active color theme. Default light.                  |
| colorSchemes | object | Object containing the color schemes. Defaults light and dark |
| themes       | object | Extends themed components                                    |


## Color scheme

**light**

| Key              | value     |
| ---------------- | --------- |
| foreground       | #666      |
| background       | #fff      |
| transparent      | #00ffff00 |
| foregroundInvert | #fff      |
| backgroundInvert | #666      |
| accent2          | #E10098   |
| accent           | #E10098   |
| active           | #E10098   |
| danger2          | #ee395b   |
| danger           | #f0506e   |
| error2           | #fef4f6   |
| error            | #f0506e   |
| muted2           | #d2d2d2   |
| muted            | #777      |
| primary2         | #0f7ae5   |
| primary          | #1e87f0   |
| secondary2       | #999      |
| secondary        | #e5e5e5   |
| success2         | #edfbf6   |
| success          | #32d296   |
| tertiary2        | #515151   |
| tertiary         | #515151   |
| warning2         | #fff6ee   |
| warning          | #faa05a   |


## Development

1.  Run `yarn` to install all the packages.
2.  To start the development server run `npm run start`

### Components

`styles` function loads the theme for the component.

- The first argument in the name of the theme.
- The second argument the theme relating to the prop. These typicaly overwrite the defaults.
- The third argument is a boolean. If true it will not treat the style as a theme prop.

`sharedStyles` Adds theme styles shared across all components such as padding and margins.

All components have a `styled` prop, making it easy to extend an existing style.


### Themes
To style components, component have a corresponding theme. Themes are functions which returns an object containing the styles. Root properties are added directly to the components styles. 

#### Nested objects
Nested objects are used for the components props or for Pseudo classes.


### Example

_Button.js_

```js
import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../Theme/index'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  ${styles('button')};
  ${styles('button', 'context')};
  ${styles('button', 'size')};
  ${styles('button.stretch', 'stretch', true)};
  ${sharedStyles('button')};
  ${props => props.styled};
`

export class Button extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning',
      'ghost',
    ]),
    stretch: PropTypes.bool,
    theme: PropTypes.object,
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <ButtonStyled theme={theme} {...this.props}>
            {children}
          </ButtonStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const button = styled(Button)
```

_button.theme.js_

```js
export function button({ animation, border, colors, depth, font, spacing }) {
  return {
    backgroundColor: colors.background,
    border: border.thinSecondary,
    boxShadow: 'none',
    boxSizing: 'border-box',
    color: colors.foreground,
    cursor: 'pointer',
    display: 'inline-block',
    font: 'inherit',
    fontSize: font.default,
    letterSpacing: font.letterSpacing,
    lineHeight: '2.7',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    padding: `0 ${spacing.large}`,
    textAlign: 'center',
    textDecoration: 'none',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',

    '&:hover': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
    },
    '&:focus': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
    },
    '&:active': {
      backgroundColor: colors.background,
      border: border.thinTertiary,
    },

    /* =====================================
    * Context 
    * =================================== */

    accent: {
      backgroundColor: colors.accent,
      border: border.thinAccent,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.accent2,
        border: border.thinAccent,
      },
      '&:active': {
        backgroundColor: colors.accent2,
        border: border.thinAccent,
      },
      '&:focus': {
        backgroundColor: colors.accent2,
        border: border.thinAccent,
      },
    },
    danger: {
      backgroundColor: colors.danger,
      border: border.thinDanger,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.danger2,
        border: border.thinDanger,
      },
      '&:active': {
        backgroundColor: colors.danger2,
        border: border.thinDanger,
      },
      '&:focus': {
        backgroundColor: colors.danger2,
        border: border.thinDanger,
      },
    },
    ghost: {
      backgroundColor: colors.transparent,
      border: border.thinTransparent,
      '&:hover': {
        backgroundColor: colors.background,
        border: border.thinSecondary,
        color: colors.foreground,
      },
      '&:focus': {
        backgroundColor: colors.background,
        color: colors.foreground,
      },
      '&:active': {
        backgroundColor: colors.background,
        color: colors.foreground,
      },
    },
    primary: {
      backgroundColor: colors.primary,
      border: border.thinPrimary,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.primary2,
        border: border.thinPrimary,
      },
      '&:active': {
        backgroundColor: colors.primary2,
        border: border.thinPrimary,
      },
      '&:focus': {
        backgroundColor: colors.primary2,
        border: border.thinPrimary,
      },
    },
    success: {
      backgroundColor: colors.success,
      border: border.thinSuccess,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.success2,
        border: border.thinSuccess,
      },
      '&:active': {
        backgroundColor: colors.success2,
        border: border.thinSuccess,
      },
      '&:focus': {
        backgroundColor: colors.success2,
        border: border.thinSuccess,
      },
    },
    warning: {
      backgroundColor: colors.warning,
      border: border.thinWarning,
      color: colors.foregroundInvert,
      '&:hover': {
        backgroundColor: colors.warning2,
        border: border.thinWarning,
      },
      '&:active': {
        backgroundColor: colors.warning2,
        border: border.thinWarning,
      },
      '&:focus': {
        backgroundColor: colors.warning2,
        border: border.thinWarning,
      },
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      padding: '0 40px',
      lineHeight: '4',
    },
    small: {
      padding: '0 15px',
      lineHeight: '2',
    },

    /* =====================================
    * Stretch 
    * =================================== */
    stretch: { flex: 1 },
  }
}
```


