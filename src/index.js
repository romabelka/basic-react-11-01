import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import {ConnectedRouter} from 'react-router-redux'
//import {HashRouter, BrowserRouter} from 'react-router-dom'
import store from './store'
import history from './history'
import Language from './components/Language' 

render(<Provider store = {store}>
    <ConnectedRouter history = {history}>
    <Language > 
        <App/>
        </Language>
    </ConnectedRouter>
</Provider>, document.getElementById('container'))