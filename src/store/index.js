import {createStore} from 'redux'
import rootReducer from '../reducer'

const store = createStore(rootReducer)

//dev only, no need in prod
window.store = store

export default store