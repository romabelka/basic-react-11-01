import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'
import selectDateRange from './selectDateRange'

export default combineReducers({
    counter: counterReducer,
    articles,
    select,
    selectDateRange
})