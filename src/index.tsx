import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import Geocode from 'react-geocode'

import App from './App'
import { GOOGLE_MAP_API_KEY } from './config/constants'
import { store } from './redux/store'

Geocode.setApiKey(GOOGLE_MAP_API_KEY)
Geocode.enableDebug()

const persistor = persistStore(store)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
