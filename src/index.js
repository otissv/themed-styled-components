import React from 'react'
import { render } from 'react-dom'
import { Provider as ThemeProvider } from './Provider'
import styled from 'styled-components'
import { dark } from './themes/dark'
import { light } from './themes/light'

const themes = {
  dark,
  light
}

const AppStyled = styled.div`
  color: ${({ theme }) => theme.foreground};
`

const App = ({ theme }) => (
  <AppStyled theme={theme}>Hello Themed Styled Componets</AppStyled>
)

render(
  <ThemeProvider themes={themes} default="light">
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
)
