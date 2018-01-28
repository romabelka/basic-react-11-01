import {combineReducers} from 'redux'
import counter from './counter'
import articles from './articles'
import filters from './filters'

export default combineReducers({
    counter,
    articles,
    filters
})