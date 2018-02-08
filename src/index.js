import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import {HashRouter} from 'react-router-dom'
import store from './store'

render(<Provider store = {store}>
    <HashRouter>
        <App/>
    </HashRouter>
</Provider>, document.getElementById('container'))