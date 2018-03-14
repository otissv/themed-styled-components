import React from 'react'
import { ThemeProvider } from 'styled-components'

export class Provider extends React.Component {
  render() {
    const { active, schemes, theme } = this.props
    const _theme = theme()(schemes[active])

    return <ThemeProvider theme={_theme}>{this.props.children}</ThemeProvider>
  }
}
