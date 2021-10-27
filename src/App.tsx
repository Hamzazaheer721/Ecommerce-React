import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import CustomizeModal from './components/modal'
import RouterComponent from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

const App: FC<{}> = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <CustomizeModal />
    <RouterComponent />
  </ThemeProvider>
)

export default App
