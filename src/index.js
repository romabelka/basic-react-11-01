import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import store from './store'

render(<Provider store = {store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>, document.getElementById('container'))