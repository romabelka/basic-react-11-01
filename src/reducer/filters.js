import {combineReducers} from 'redux'
import selectedArticle from './select'
import dateRange from './dateRange'

export default combineReducers({
    selectedArticle,
    dateRange
})