import {createStore} from 'redux'
import rootReducer from '../reducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

//dev only, no need in prod
window.store = store

export default store