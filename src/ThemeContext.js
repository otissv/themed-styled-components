import React from 'react'
import { dark } from './dark'
import { light } from './light'
import { theme } from './theme'

const ThemeContext = React.createContext({ active: '' })

class Provider extends React.Component {
  static defaultProps = {
    active: 'light',
    schemes: { light, dark },
    theme
  }

  render() {
    const { active, schemes, theme, children } = this.props

    return (
      <ThemeContext.Provider value={theme()(schemes[active])}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export const ThemeProvider = Provider
export const ThemeConsumer = ThemeContext.Consumer
