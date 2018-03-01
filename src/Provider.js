import React from 'react'
import { ThemeProvider } from 'styled-components'

export class Provider extends React.Component {
  render() {
    const { active, schemes, theme } = this.props

    return (
      <ThemeProvider theme={theme(schemes[active])}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
