import React from 'react'
import { ThemeProvider } from 'styled-components'

export class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.default
    }
  }

  switchTheme = event => {
    const theme = event.target.dataset.theme
    this.setState({ active: theme })
  }

  render() {
    const { themes } = this.props
    return (
      <ThemeProvider theme={themes[this.state.active]}>
        <div>
          <button data-theme="dark" onClick={this.switchTheme}>
            dark theme
          </button>
          <button data-theme="light" onClick={this.switchTheme}>
            light theme
          </button>
          {this.props.children}
        </div>
      </ThemeProvider>
    )
  }
}
