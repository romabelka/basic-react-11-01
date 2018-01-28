import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articlesFilters from './articlesFilters'

export default combineReducers({
    counter: counterReducer,
    articles,
    articlesFilters
})