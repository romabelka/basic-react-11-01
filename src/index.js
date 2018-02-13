import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Root from './components/Root'
import {ConnectedRouter} from 'react-router-redux'
//import {HashRouter, BrowserRouter} from 'react-router-dom'
import store from './store'
import history from './history'



render(<Provider store = {store}>
    <ConnectedRouter history = {history}>
        <Root/>
    </ConnectedRouter>
</Provider>, document.getElementById('container'))