import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'
import filterArticles from './filterArticles'

export default combineReducers({
    counter: counterReducer,
    articles,
    filterArticles,
    filters
})