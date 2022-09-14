import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.module.css'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './componets/common/header/header'

import { createStore } from 'redux'
import searchReducer from './redux/reducers'

const store = createStore(searchReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
