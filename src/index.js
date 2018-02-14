import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import LanguageContextProvider from './components/LanguageContextProvider'
import App from './components/App'
import {ConnectedRouter} from 'react-router-redux'
//import {HashRouter, BrowserRouter} from 'react-router-dom'
import store from './store'
import history from './history'

render(<Provider store = {store}>
    <ConnectedRouter history = {history}>
        <LanguageContextProvider>
            <App/>
        </LanguageContextProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('container'))