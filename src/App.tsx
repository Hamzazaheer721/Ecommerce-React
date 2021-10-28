import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import RouterComponent from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

const App: FC<{}> = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <RouterComponent />
  </ThemeProvider>
)

export default App
