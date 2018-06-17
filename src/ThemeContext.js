import PropTypes from 'prop-types'
import React from 'react'
import { dark } from './dark'
import { light } from './light'
import { theme } from './theme'

const ThemeContext = React.createContext({ active: '' })

class Provider extends React.Component {
  static propTypes = {
    active: PropTypes.string,
    colorSchemes: PropTypes.object,
    themes: PropTypes.object
  }

  static defaultProps = {
    active: 'light',
    colorSchemes: { light, dark },
    base: {}
  }

  render() {
    const { active, children, colorSchemes, base } = this.props

    return (
      <ThemeContext.Provider value={theme(base)(colorSchemes[active])}>
        {children}
      </ThemeContext.Provider>
    )
  }
}

export const ThemeProvider = Provider
export const ThemeConsumer = ThemeContext.Consumer
