import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducer'
import logger from '../middlewares/logger'
import uniqueIds  from '../middlewares/uniqueIds'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

const enhancer = composeEnhancers(
    applyMiddleware(logger, uniqueIds)
)
const store = createStore(rootReducer, enhancer)

//dev only, no need in prod
window.store = store

export default store