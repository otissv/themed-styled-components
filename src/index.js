import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as ThemeProvider } from './Provider'
import styled from 'styled-components'
import { dark } from './dark'
import { light } from './light'
import { theme } from './theme'

const AppStyled = styled.div`
  color: ${({ theme }) => theme.foreground};
`

const App = ({ theme }) => (
  <AppStyled theme={theme}>Hello Themed Styled Components</AppStyled>
)

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'light'
    }
  }

  switchTheme = event => {
    const active = event.target.dataset.theme
    this.setState({ active })
  }

  render() {
    return (
      <ThemeProvider
        theme={theme}
        schemes={{ dark, light }}
        active={this.state.active}
      >
        <div>
          <button data-theme="dark" onClick={this.switchTheme}>
            dark theme
          </button>
          <button data-theme="light" onClick={this.switchTheme}>
            light theme
          </button>

          <App />
        </div>
      </ThemeProvider>
    )
  }
}

render(<Layout />, document.getElementById('root'))
