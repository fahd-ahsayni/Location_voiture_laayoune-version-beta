import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './config/reducers'
import App from './App'

import { ThemeProvider } from "@material-tailwind/react";


const store = legacy_createStore(reducers)

const subscribe = store.subscribe(()=> console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </Provider>,
)
